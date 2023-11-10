import { Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import PageFilters from "../components/PageFilters";
import StreamBox from "../components/StreamBox/StreamBox";

const SubjectPage = () => {
  const location = useLocation();
  const { branch_id, semester_id } = location.state;
  return (
    <>
      <PageFilters />
      <Flex flexDirection="column" gap="20px">
        <Link
          to={`CST202/`}
          state={{ branch_id: branch_id, semster_id: semester_id }}
          key="CST202"
        >
          <StreamBox
            stream="CST202"
            url="https://images.unsplash.com/photo-1682686579976-879b74d6d7ea?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Link>
      </Flex>
    </>
  );
};

export default SubjectPage;