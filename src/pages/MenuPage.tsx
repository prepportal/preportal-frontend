import { Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import PageFilters from "../components/PageFilters";
import StreamBox from "../components/StreamBox/StreamBox";

const MenuPage = () => {
  const location = useLocation();
  const { branch_id, semester_id } = location.state;
  console.log(branch_id, semester_id);
  return (
    <>
      <PageFilters name="Menu"/>
      <Flex flexDirection="column" gap="20px">
        <Link
          to={`question/`}
          state={{ branch_id: branch_id, semester_id: semester_id }}
          key="question"
        >
          <StreamBox stream="Question Papers" url="https://images.unsplash.com/photo-1518384401463-d3876163c195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
        </Link>
        <Link
          to={`note/`}
          state={{ branch_id: branch_id, semester_id: semester_id }}
          key="note"
        >
          <StreamBox stream="Notes" url="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" />
        </Link>
        <Link
          to={`syllabus/`}
          state={{ branch_id: branch_id, semester_id: semester_id }}
          key="syllabus"
        >
          <StreamBox stream="Syllabus" url="https://images.unsplash.com/37/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
        </Link>
      </Flex>
    </>
  );
};

export default MenuPage;
