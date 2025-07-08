import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Car from "./pages/Car";
import Home from "./pages/Home";
import Carousel from "./pages/carousel";
import SingleCar from "./pages/SingleCar";
import { ContextProvider } from "./pages/Context";
import ContextPractice  from "./pages/ContextPractice";
import Welcome from "./pages/Welcome"
import Otp from "./pages/Otp";
import Board from "./pages/Board";
import Login from "./pages/login";
import FetchGet from "./pages/FetchGet";
// import TodoList from "./pages/todoList";


function App(){

  return(
    <>
    

    <ContextProvider>
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Car" element={< Car/>}/>
      <Route path="/Carousel" element={< Carousel/>}/>
      <Route path="/single/:each" element={<SingleCar/>} />
      <Route path="/context" element={<ContextPractice/>} />
      <Route path="/welcome" element={<Welcome/>} />
      <Route path="/otp" element={<Otp/>} />
      <Route path="/board" element={<Board/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/Fetch" element={<FetchGet/>} />
      
      
    </Routes>
    </Router>
    </ContextProvider>
    
    </>

    );
}

          
export default App;
