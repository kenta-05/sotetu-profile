import React from "react";
import {
  Box,
  Center,
  Text,
  Button,
  HStack,
  VStack,
  useMediaQuery,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Thumbnail from "../molecules/Thumbnail";

function WorkPage({ src, name, url, github, zenn, description }) {
  const [isLessThan1280] = useMediaQuery("(max-width: 1280px)");

  return (
    <Box w="100vw" h="100vh">
      <Center h="100vh">
        <Box
          w="75rem"
          h={isLessThan1280 ? "55rem" : "40rem"}
          bg="white"
          mt="3rem"
          borderRadius="md"
          shadow="xl"
          position="relative"
        >
          <Link to="/">
            <Text
              as="a"
              position="absolute"
              top={isLessThan1280 ? "8rem" : "1rem"}
              left={isLessThan1280 ? "2rem" : "1rem"}
              cursor="pointer"
              fontWeight="bold"
              fontSize="lg"
              color="gray.700"
              _hover={{ textDecoration: "underline" }}
            >
              ←ホームに戻る
            </Text>
          </Link>
          <Flex
            position="absolute"
            top="8rem"
            left="0"
            right="0"
            pl="8"
            mt="5"
            align={isLessThan1280 ? "center" : "start"}
            direction={isLessThan1280 ? "column" : "row"}
          >
            <Thumbnail src={src} />
            <VStack pl="6" align="center">
              <Text variant="primary" fontWeight="bold" fontSize="4.2rem">
                {name}
              </Text>
              <HStack spacing={5}>
                <Button
                  variant="primary"
                  as="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  サイトURL
                </Button>
                <Button
                  variant="primary"
                  as="a"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  レポジトリ
                </Button>
                {zenn && (
                  <Button
                    variant="primary"
                    as="a"
                    href={zenn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zenn
                  </Button>
                )}
              </HStack>
              <Text variant="primary" fontSize="xl" pt="6" pr="2">
                {description}
              </Text>
            </VStack>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
}

export default WorkPage;
