import React from "react";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import SearchBar from "./SearchBar";

var App = () => {
    return(
        <div className="App">
            <SearchBar/>
            <Navbar/>
            <MainContent/>
        </div>
    )
}

export default App;