import { Helmet } from "react-helmet-async";
import WorkPage from "../templates/WorkPage";
import typingAdventure from "../../assets/works/typingAdventure.png";

function QuickUrl() {
  return (
    <>
      <Helmet>
        <title>ソテツのポートフォリオ</title>
        <meta
          name="description"
          content="タイピング冒険記の概要説明ページです"
        />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <WorkPage
        src={typingAdventure}
        name={"タイピング冒険記"}
        url={"https://typing-adventure.com/"}
        github={"https://github.com/sotetu-79/typing-adventure"}
        zenn={"https://zenn.dev/sotetu/articles/8fb887180deed6"}
        description={
          <>
            RPG風のタイピングゲームです
            <br />
            Next.js+TailwindCSSとFirebaseで開発
            <br />
            <br />
            自分がずっと作りたかったようなゲームだったので
            <br />
            完成した時はうれしかったです
            <br />
            SEOを意識したので、少しの検索流入もあります
          </>
        }
      />
    </>
  );
}

export default QuickUrl;
