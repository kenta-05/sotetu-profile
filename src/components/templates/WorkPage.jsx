import React from "react";
import { Box, Center } from "@chakra-ui/react";

function WorkPage({ children }) {
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
        >
          {children}
        </Box>
      </Center>
    </Box>
  );
}

export default WorkPage;
