import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import MultiPageRoutes from './MultiPageRoutes';
import { singlePage } from '../info/Info'; // Flag to toggle between single-page and multi-page
import SinglePageRoutes from './SinglePageRoutes';
import useScrollObserver from '../hooks/useScrollObserver';

export default function BaseLayout() {
   const location = useLocation();

   // Update the active state based on the current route
   const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1));

   // Scroll observer references for single-page layout
   const refHome = useScrollObserver(setActive);
   const refAbout = useScrollObserver(setActive);
   const refPortfolio = useScrollObserver(setActive);

   // Dark mode state
   const [darkMode, setDarkMode] = useState(false);

   // Handle dark mode toggle
   function handleToggleDarkMode() {
      const newDarkMode = !darkMode;
      localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
      setDarkMode(newDarkMode);
   }

   // Load dark mode preference from localStorage on first render
   useEffect(() => {
      const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
      if (savedDarkMode !== null) {
         setDarkMode(savedDarkMode);
      } else {
         localStorage.setItem('darkMode', 'false');
      }
   }, []);

   // Update `active` state when the route changes
   useEffect(() => {
      const currentPath = location.pathname === '/' ? 'home' : location.pathname.slice(1);
      setActive(currentPath);
   }, [location]);

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'} justifyContent={'space-between'}>
            <Grid item>
               {/* Navbar with dark mode toggle and active page */}
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} active={active} setActive={setActive} />
            </Grid>
            <Grid item flexGrow={1}>
               {/* Conditionally render routes based on the single-page or multi-page setting */}
               {singlePage ? (
                  <SinglePageRoutes refs={{ refHome, refAbout, refPortfolio }} />
               ) : (
                  <MultiPageRoutes />
               )}
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'} py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                  {/* Footer content */}
                  <p>© 2024 My Portfolio</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
}
