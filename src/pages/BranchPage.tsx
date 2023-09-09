import { Flex, Spinner } from "@chakra-ui/react";
import PageFilters from "../components/PageFilters";
import StreamBox from "../components/StreamBox/StreamBox";
import useBranches from "../hooks/useBraches";
import Bg from "../assets/bg.png"

const BranchPage = () => {
  const { data, isLoading, error } = useBranches();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <PageFilters />
      <Flex  flexDirection='column' gap="20px">
        {data?.response.map((stream) => (
          <StreamBox
            stream={stream.name}
            key={stream.branch_id}
            url={Bg}
            // overlayColor="#1A237E"
          />
        ))}
      </Flex>
    </>
  );
};

export default BranchPage;
