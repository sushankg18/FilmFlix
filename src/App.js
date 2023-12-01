import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import "../src/App.scss";
import Bollywood from "./component/Bollywood";
import Hollywood from "./component/Hollywood";
import Anime from "./component/Anime";
import Imdb from "./component/Imdb";
import Category from "./component/Category";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/Bollywood"} element={<Bollywood />} />
        <Route path={"/Hollywood"} element={<Hollywood />} />
        <Route path={"/animeMovies"} element={<Anime />} />
        <Route path={"/topImdb"} element={<Imdb />} />
        <Route path={"/Category"} element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
