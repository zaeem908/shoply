import Main from "./main";
import Contact from "./contact";
import { Route,Routes } from "react-router-dom";
import AllProducts from "./AllProducts";
import Categories from "./Categories";
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
