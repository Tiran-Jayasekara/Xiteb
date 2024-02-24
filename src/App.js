import React, { Suspense, lazy } from 'react';
import NavBar from './components/NavBar';
import Header from "./components/Header";
const Destinations = lazy(() => import('./pages/Destinations'));
const Experience = lazy(() => import('./pages/Experience'));
const Offers = lazy(() => import('./pages/Offers'));
const Footer = lazy(() => import('./components/Footer'));


function App() {
  return (
    <>
      <NavBar />
      <Header />

      <Suspense fallback={<div>Loading...</div>}><Destinations /></Suspense>

      <Suspense fallback={<div>Loading...</div>}><Experience /></Suspense>

      <Suspense fallback={<div>Loading...</div>}><Offers /></Suspense>

      <Suspense fallback={<div>Loading...</div>}><Footer /></Suspense>
    </>
  );
}

export default App;
