import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import Navigator from "../navigator";

const Layout = () => {
  return (
    <BrowserRouter>
      <header className="App-header">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/colleges">Colleges</NavLink>
          <NavLink to="/students">Students</NavLink>
        </nav>
      </header>

      <main>
        <Navigator />
      </main>
    </BrowserRouter>
  );
};

export default Layout;
