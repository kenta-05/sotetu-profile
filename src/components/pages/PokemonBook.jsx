import { Helmet } from "react-helmet-async";
import WorkPage from "../templates/WorkPage";

function PokemonBook() {
  return (
    <>
      <Helmet>
        <title>ソテツのポートフォリオ</title>
        <meta name="description" content="ポケモンブックの概要説明ページです" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <WorkPage></WorkPage>
    </>
  );
}

export default PokemonBook;
