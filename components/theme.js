import { extendTheme, defineStyleConfig } from "@chakra-ui/react";

const baseTooltipStyle = {};

export const tooltipTheme = defineStyleConfig({ baseStyle: baseTooltipStyle });

export const theme = extendTheme({
  components: {
    Tooltip: tooltipTheme,
  },
});
