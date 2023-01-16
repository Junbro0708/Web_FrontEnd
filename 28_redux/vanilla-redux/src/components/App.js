import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Details from "../routes/Details";

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="details/:id" element={<Details />}></Route>
      </Routes>
    </Router>
  )
};