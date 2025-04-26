import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoApp from "./Pages/TodoApp";
import ProductData from "./Pages/ProductData";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-box">
    <ul>
      <li>
        <Link to="/">Product Page</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/AddMyTask">Add Task</Link>
      </li>
    </ul>
    </div>
  );
};
const Home = () => {
  return (
    <>
      <h1>Product Page</h1>
      <ProductData />
    </>
  );
};
const About = () => {
  return <h1>About Page</h1>;
};
const Menu = () => {
  return <h1>Menu Page</h1>;
};
const Contact = () => {
  return <h1> Contact Page</h1>;
};
const AddMyTask = () => {
  return (
    <>
         <h1> Add MyTask </h1>
         <TodoApp/>
    </>
  );
};
function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AddMyTask" element={<AddMyTask />} />
        </Routes>
      </Router>
      {/* this app made by rohit  */}
      {/* <TodoApp /> */}
      {/* <ProductData /> */}
    </div>
  );
}

export default App;
