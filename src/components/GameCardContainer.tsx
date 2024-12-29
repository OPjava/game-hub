import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width="300px"
      borderRadius="10px"
      border="1px"
      borderColor="gray.600"
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
