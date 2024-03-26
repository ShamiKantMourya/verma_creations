import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Homepage = lazy(() => import("./Pages/Homepge/Homepage"));
const Gallery = lazy(() => import("./Pages/Gallery/Gallery"));
const Service = lazy(() => import("./Pages/Services/Service"));

const App: React.FC = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={
          <Suspense fallback={<div>Component is still loading..</div>}>
            <Service />
          </Suspense>
        } />
        <Route path="/gallery" element={
          <Suspense fallback={<div>Component is still loading..</div>}><Gallery /></Suspense>
        } />
      </Routes>
    </div>
  )
}

export default App
