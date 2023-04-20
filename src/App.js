import Electronics from "./electronics";
import Menware from "./menware";

function App() {
  return (
    <div className="App">
      <header className="bg-gray-200 py-4">
           <ul className="flex space-x-10 items-center justify-center">
            <li><h1 className="font-bold text-4xl md:mr-[5rem] lg:mr-[30rem]">SHOPLY</h1></li>
            <li className="bg-gray-300 hover:bg-gray-400 p-2 rounded hover:text-white">All Products</li>
            <li className="bg-gray-300 hover:bg-gray-400 p-2 rounded hover:text-white">About Us</li>
            <li className="bg-gray-300 hover:bg-gray-400 p-2 rounded hover:text-white">Contact</li>
            <li className="bg-gray-300 hover:bg-gray-400 p-2 rounded hover:text-white">Cart</li>
           </ul>
      </header>
      <body className="text-center w-full h-96 bg-gradient-to-r from-blue-200 to-green-200 justify-center content-center grid">
                <div>
                  <p className="inline text-3xl font-bold">Shopping made easy by Shoply</p>
                  <p>We provide best quality products to our customers at best prices</p>
                  <p>Shop with us and get excitig discounts!</p>
                  <button className="bg-gradient-to-r text-2xl from-blue-400 to-green-400 p-5 m-7 rounded-2xl text-white">Shop Now</button>
                </div>  
      </body>
      <h1 className="text-center p-10 text-2xl font-bold">Best Selling Products</h1>
       <Electronics/>
       <Menware/>
    </div>
  );
}

export default App;
