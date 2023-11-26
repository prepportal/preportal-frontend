import { Link, useLocation } from "react-router-dom";
import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import PageFilters from "../components/PageFilters";
import SemesterBox from "../components/SemesterBox/SemesterBox";
import useSemesters from "../hooks/useSemesters";

const SemesterPage = () => {
  const location = useLocation();
  const { branch_id } = location.state;
  console.log(branch_id);
  const { data, isLoading, error } = useSemesters(branch_id);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <PageFilters />
      <Center>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 2, xl: 4 }}
          spacing={6}
          padding="10px"
        >
          {data?.response.map((sem) => (
            <Link to={`${sem.code}/`} key={sem.code} state={{branch_id: branch_id, semester_id: sem.id}}>
            <SemesterBox semester={sem.code}/>
            </Link>
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
};

export default SemesterPage;
