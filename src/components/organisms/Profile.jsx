import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react";
import icon from "../../assets/icon.png";

function Profile() {
  return (
    <VStack w="100%" justify="center" spacing={0}>
      <Box borderBottom="2px solid" borderColor="accent.500" px="10">
        <Text variant="headline">Profile</Text>
      </Box>
      <Flex
        pt={{ base: "16", xs: "20" }}
        px="3"
        direction={{ base: "column", xs: "row" }}
        align="center"
      >
        <Avatar
          src={icon}
          boxSize={{ base: "12rem", sm: "12rem", md: "14rem" }}
          mr={{ base: "2", sm: "6" }}
        />
        <VStack align={{ base: "center", xs: "start" }} justify="center">
          <Text variant="primary" fontSize="5xl" pb="4">
            ソテツ
          </Text>
          <Text variant="primary">
            プログラミング学習中の18歳です
            <br />
            将来はエンジニアとして働きたいと考えています
          </Text>
        </VStack>
      </Flex>
    </VStack>
  );
}

export default Profile;
