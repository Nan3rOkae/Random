
import { Box } from "./Box";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100vw",
    }}>
    {children}
  </Box>
);
