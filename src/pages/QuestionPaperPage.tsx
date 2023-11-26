import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot } from '@chakra-ui/react';
import { useLocation, Link } from 'react-router-dom';
import PageFilters from '../components/PageFilters';
import useQuestionPapers from '../hooks/useQuestionPapers';

const QuestionPaperPage = () => {
    const location = useLocation();
    const { subject_id } = location.state;
    const { data } = useQuestionPapers(subject_id);
    return (
      <>
        <PageFilters />
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Month, Year</Th>
                <Th>Size</Th>
                <Th>Format</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                data?.response.map((q) => (
                  <Tr>
                    <Link to={`${q.file_id}/`} key={q.id} state={{file_id: q.file_id}}>
                    <Td>{q.name}</Td>
                    </Link>
                    <Td>{q.month}, {q.year}</Td>
                    <Td>{q.file_size}</Td>
                    <Td>{q.file_format}</Td>
                  </Tr>
                ))
              }
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Name</Th>
                <Th>Month, Year</Th>
                <Th>Size</Th>
                <Th>Format</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </>
    );
}

export default QuestionPaperPage