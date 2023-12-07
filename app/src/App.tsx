import { lazy, Suspense, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import "./App.css";

import Home from "./pages/Home";
const SignupForm = lazy(() => import("./pages/SignupForm"));
const UpdateForm = lazy(() => import("./pages/UpdateForm"));
import "@picocss/pico";
import Loading from "./components/loding";
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/update/:id" element={<UpdateForm />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
