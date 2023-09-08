import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  Image
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";


interface Props {
  onClose: () => void;
  isOpen: boolean;
  variant: "drawer" | "sidebar";
}

const SidebarContent = () => (
  <VStack>
    <Image src={logo} alt="logo" boxSize="50px" marginBottom={3}/>
    <Button w="100%">Home</Button>
    <Button w="100%">About</Button>
    <Button w="100%">Question Papers</Button>
    <Button w="100%">Notes</Button>
    <Button w="100%">Syllabus</Button>
    <Button w="100%">Contact</Button>
  </VStack>
);

const Sidebar = ({ isOpen, variant, onClose }: Props) => {
  return variant === "sidebar" ? (
    <Box padding="10px" w="200px">
      <SidebarContent />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chakra-UI</DrawerHeader>
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
