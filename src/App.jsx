import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Display from "./Components/Display";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="/edit/:id" element={<Form />}></Route>
        </Routes>
        <Display />
      </BrowserRouter>
    </>
  );
}

export default App;
