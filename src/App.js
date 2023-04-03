import React from "react";
import Home from "./component/Home";
import About from "./component/About";
import { Route,Routes,Link } from "react-router-dom";

class App extends React.Component
{
  render()
  {
    return(
      <div>
        <nav>
          <Link to="/home">Home</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </div>
    );
  }
}
export default App;
