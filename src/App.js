import Main from "../src/pages/main";
import Contact from "../src/pages/contact";
import { Route,Routes } from "react-router-dom";
import AllProducts from "../src/pages/AllProducts";
import Categories from "../src/pages/Categories";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/" element={<Main/>}/>
      <Route path="/allproducts" element={<AllProducts/>}/>
      <Route path="/categories" element={<Categories/>}/>
     </Routes>
    </div>
  );
}

export default App;
