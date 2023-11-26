import {Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import PageFilters from "../components/PageFilters";
import UseSubjects from "../hooks/UseSubjects";

const SubjectPage = () => {
  const location = useLocation();
  const { branch_id, semester_id } = location.state;
  console.log(branch_id, semester_id)
  const { data } = UseSubjects(branch_id, semester_id);
  return (
    <>
      <PageFilters />
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Code</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              data?.response.map((sub) => (
                <Tr>
                  <Link to={`${sub.code}/`} key={sub.code} state={{subject_id: sub.id}}>
                  <Td>{sub.name}</Td>
                  </Link>
                  <Td>{sub.code}</Td>
                </Tr>
              ))
            }
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Name</Th>
              <Th>Code</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default SubjectPage;