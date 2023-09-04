import { Box, Image, Text, VStack } from "@chakra-ui/react";
import reactIcon from "../../assets/reactIcon.png";
import chakraIcon from "../../assets/chakraIcon.png";
import typescriptIcon from "../../assets/typescriptIcon.png";

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
            pl={{ base: "0", md: "4" }}
            align={{ base: "center", md: "start" }}
            spacing="5"
          >
            <Text variant="primary">React</Text>
            <Text
              variant="primary"
              align={{ base: "start", xs: "center", md: "start" }}
            >
              基本的な概念やTypeScriptとの連携を理解しています
              <br />
              「PokemonBook」などの開発に用いました
              <br />
            </Text>
          </VStack>
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
        >
          <Image src={chakraIcon} w="12rem" />
          <VStack
            pl={{ base: "0", md: "4" }}
            align={{ base: "center", md: "start" }}
            spacing="5"
          >
            <Text variant="primary">ChakraUI</Text>
            <Text
              variant="primary"
              align={{ base: "start", xs: "center", md: "start" }}
            >
              Reactプロジェクトのスタイル適応に使用しています
              <br />
              当サイトのUIやアニメーションもコレで作成しました
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
            pl={{ base: "0", md: "4" }}
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
              新規のプロジェクトでは積極的に使っていますが、まだ学習中です
            </Text>
          </VStack>
        </Box>
      </VStack>
    </VStack>
  );
}

export default Skill;
