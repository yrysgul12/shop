import React from "react";
import CartItem from "../components/cart-items";

const Home = ({ data, addCart,title }) => {
  return (
    <div>
        <h1>{title} {title==="Главное"?null:data.length}</h1>
      <div className="d-flex flex-wrap gap-4 justify-content-around mt-4">
        {data.map((product, index) => {
          return (
            <CartItem
              onClick={() => addCart(product.id)}
              {...product}
              children="Add To Card"
            />
            
          );
        })}
      </div>
    </div>
  );
};
export default Home;
