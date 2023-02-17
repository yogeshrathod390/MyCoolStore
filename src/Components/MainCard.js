import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import product from "./../Products"
const MainCard = () => {
  // let matrial={martial:[

  // ]}
  const [data, SetData] = useState([]);
  async function calldata() {
   
    let matrial="https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material"
   
    let Prod="https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products";
    const data = await fetch(Prod,
      {
        headers: {
          Authorization:'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
         
          "Content-Type":"application/json"
        },
      }
    );
    const responce = await data.json();
    SetData(responce)
    console.log(responce);
  }
  useEffect(() => {
    calldata();
  }, []);
  console.log("this",data)
  console.log("Lengyh",data.products)
  return (
    <div className="row">
      {data.products?.map((element) => {
        return (
         <>
        
                <div className="col-md-4" key={element.id}>
                {/* <Cards imageUrl={element.image} /> */}
                <div className='container my-4'>
                  <div className="card" >
                    <img src={element.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
             
         </>
        );
      })}
    </div>
  );
};

export default MainCard;
