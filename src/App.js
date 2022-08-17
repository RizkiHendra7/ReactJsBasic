import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ToastComponent from "./components/ToastComponent";
import NavbarComponent from "./components/NavbarComponent"; 
import UserIndex from "./containers/User/UserIndex";
import DetailUser from "./containers/User/DetailUser";
import CreateUser from "./containers/User/CreateUser";
import EditUser from "./containers/User/EditUser";

export default class App extends Component {
  state = {
     
  };

  render() {
    console.log('dari app',this.state.modelPegawai)
    return (
      <div>
        <NavbarComponent />
        {/* <ToastComponent judulParam={this.state.judul} /> */}
        
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<UserIndex  />} />
            <Route path="/Create" element={<CreateUser />} />
            <Route path="/Detail/:id" element={<DetailUser />} />
            <Route path="/Edit/:id" element={<EditUser />} />
          </Routes>
        </BrowserRouter> 
      </div>
    );
  }
}
