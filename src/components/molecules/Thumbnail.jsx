import { Image } from "@chakra-ui/react";
import React from "react";

function Thumbnail({ src }) {
  return (
    <Image
      src={src}
      alt="work image"
      sx={{
        mt: "6",
        w: "35rem",
        boxShadow: "0px 0px 10px -3px #777777",
      }}
    />
  );
}

export default Thumbnail;
