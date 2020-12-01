import React from "react";
import NavbarComponent from "./components/layout/NavbarComponent";
import CreatedUrls from "./components/hero/CreatedUrls";
import AddUrl from "./components/hero/AddUrl";
import MainRouter from "./components/router/index";

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        <MainRouter />
        <div className="row">
          <div className="col s6">
            <AddUrl />
          </div>
          <div className="col s6">
            <CreatedUrls />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
