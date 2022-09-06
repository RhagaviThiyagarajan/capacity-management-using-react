import {
  BrowserRouter,
  Switch,
  Route,
  Routes
  
} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import List from "./pages/list/List.jsx"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/capacity" element={<List/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
      </Routes>
      </BrowserRouter>
     
     

  );
}

export default App;
