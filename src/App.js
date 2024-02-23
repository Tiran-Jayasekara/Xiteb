import React, { lazy, Suspense } from 'react';

const LazyNavBar = lazy(() => import('./components/NavBar'));
const LazyHeader = lazy(() => import('./components/Header'));
const LazyDestinations = lazy(() => import('./pages/Destinations'));
const LazyExperience = lazy(() => import('./pages/Experience'));
const LazyOffers = lazy(() => import('./pages/Offers'));
const LazyFooter = lazy(() => import('./components/Footer'));

function App() {
  return (
    <>
    {/* Wrapping each lazy-loaded component with Suspense */}
    <Suspense fallback={<div>Loading...</div>}>
        <LazyNavBar />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHeader />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyDestinations />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyExperience />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyOffers />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyFooter />
      </Suspense>
    </>
  );
}

export default App;
