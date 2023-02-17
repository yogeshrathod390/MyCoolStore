import { useEffect ,useState} from 'react';
import './App.css';
import MainCard from './Components/MainCard';
import Navbar from './Components/Navbar';


function App() {

  let Matrial="https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material";
  let Colors="https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors";
  


  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  async function calldata3() {
   
    const data = await fetch(Matrial,
      {
        headers: {
          Authorization:'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
         
          "Content-Type":"application/json"
        },
      }
    );
    const responce = await data.json();
      setData1(responce)
   
   
  }

  async function calldata4() {
   
    const data = await fetch(Colors,
      {
        headers: {
          Authorization:'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo',
         
          "Content-Type":"application/json"
        },
      }
    );
    const responce = await data.json();
      setData2(responce)
   
   
  }
useEffect(
  ()=>{
    calldata4();
    calldata3();
  },[]
)

 
  console.log(data1);
  console.log(data2);
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
          data1.material?.map(
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
         data2.colors?.map(
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
