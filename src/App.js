import './App.css';
import MainCard from './Components/MainCard';
import Navbar from './Components/Navbar';
import useFetch from "./Components/Usefetch";

function App() {
  const [col] = useFetch("https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors");
  const [mat] = useFetch("https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material");
  const [data] = useFetch("");
   console.log(col.colors)
  // console.log(mat.material)
  console.log(col)
  console.log(mat)
  return (
    <div className="App">
     <h1  style={{fontSize: "20px", textAlign: "center", padding:"30px"}} >MYCOOLSHOP.COM</h1>
     <Navbar/>
     <div className="main-container-product-sidebar">
     <div className="side-bar">
      <h5>Tags</h5>
      <ul>
        <li>Gorgus</li>
        <li>Gorgus</li>
        <li>Gorgus</li>
      </ul>
      <h5>Material</h5>
      <ul>
        <li>ALL</li>
        {
          mat.material?.map(
            (item,i)=>{
              return (<li key={i}>{item.name}</li>)
            }
          )
        }
   
       
      </ul>
      <h5>Color</h5>
      <ul>
        <li>ALL</li>
        {
          col.colors?.map(
            (item,i)=>{
              return (<li key={i}>{item.name}</li>)
            }
          )
        }
      </ul>

     </div>
     <div className="product-frame">
     <MainCard/>
     </div>
     </div>
    </div>
  );
}

export default App;
