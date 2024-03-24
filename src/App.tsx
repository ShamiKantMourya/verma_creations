import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Homepage = lazy(() => import("./Pages/Homepge/Homepage"));
const Gallery = lazy(() => import("./Pages/Gallery/Gallery"));

const App: React.FC = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={
          <Suspense fallback={<div>COmponent is still loading..</div>}>
            <Gallery />
          </Suspense>
        } />
      </Routes>
    </div>
  )
}

export default App
