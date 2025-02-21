import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
// import { theme } from "../frontend/src/theme";
const varRoot = ":host"

const config = defineConfig({
  // theme: theme,
  // theme: {
  //   tokens: {
  //     colors: {},
  //   },
  // },
  // theme: {
  //   breakpoints: {
  //     sm: "320px",
  //     md: "768px",
  //     lg: "960px",
  //     xl: "1200px",
  //   },
  //   tokens: {
  //     colors: {
  //       red: "#EE0F0F",
  //     },
  //   },
  //   semanticTokens: {
  //     colors: {
  //       danger: { value: "{colors.red}" },
  //     },
  //   },
  //   keyframes: {
  //     spin: {
  //       from: { transform: "rotate(0deg)" },
  //       to: { transform: "rotate(360deg)" },
  //     },
  //   },
  // },
  cssVarsRoot: varRoot,
  conditions: {
    light: `${varRoot} &, .light &`,
  },
  preflight: { scope: varRoot },
  globalCss: {
    [varRoot]: defaultConfig.globalCss?.html ?? {},
  },
})

export const system = createSystem(defaultConfig, config)