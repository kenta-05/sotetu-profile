import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { useRef } from "react";
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { ReactComponent as ZennLogo } from "../../assets/zennIcon.svg";
import icon from "../../assets/icon.png";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function MenuDrawer() {
  const visitURL = (url) => {
    window.open(url, "_blank");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        sx={{
          w: "12",
          h: "12",
          bg: "transparent",
          fontSize: "4xl",
          mr: "2",
          _hover: {
            bg: "secondary.600",
          },
        }}
        icon={<AiOutlineMenu style={{ width: "2.6rem", color: "#24292f" }} />}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
          >
            <Box>
              <Box borderBottom="2px solid" borderColor="accent.500" px="2">
                <Text variant="primary">Account</Text>
              </Box>
              <Flex align="start" pt="2" justify="center" wrap="wrap">
                <IconButton
                  sx={{
                    w: "3.5rem",
                    h: "3.5rem",
                    bg: "transparent",
                    fontSize: "3rem",
                    p: "1",
                    mx: "1",
                    _hover: {
                      bg: "secondary.600",
                    },
                  }}
                  icon={<AiOutlineTwitter style={{ color: "#1da1f2" }} />}
                  aria-label="Twitter"
                  onClick={() => {
                    visitURL("https://twitter.com/sotetu79");
                  }}
                />
                <IconButton
                  sx={{
                    w: "3.5rem",
                    h: "3.5rem",
                    bg: "transparent",
                    fontSize: "3rem",
                    p: "1",
                    mx: "1",
                    _hover: {
                      bg: "secondary.600",
                    },
                  }}
                  icon={<AiFillGithub style={{ color: "#24292f" }} />}
                  aria-label="Github"
                  onClick={() => {
                    visitURL("https://github.com/sotetu79");
                  }}
                />
                <IconButton
                  sx={{
                    w: "3.5rem",
                    h: "3.5rem",
                    bg: "transparent",
                    fontSize: "3rem",
                    p: "1",
                    mx: "1",
                    _hover: {
                      bg: "secondary.600",
                    },
                  }}
                  icon={<ZennLogo style={{ width: "2.5rem" }} />}
                  aria-label="Zenn"
                  onClick={() => {
                    visitURL("https://zenn.dev/sotetu");
                  }}
                />
                <IconButton
                  sx={{
                    w: "3.5rem",
                    h: "3.5rem",
                    bg: "transparent",
                    fontSize: "3rem",
                    p: "1",
                    mx: "1",
                    _hover: {
                      bg: "secondary.600",
                    },
                  }}
                  icon={
                    <AiOutlineMail
                      style={{ width: "2.8rem", color: "#24292f" }}
                    />
                  }
                  aria-label="Gmail"
                  onClick={() => {
                    visitURL("mailto:sotetu79@gmail.com");
                  }}
                />
              </Flex>
            </Box>

            <Box mt={3} h="400px" bg="primary.500" borderRadius="xl">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="sotetu79"
                options={{ height: 400 }}
              />
            </Box>

            <Box>
              <Box
                px="2"
                pt="10"
                borderBottom="2px solid"
                borderColor="accent.500"
              >
                <Text variant="primary">Profile</Text>
              </Box>
              <HStack pt="3" align="center">
                <Avatar src={icon} boxSize="5.5rem" />
                <Box>
                  <Text variant="primary" fontSize="2xl">
                    ソテツ
                  </Text>
                  <Text variant="primary" fontSize="2xl">
                    sotetu79@gmail.com
                  </Text>
                </Box>
              </HStack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MenuDrawer;
