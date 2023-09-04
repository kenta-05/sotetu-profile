import { Helmet } from "react-helmet-async";
import WorkPage from "../templates/WorkPage";
import quickUrl from "../../assets/works/quickUrl.png";

function QuickUrl() {
  return (
    <>
      <Helmet>
        <title>ソテツのポートフォリオ</title>
        <meta name="description" content="QuickURLの概要説明ページです" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <WorkPage
        src={quickUrl}
        name={"QuickUrl"}
        url={"https://quick-url-b0462.web.app/"}
        github={"https://github.com/sotetu-79/quick-url"}
        zenn={"https://zenn.dev/sotetu/articles/7499886f9a1168"}
        description={
          <>
            URLをカード型で登録して同時開封ができるサービス
            <br />
            React+ChakraUIとFirebaseで開発
            <br />
            使いやすいUIという点を意識して作りました
            <br />
            <br />
            Zennに投稿した記事をかなり読んでいただき
            <br />
            色々な方からお褒めの言葉を頂いたのも嬉しかったです
          </>
        }
      />
    </>
  );
}

export default QuickUrl;
