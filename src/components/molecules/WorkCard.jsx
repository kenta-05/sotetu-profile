import { Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function WorkCard({ src, route }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        pb: "6",
        px: "1",
        borderRadius: "md",
      }}
      onClick={() => {
        navigate(route);
      }}
    >
      <Image
        src={src}
        alt="work image"
        transition="0.3s"
        cursor="pointer"
        sx={{
          borderRadius: "md",
          w: "27rem",
          boxShadow: "0px 0px 10px -3px #777777",
          _hover: { filter: "brightness(0.95)", transform: "scale(0.98)" },
        }}
      />
    </Box>
  );
}

export default WorkCard;
