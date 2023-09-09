import { Center, Text } from "@chakra-ui/react";

interface Props {
  stream: string;
  url: string;
}

const StreamBox = ({ stream, url }: Props) => {
  return (
    <Center
      w="100%"
      h="150px"
      borderRadius={10}
      bgImage={`url(${url})`}
      bgSize="cover"
    >
      <Text color="white" fontSize={30} fontWeight="bold">
        {stream}
      </Text>
    </Center>
  );
};

export default StreamBox;
