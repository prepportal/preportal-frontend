import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

interface Props {
  stream: string;
  url: string;
  overlayColor: string;
}

const StreamBox = ({ stream, url, overlayColor }: Props) => {
  return (
    <Box
      w="100%"
      color="white"
      h="150px"
      borderRadius={10}
      bgImage={`url(${url})`}
      bgSize="cover"
      position="relative"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg={overlayColor}
        opacity={0.5}
        borderRadius={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        {/* Outer overlay with reduced opacity */}
        <Box opacity={1}>
          <Text zIndex={1} color="white" fontSize={30} fontWeight="bold">
            {stream}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default StreamBox;
