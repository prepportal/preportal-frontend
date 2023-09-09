import { Flex, Spinner } from "@chakra-ui/react";
import PageFilters from "../components/PageFilters";
import StreamBox from "../components/StreamBox/StreamBox";
import useBranches from "../hooks/useBraches";

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
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCpHW8PuoJVhrUQRgxh4oXx5xp_ajdbTtLg&usqp=CAU"
            overlayColor="#1A237E"
          />
        ))}
      </Flex>
    </>
  );
};

export default BranchPage;
