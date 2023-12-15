import { Box, Heading } from "@chakra-ui/react";

interface props {
  name: string;
}
const PageFilters = ({ name }: props) => {
  return (
    <Box>
      <Heading as="h1" marginY={5} fontSize="4xl">
        {name}
      </Heading>
    </Box>
  );
};

export default PageFilters;
