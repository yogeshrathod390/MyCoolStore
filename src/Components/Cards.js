import React from 'react'
const Cards = (props) => {
  let { imageUrl} =props 
  console.log(imageUrl, "image")
  return (
    <>
<div className='container my-4'>
      <div className="card" >
  <img src="https://source.unsplash.com/300x400/?tshirt" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    </>
  )
}
export default Cards
