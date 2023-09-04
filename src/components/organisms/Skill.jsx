import { Box, Image, Text, VStack } from "@chakra-ui/react";
import reactIcon from "../../assets/stack/reactIcon.png";
import NextIcon from "../../assets/stack/next-js.png";
import typescriptIcon from "../../assets/stack/typescriptIcon.png";
import nodeIcon from "../../assets/stack/node-js.png";

function Skill() {
  return (
    <VStack w="100%" justify="center">
      <Box borderBottom="2px solid" borderColor="accent.500" px="10">
        <Text variant="headline">Skill</Text>
      </Box>
      <VStack
        pt="12"
        align={{ base: "center", md: "start" }}
        spacing="24"
        px="4"
      >
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
        >
          <Image src={reactIcon} w="12rem" />
          <VStack
            pl={{ base: "0", md: "6" }}
            align={{ base: "center", md: "start" }}
            spacing="5"
          >
            <Text variant="primary">React</Text>
            <Text
              variant="primary"
              align={{ base: "start", xs: "center", md: "start" }}
            >
              基本的な概念や使い方を理解しています
              <br />
              Pokemonbook, QuickURL, タイピング冒険記の開発に用いました
              <br />
            </Text>
          </VStack>
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
        >
          <Image src={NextIcon} w="12rem" />
          <VStack
            pl={{ base: "0", md: "6" }}
            align={{ base: "center", md: "start" }}
            spacing="5"
          >
            <Text variant="primary">Next.js</Text>
            <Text
              variant="primary"
              align={{ base: "start", xs: "center", md: "start" }}
            >
              基本的な使い方については理解しています
              <br />
              高度な機能については、まだ勉強中です
              <br />
              タイピング冒険記の開発などに用いました
            </Text>
          </VStack>
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
        >
          <Image src={typescriptIcon} w="12rem" />
          <VStack
            pl={{ base: "0", md: "6" }}
            align={{ base: "center", md: "start" }}
            spacing="5"
          >
            <Text variant="primary">TypeScript</Text>
            <Text
              variant="primary"
              align={{ base: "start", xs: "center", md: "start" }}
            >
              基本的な型付けについて理解しています
              <br />
              個人開発で必要な知識程度はありますが
              <br />
              高度な型宣言などは使いこなせていません
            </Text>
          </VStack>
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
        >
          <Image src={nodeIcon} w="12rem" />
          <VStack
            pl={{ base: "0", md: "6" }}
            align={{ base: "center", md: "start" }}
            spacing="5"
          >
            <Text variant="primary">Node.js</Text>
            <Text
              variant="primary"
              align={{ base: "start", xs: "center", md: "start" }}
            >
              Expressを使ったREST-APIの作成や
              <br />
              MongoDBなどのデータベース接続の基礎を理解しています
              <br />
              高度なプログラムや概念に自信はありません
            </Text>
          </VStack>
        </Box>
      </VStack>
    </VStack>
  );
}

export default Skill;
