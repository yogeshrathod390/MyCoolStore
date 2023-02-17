import './App.css';
import MainCard from './Components/MainCard';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
     <h1  style={{fontSize: "20px", textAlign: "center", padding:"30px"}}>MYCOOLSHOP.COM</h1>
     <Navbar/>
     <MainCard/>
    </div>
  );
}

export default App;
