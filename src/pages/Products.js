import React from "react";
import { Link } from "react-router-dom";
function Products() {
  return (
    <section>
      <h1>Products are here..</h1>
      <li><Link to='/products/p1'> A book </Link></li>
      <li><Link to='/products/p2'> A carpet </Link></li>
      <li><Link to='/products/p3'> An online course </Link></li>
    
    </section>
  );
}

export default Products;
