import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Kontak from "./Page/Kontak";
import MenuHome from "./Page/MenuHome";
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/MenuMinuman";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<MenuHome />} />
          <Route path="/menu-makanan" element={<MenuMakanan />} />
          <Route path="/menu-minuman" element={<MenuMinuman />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
