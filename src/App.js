import React from 'react';
import './App.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BaseLayout from "./components/BaseLayout";

function App() {
   return (
      <Router>
         <Routes>
            {/* BaseLayout wraps all routes */}
            <Route path="/*" element={<BaseLayout />} />
         </Routes>
      </Router>
   );
}

export default App;
