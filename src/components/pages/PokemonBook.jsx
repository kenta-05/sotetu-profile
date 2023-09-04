import { Helmet } from "react-helmet-async";
import WorkPage from "../templates/WorkPage";
import pokemonBook from "../../assets/works/pokemonBook.png";

function PokemonBook() {
  return (
    <>
      <Helmet>
        <title>ソテツのポートフォリオ</title>
        <meta name="description" content="ポケモンブックの概要説明ページです" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <WorkPage
        src={pokemonBook}
        name={"PokemonBook"}
        url={"https://pokemon-book-chi.vercel.app/"}
        github={"https://github.com/sotetu-79/pokemon-book"}
        description={
          <>
            PokeAPIとReact+ChakraUIで作ったポケモン図鑑です
            <br />
            APIからデータを取ってMapメソッドで出力してます
            <br />
            Reactの勉強として作りました
            <br />
            <br />
            検索機能やポケモンの情報を見る機能があります
            <br />
            ポケモンの画像を押すと色違いも見れたりします
          </>
        }
      />
    </>
  );
}

export default PokemonBook;
