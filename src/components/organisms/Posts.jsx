import "react-multi-carousel/lib/styles.css";
import { Box, Text, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import PostCard from "../molecules/PostCard";
import zenn1 from "../../assets/zenn/1.png";
import zenn2 from "../../assets/zenn/2.png";
import zenn3 from "../../assets/zenn/3.png";
import zenn4 from "../../assets/zenn/4.png";
import zenn5 from "../../assets/zenn/5.png";

const Posts = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <VStack w="100%" justify="center">
        <Box borderBottom="2px solid" borderColor="accent.500" px="10">
          <Text variant="headline">Posts</Text>
        </Box>
      </VStack>
      <Box mt="16" w="68vw" mx="auto">
        <Box>
          <Box
            style={{
              width: "100%",
              justifyContent: "center",
            }}
          ></Box>
        </Box>
      </Box>

      <Box w="90%" mx="auto" align="center" pl="2">
        <Slider {...settings}>
          <PostCard
            src={zenn1}
            title={"QuickURLを作った話"}
            url={"https://zenn.dev/sotetu/articles/7499886f9a1168"}
          />
          <PostCard
            src={zenn2}
            title={"React-Form+EmailJSでの実装について"}
            url={"https://zenn.dev/sotetu/articles/79a372a2d29c8e"}
          />
          <PostCard
            src={zenn3}
            title={"タイピング冒険記を作った話"}
            url={"https://zenn.dev/sotetu/articles/8fb887180deed6"}
          />
          <PostCard
            src={zenn4}
            title={"AIで敵キャラの画像生成をしてみる"}
            url={"https://zenn.dev/sotetu/articles/00618ed992135c"}
          />
          <PostCard
            src={zenn5}
            title={"React-Slickのレスポンシブについて"}
            url={"https://zenn.dev/sotetu/articles/516e9d066530e7"}
          />
        </Slider>
      </Box>
    </>
  );
};

export default Posts;
