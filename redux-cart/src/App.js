import "./App.css";

import { Header } from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetails from "./Components/CardDetails";
import Cards from "./Components/Card";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
