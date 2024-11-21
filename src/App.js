import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Categories from "./components/categories/Categories";
import Collection from "./components/collection/Collection";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Categories />
      <Collection />
      <About />
      <Footer />
    </div>
  );
}

export default App;
