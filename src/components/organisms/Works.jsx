import { Box, Grid, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import WorkCard from "../molecules/WorkCard";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import sample from "../../assets/sample.png";
import sample2 from "../../assets/sample2.png";
import pokemonBook from "../../assets/works/pokemonBook.png";
import quickUrl from "../../assets/works/quickUrl.png";

function Works() {
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
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const [isSmaller1600] = useMediaQuery("(max-width: 1600px)");

  return (
    <>
      <VStack w="100%" justify="center" pt="24">
        <Box borderBottom="2px solid" borderColor="accent.500" px="10" mb="10">
          <Text variant="headline">Works</Text>
        </Box>
        {/* 画面が大きい時はそのままGrid表示 */}
        {!isSmaller1600 && (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={2}
            sx={{ px: "4" }}
          >
            <WorkCard src={pokemonBook} route={"pokemonbook"} />
            <WorkCard src={quickUrl} route={"quickurl"} />
            <WorkCard src={sample} route={""} />
            <WorkCard src={sample2} route={""} />
          </Grid>
        )}
      </VStack>

      {/* 画面が小さいときはスライダー表示 */}
      {isSmaller1600 && (
        <Box w="90%" mx="auto" align="center" pl="2">
          <Slider {...settings}>
            <WorkCard src={pokemonBook} route={"pokemonbook"} />
            <WorkCard src={quickUrl} route={"quickurl"} />
            <WorkCard src={sample} route={""} />
            <WorkCard src={sample2} route={""} />
          </Slider>
        </Box>
      )}
    </>
  );
}

export default Works;
