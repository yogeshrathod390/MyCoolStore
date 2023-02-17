import React, { useState, useEffect } from "react";
import Cards from "./Cards";
const MainCard = () => {
  const [products, SetProducts] = useState([]);
  async function calldata() {
    const data = await fetch("https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products",
      {
        headers: {
          Authorization: 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
        },
      }
    );
    const responce = await data.json();
    SetProducts(responce)
    console.log(responce);
  }
  useEffect(() => {
    calldata();
  }, []);
  return (
      <div className="row">
        {products && products.map((element) => {
          return (
            <div className="col-md-4" key={element.id}>
              <Cards imageUrl={element.image} />
            </div>
          );
        })}
    </div>
  );
};

export default MainCard;
