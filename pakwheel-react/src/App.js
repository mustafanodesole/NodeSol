import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./views/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
