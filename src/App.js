import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import "../src/App.scss";
import Bollywood from "./component/Bollywood";
import Hollywood from "./component/Hollywood";
import Anime from "./component/Anime";
import Imdb from "./component/Imdb";
import Category from "./component/Category";
import Home from "./component/Home";
import Footer from './component/Footer'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Bollywood"} element={<Bollywood />} />
        <Route path={"/Hollywood"} element={<Hollywood />} />
        <Route path={"/animeMovies"} element={<Anime />} />
        <Route path={"/topImdb"} element={<Imdb />} />
        <Route path={"/Category"} element={<Category />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
