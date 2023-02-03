import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import PostProduct from "./Components/PostProduct/PostProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
