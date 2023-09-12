import { Flex, Spinner } from "@chakra-ui/react";
import PageFilters from "../components/PageFilters";
import StreamBox from "../components/StreamBox/StreamBox";
import useBranches from "../hooks/useBraches";
import { Link } from "react-router-dom";

const BranchPage = () => {
  const { data, isLoading, error } = useBranches();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <PageFilters />
      <Flex flexDirection="column" gap="20px">
        {data?.response.map((stream) => (
          <Link
            to={`${stream.code}/`}
            state={{ branch_id: stream.id }}
            key={stream.code}
          >
            <StreamBox stream={stream.name} url={stream.bg_url} />
          </Link>
        ))}
      </Flex>
    </>
  );
};

export default BranchPage;
