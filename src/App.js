import React from 'react';
import './App.module.scss';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import BaseLayout from "./components/BaseLayout";

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/*" element={<BaseLayout />} />
         </Routes>
      </Router>
   );
}

export default App;
