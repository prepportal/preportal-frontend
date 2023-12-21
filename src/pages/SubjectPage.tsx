import {Button, Stack, Text } from "@chakra-ui/react";

const SubjectPage = () => {
  return (
    <Stack spacing={4} p={4} align="center">
      <Text color="blueviolet" fontWeight="bold" textAlign="center">
        Subjects
      </Text>
      <Stack spacing={5} w="80%" align="center">
        <Button variant="solid" colorScheme='purple' fontWeight="bold" w="100%">
          ENGINEERING MECHANICS (EST100)
        </Button>
        <Button variant="solid" colorScheme='purple' fontWeight="bold" w="100%">
          BASICS OF CIVIL AND MECHANICAL ENGINEERING (EST120)
        </Button>
        <Button variant="solid" colorScheme='purple' fontWeight="bold" w="100%">
          ENGINEERING PHYSICS A (PHT100)
        </Button>
        <Button variant="solid" colorScheme='purple' fontWeight="bold" w="100%">
          LINEAR ALGEBRA AND CALCULUS (MAT101)
        </Button>
        <Button variant="solid" colorScheme='purple' fontWeight="bold" w="100%">
          LIFE SKILLS (HUN101)
        </Button>
        <Button variant="solid" colorScheme='purple' fontWeight="bold" w="100%">
          BASICS OF ELECTRICAL AND ELECTRONICS ENGINEERING (EST130)
        </Button>
        <Button variant="solid" colorScheme='purple' fontWeight="bold" w="100%">
          ENGINEERING GRAPHICS (EST110)
        </Button>
      </Stack>
    </Stack>
  );
};

export default SubjectPage;
