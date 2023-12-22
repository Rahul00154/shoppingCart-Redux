import React, { useState, useEffect } from "react";
import { add } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [products, setProducts] = useState([]); //we get product in array format

  //here we use dispatch method to pass the payload
  const dispatch = useDispatch();

  const fethProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    console.log(res);
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    fethProduct();
  }, []);

  const handleAdd = (product) => {
    //here we pass the action.paylload to add action to our store
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt="img" />
          <h5>{product.title}</h5>
          <h6> ${product.price}</h6>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
