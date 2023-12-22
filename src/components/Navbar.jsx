import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  //hme useSelector ke andar saare state mil jaate hain
  const items = useSelector((state) => state.cart);

  console.log(items);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span style={{ fontWeight: "bolder" }}>Redux Store</span>
      <div style={{ display: "flex", gap: "7px" }}>
        <Link
          to={"/"}
          style={{
            fontWeight: "bolder",
            textDecoration: "none",
            color: "black",
          }}
        >
          Home
        </Link>
        <Link
          to={"/cart"}
          style={{
            fontWeight: "bolder",
            textDecoration: "none",
            color: "black",
          }}
        >
          Cart
        </Link>
        <span style={{ fontWeight: "bolder" }}>items:{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
