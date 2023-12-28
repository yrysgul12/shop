import React,{useState} from "react";
import Header from "../components/header";
import Home from "./home";
import Cart from "./cart";
import {Routes, Route} from "react-router-dom";
import { Container } from "react-bootstrap";
import products from "../data/products.json"

const Main = () =>{
    const [data, setData] = useState(products.products);
    const [cart, setCart] = useState([]);
    const [title,setTitle] = useState("Главное")
    const [val,setVal]=useState("")
    const filtrData = (text) =>{
        console.log(text);
        const newArr=products.products.filter((elem)=>elem.category===text)
        setData(newArr)
        setTitle(text)
    }

    const addCart = (id) =>{
        console.log(id);
        const newArr = products.products.find((elem) => elem.id === id)
        setCart([...cart, newArr])
    }
    const deleteCard = (id) =>{
        setCart([...cart.filter((elem, i)=>i!==id)])
    }
    const homeClick=()=>{
        setData(products.products)
        setTitle('Главное')
    }
    const btnSearch =()=>{
        console.log(val)
        const newArr=products.products.filter((elem)=>elem.title.toLowerCase().includes(val.toLocaleLowerCase()))
        setData(newArr)
        setVal("")
    }
    
    return(
        <div>
            <Header
            filtrData={filtrData} 
            cart={cart} 
            btnSearch={btnSearch}
            val={val}
            setVal={setVal}
            homeClick={homeClick} />
            <Container>
                <Routes>
                    <Route path="/" element={<Home data={data}  title={title} addCart={addCart}/>}/>
                    <Route path="/cart" element={<Cart cart={cart}  deleteCard={deleteCard}/>}/>
                </Routes>
            </Container>
        </div>
    )
  }
export default Main;