import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: 'greyBg',
          color: 'black',
        },
      },
    },
    colors: {
      mainColor: '#CEA23F',
      greyBg: "#F7F9FF",
      secondaryColor: '#E3C990',
      textColor: '#484848',
      blackSectionBg: '#313131',
      overlayColor: 'rgba(30,30,30,0.4)',
      overlayColorDark: 'rgba(30,30,30,0.7)',
      overlayColorGreen: 'rgba(4, 97, 80, 0.7)',
      primary: {
        p50: "#faf6ec",
        p75: "#ebd9b0",
        p100: "#e3c990",
        p200: "#d6b260",
        p300: "#cea23f",
        p400: "#90712c",
        p500: "#7e6326",
      },
      secondary: {
        s50: "#e6f5f3",
        s75: "#99d8cc",
        s100: "#6fc7b7",
        s200: "#31af98",
        s300: "#079f83",
        s400: "#056f5c",
        s500: "#046150",
      },
      nutral: {
        n50: "#e9e9e9",
        n75: "#a3a3a3",
        n100: "#7d7d7d",
        n200: "#444444",
        n300: "#1e1e1e",
        n400: "#151515",
        n500: "#121212",
      }

    },
    sizes: {
      mainContainerSize: '1200px',
    },
    fonts: {
      body: "variable(--noto-sans)",
      heading: "variable(--noto-sans)",
    }
});