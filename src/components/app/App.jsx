import React from 'react';
import Header from "../header/Header";
import Search from "../search/Search";
import Table from "../table/Table";
import Main from "../main/Main";


function App() {
    return(
        <div className="container">
            <Header/>
            <Search/>
            <Main/>

        </div>
    );

}

export default App;