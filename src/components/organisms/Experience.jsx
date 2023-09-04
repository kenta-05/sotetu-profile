import { Box, Flex, Text, VStack, useMediaQuery } from "@chakra-ui/react";

function Experience() {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  return (
    <VStack w="100%" justify="center">
      <Box borderBottom="2px solid" borderColor="accent.500" px="10" mb="8">
        <Text variant="headline">Experience</Text>
      </Box>
      <Flex align="center" px="4">
        <VStack align="start" spacing="12">
          <Text variant="primary">
            2022年10月ー
            {!isLargerThan600 && <br />}
            独学でフロントエンドの勉強開始
          </Text>
          <Text variant="primary">
            2023年1月ー
            {!isLargerThan600 && <br />}
            JSで簡単なタイピングゲーム作成
          </Text>
          <Text variant="primary">
            2023年3月ー
            {!isLargerThan600 && <br />}
            ReactでAPIを使用したポケモン図鑑アプリ作成
          </Text>
          <Text variant="primary">
            2023年4月ー
            {!isLargerThan600 && <br />}
            ReactとFirebaseを使ったTwitterクローン作成
          </Text>
        </VStack>
      </Flex>
    </VStack>
  );
}

export default Experience;
