import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
});

const colors = {
    "--primary-color": "#000",
    "--secondary-color": "#2a2b2e",
};

export { breakpoints, colors };