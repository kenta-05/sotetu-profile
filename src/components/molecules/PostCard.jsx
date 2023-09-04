import { Box, Button, Image, Text, useMediaQuery } from "@chakra-ui/react";

function PostCard({ src, title, url }) {
  const [isSmaller1520] = useMediaQuery("(max-width: 1520px)");
  const [isSmaller1360] = useMediaQuery("(max-width: 1360px)");
  const [isSmaller1200] = useMediaQuery("(max-width: 1200px)");
  const [isSmaller1020] = useMediaQuery("(max-width: 1020px)");
  const [isSmaller900] = useMediaQuery("(max-width: 900px)");
  const [isSmaller800] = useMediaQuery("(max-width: 800px)");
  const [isSmaller730] = useMediaQuery("(max-width: 730px)");

  const getW = () => {
    if (isSmaller730) {
      return "25rem";
    } else if (isSmaller800) {
      return "20rem";
    } else if (isSmaller900) {
      return "22rem";
    } else if (isSmaller1020) {
      return "25rem";
    } else if (isSmaller1200) {
      return "28rem";
    } else if (isSmaller1360) {
      return "22rem";
    } else if (isSmaller1520) {
      return "25rem";
    } else {
      return "28rem";
    }
  };

  return (
    <Box
      sx={{
        borderRadius: "lg",
        transition: "all 0.2s",
      }}
      onClick={() => {
        if (!url) {
          return;
        }
        window.open(url, "_blank");
      }}
    >
      <Image
        src={src}
        alt="Sample Image"
        transition="0.4s"
        cursor="pointer"
        borderRadius="md"
        sx={{
          w: getW(),
          _hover: { filter: "brightness(0.85)" },
        }}
      />
      <Text variant="primary" pb="8">
        {title}
      </Text>
    </Box>
  );
}

export default PostCard;
