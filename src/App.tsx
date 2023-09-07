import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { useState } from "react";
import PageFilters from "./components/PageFilters";
import StreamBox from "./components/StreamBox/StreamBox";

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
        base: `"nav" "main"`,
        lg: `"aside nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav" paddingX={3}>
        <NavBar DrawerType={variant} onShowSidebar={toggleSidebar} />
      </GridItem>
      <GridItem area="aside">
        <SideBar
          isOpen={isSidebarOpen}
          variant={variant}
          onClose={toggleSidebar}
        />
      </GridItem>
      <GridItem area="main">
        <PageFilters />
        <StreamBox
          stream="Artificial Intelligence and Data Science"
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCpHW8PuoJVhrUQRgxh4oXx5xp_ajdbTtLg&usqp=CAU"
          overlayColor="#1A237E"

        />
      </GridItem>
    </Grid>
  );
}
export default App;
