import { Image } from "@chakra-ui/react";
import React from "react";

function Thumbnail({ src, isLessThan560 }) {
  return (
    <Image
      src={src}
      alt="work image"
      sx={{
        mt: "6",
        w: "35rem",
        mr: isLessThan560 ? "0" : "8",
        boxShadow: "0px 0px 10px -3px #777777",
      }}
    />
  );
}

export default Thumbnail;
