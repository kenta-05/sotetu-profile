import { Box, HStack, Heading, useBreakpointValue } from "@chakra-ui/react";
import HeaderIcon from "../atoms/HeaderIcon";
import { AiFillGithub, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { ReactComponent as ZennLogo } from "../../assets/zennIcon.svg";
import MenuDrawer from "../atoms/MenuDrawer";

function Header() {
  const visitURL = (url) => {
    window.open(url, "_blank");
  };
  const iconDisplay = useBreakpointValue({ base: "none", xs: "block" });
  const menuDisplay = useBreakpointValue({ base: "block", xs: "none" });

  return (
    <HStack
      bg="secondary.500"
      h={{ base: "3.5rem", xs: "4.5rem" }}
      w="100%"
      justify={{ base: "end", sm: "end", md: "space-between" }}
      mb="4"
      boxShadow="0px 0px 8px -3px #777777"
      sx={{ position: "fixed", zIndex: "10" }}
    >
      <Heading
        as="h1"
        sx={{
          color: "accent.500",
          fontWeight: "bold",
          fontSize: "5xl",
          cursor: "default",
          ml: "5",
          display: { base: "none", sm: "none", md: "inline" },
        }}
      >
        ポートフォリオ
      </Heading>
      <Box display={iconDisplay}>
        <HeaderIcon
          icon={<AiOutlineTwitter style={{ color: "#1da1f2" }} />}
          aria-label="Twitter"
          onClick={() => {
            visitURL("https://twitter.com/sotetu79");
          }}
        />
        <HeaderIcon
          icon={<AiFillGithub style={{ color: "#24292f" }} />}
          aria-label="Github"
          onClick={() => {
            visitURL("https://github.com/sotetu79");
          }}
        />
        <HeaderIcon
          icon={<ZennLogo style={{ width: "2.5rem" }} />}
          aria-label="Zenn"
          onClick={() => {
            visitURL("https://zenn.dev/sotetu");
          }}
        />
        <HeaderIcon
          icon={<AiOutlineMail style={{ width: "2.8rem", color: "#24292f" }} />}
          aria-label="Gmail"
          onClick={() => {
            visitURL("mailto:sotetu79@gmail.com");
          }}
        />
      </Box>
      <Box display={menuDisplay}>
        <MenuDrawer />
      </Box>
    </HStack>
  );
}

export default Header;
