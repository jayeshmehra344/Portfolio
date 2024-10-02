import React from 'react';
import Home from "./components/home/Home.js"
import './App.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";

function App() {
   return (
      <div>
          <Router>
      <Routes>
        {/* Default route */}
        <Route exact path="/" component={Home} /> 
        </Routes>
        </Router>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
