import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const variant = isDrawerSidebar ? "drawer" : "sidebar";
  return (
    <Grid
      templateAreas={{
        base: `"aside nav" "main"`,
        lg: `"aside nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav" paddingX={3}>
        <NavBar DrawerType={variant} OnClose={toggleSidebar}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <SideBar isOpen={isSidebarOpen} variant={variant} onClose={toggleSidebar}/>
        </GridItem>
      </Show>
      <GridItem area="main">
      </GridItem>
    </Grid>
  );
}
export default App;
