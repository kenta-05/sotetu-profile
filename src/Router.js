import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/templates/Header";
import PokemonBook from "./components/pages/PokemonBook";
import QuickUrl from "./components/pages/QuickUrl";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemonbook" element={<PokemonBook />} />
        <Route path="/quickurl" element={<QuickUrl />} />
      </Routes>
    </>
  );
}

export default Router;
