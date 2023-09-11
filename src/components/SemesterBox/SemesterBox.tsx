import { Flex, Text, Circle } from "@chakra-ui/react";

interface Props {
  semester: string;
}

const SemesterBox = ({semester}: Props) => {
  return (
    <Flex
      position="relative"
      w="250px"
      h="250px"
      borderRadius={10}
      overflow="hidden"
      boxShadow="md"
      bg="#18122B"
      justifyContent="center"
      alignItems="center"
      _hover={{
        transform: "scale(0.97)",
        transition: "transform .15s ease-in"
      }}
    >
      <Circle
        size="150px"
        bg="#66347F"
        color="#white"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        display="flex"
        transition="background-color 0.3s ease-in-out, color 0.3s ease-in-out"
        _hover={{
          backgroundColor: '#810CA8', 
          color: '#E5B8F4', 
        }}
      >
        <Text fontSize="70px">{semester}</Text>
      </Circle>
    </Flex>
  );
};

export default SemesterBox;
