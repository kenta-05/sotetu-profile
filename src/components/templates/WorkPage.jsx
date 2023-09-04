import React from "react";
import { Box, Center, Text, Button, HStack, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Thumbnail from "../molecules/Thumbnail";

function WorkPage({ src, name, url, github, zenn, description }) {
  return (
    <Box w="100vw" h="100vh">
      <Center h="100vh">
        <Box
          w="75rem"
          h="40rem"
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
              top="1rem"
              left="1rem"
              cursor="pointer"
              fontWeight="bold"
              fontSize="lg"
              color="gray.700"
              _hover={{ textDecoration: "underline" }}
            >
              ←ホームに戻る
            </Text>
          </Link>
          <HStack position="absolute" top="8rem" left="3rem" align="start">
            <Thumbnail src={src} />
            <VStack pl="6" align="start">
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
              <Text variant="primary" fontSize="xl" pt="6">
                {description}
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Center>
    </Box>
  );
}

export default WorkPage;
