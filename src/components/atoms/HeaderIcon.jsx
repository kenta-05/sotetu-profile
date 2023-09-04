import { IconButton } from "@chakra-ui/react";

const HeaderIcon = (props) => {
  return (
    <IconButton
      {...props}
      sx={{
        w: "16",
        h: "16",
        bg: "transparent",
        fontSize: "5xl",
        p: "1",
        mr: "4",
        _hover: {
          bg: "secondary.600",
        },
      }}
    />
  );
};

export default HeaderIcon;
