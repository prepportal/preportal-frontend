import { FormControl, FormLabel } from "@chakra-ui/form-control";
import {
  Box,
  Heading,
  VStack,
  Text,
  Input,
  HStack,
  Checkbox,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import useModalStore from "../hooks/useModalStore";

const LoginPage = () => {
  const { isOpen, closeModal } = useModalStore();
  const initialRef = React.useRef(null);
  return (
    <Modal
      isCentered
      onClose={closeModal}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Box
            p={[8, 10]}
            mx={"auto"}
            border={["none", "1px"]}
            borderColor={["", "gray.700"]}
            borderRadius={10}
          >
            <VStack spacing={4} align="flex-start" w="full">
              <VStack spacing={1} align={["flex-start", "center"]} w="full">
                <Heading color="teal.500">Login</Heading>
                <Text>Enter following credentials to Login</Text>
              </VStack>

              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input ref={initialRef} variant="outline"></Input>
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="password" variant="outline"></Input>
              </FormControl>
              <HStack w="full" justify="space-between">
                <Checkbox>Remember Me.</Checkbox>
                <Button variant="link" colorScheme="blue">
                  Forgot Password?
                </Button>
              </HStack>
              <Button
                colorScheme="purple"
                w="full"
                fontWeight="bold"
              >
                Login
              </Button>
              <Text>
                Don't have an account, {" "}
                <Button variant="link" color="pink.400">
                  Register Here!
                </Button>
              </Text>
            </VStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginPage;
