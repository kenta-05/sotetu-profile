import Profile from "../organisms/Profile";
import SectionBorder from "../atoms/SectionBorder";
import Posts from "../organisms/Posts";
import Skills from "../organisms/Skill";
import Experience from "../organisms/Experience";
import Works from "../organisms/Works";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>ソテツのポートフォリオ</title>
        <meta
          name="description"
          content="ソテツのポートフォリオサイトです。フロントエンドエンジニアとして作成したサービスや経験を掲載しています"
        />
        <meta
          name="keywords"
          content="エンジニア, フロントエンド開発, ウェブデザイン, HTML, CSS, JavaScript, React, Node.js, TypeScript, ポートフォリオ, スキルセット"
        />
        <meta property="og:title" content="ソテツのポートフォリオ" />
        <meta
          property="og:description"
          content="作成したプロジェクトや経歴を掲載しています"
        />
        <meta
          property="og:image"
          content="https://doc-10-10-docs.googleusercontent.com/docs/securesc/cm3qkgg5171voga33a9gefdutfq9mhel/4fdqvb53esmfcgrtl3n9cd8bj8vg5aut/1683960075000/03798810805915807855/00136527678557537889/1ZTYF5CL_ZY_qDGvShpOXiouMeCw5dSeI?ax=ADWCPKAYF5_2Zk8Xn_bXaeHVTXA6Yg8AsZQOJui9MwdOJtJKEixO3e_E9i90L5s8C08ASH3trVU8h8tebuItn6y1xmCe4qNWX24HROFVhGhRPjxDvmooo1t6GdU0fn-6Gj4hXuhvX1DYdO9G4oCMsY0LKMSlnSUfSOsTLRFt1O56INHKQ2mT6ru1BGznBGQNPwq7AEOBIjEaFtVMfbYkjaZKEuzQHja4wxHYWn7lLk4mXug1tU-B47-6sMxLWVZgRyXoYrEASMCNub1aQNlWhG0-eiWn3kHKkjC_GWqeyH3k3RVJ3pmL_lE0przM5N_hxKVAgE9Zgx_0b1vOknmp26ia1sbvvqJ_usko8uJFimQnNLu7xc0U1h_D33ZBY9L53hrVN4dvFCOWNE5scNffMPkXc1M4tCp7vUIBNFE3IY7p2fNNd4jlOcx3HRU3WREP7aNW1DzXR37xVnhNhOSXd3xEK_wOfbAwndMYgXOHCfCuehHeQ0kXCXGMsDwOYRvCXzYoBVfzaxQUGUYm8r96L64U1iuodyp_qA-U6K254avliyMc570Q2NQHNDr8x85aLuFbXntZtas2YaYsFcPaewqfZuAGW8ECpFSjfruUH54yYA34vk2ScSyvVYpZM6HFuG9CMIftAUG-5TM-GtoSv4KWea43DJJukAEeLFAyFgboeHduB0bG9ldu85ftfMepxCI6gRHzdNtHyaC5subnsxa61TwxOL5BlRgQJC3MaZm6_m4Iid6eNTZ0C1SxiOIibay1uULllC-LkAu8XzuivjXFAgodBqyn-DcoNyHvYD7GQkrY7d10YPLLuZdGNVTDg_m-iKO4Jc8wtiSTT7fwgGiWhuS2QfTSawD2zJDLDsgzkSbqVn3h1eqb1y34Ixb0XhphhIWjMjCfA1OBljbixE4qIJBTXeOhqqkZeGfOHgSG91guqABShdU-l_4CVxFK3Ov_ewh_lGmbNYP_y_s1GyJP7uwRjCQj01ZwpJlUr9rjsaF5&uuid=5418116b-05b7-4c39-9295-c34e1b719c45&authuser=0&nonce=7r2sncef5162g&user=00136527678557537889&hash=dsh6nc5op9d3cqod9rf00gh55r751jho"
        />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <Works />
      <SectionBorder />
      <Profile />
      <SectionBorder />
      <Skills />
      <SectionBorder />
      <Posts />
      <SectionBorder />
      <Experience />
      <SectionBorder />
    </>
  );
}

export default Home;
