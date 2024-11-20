import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Categories from "./components/categories/Categories";
import Collection from "./components/collection/Collection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Categories />
      <Collection />
    </div>
  );
}

export default App;
