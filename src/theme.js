import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    heading: `"Kosugi Maru"`,
    body: `Zen Kaku Gothic New`,
  },
  breakpoints: {
    xs: "40.75rem",
    sm: "43.75rem",
    md: "57.1875rem",
  },
  colors: {
    primary: {
      500: "#e6e6e6",
    },
    secondary: {
      500: "#F9F9F8",
      600: "#c4c4c4",
    },
    accent: {
      500: "#295D72",
    },
  },
  components: {
    Text: {
      variants: {
        headline: {
          color: "accent.500",
          fontWeight: "bold",
          fontSize: "3xl",
          cursor: "default",
          fontFamily: "Kosugi Maru",
        },
        primary: {
          color: "accent.500",
          fontFamily: "Zen Kaku Gothic New",
          letterSpacing: "-0.06em",
          cursor: "default",
          fontSize: { base: "1.3rem", md: "1.5rem" },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "primary.500",
      },
    },
  },
});

export default customTheme;
