import {Table, TableContainer, Tbody, Td, Th, Thead, Tr, Button } from "@chakra-ui/react";


const SubjectPage = () => {
  
  return (
    <>
      <TableContainer>
        <Table variant='striped' colorScheme='purple'>
          <Thead>
            <Tr>
              <Th color='powderblue'>Subjects</Th>
              <Th color='powderblue'>Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>ENGINEERING MECHANICS (EST100)</Td>
              <Td><Button variant='link' color='powderblue' fontWeight={"bold"}>Open</Button></Td>
            </Tr>
            <Tr>
              <Td>BASICS OF CIVIL AND MECHANICAL ENGINEERING (EST120)</Td>
              <Td><Button variant='link' color='powderblue' fontWeight={"bold"}>Open</Button></Td>
            </Tr>
            <Tr>
              <Td>ENGINEERING PHYSICS A (PHT100)</Td>
              <Td><Button variant='link' color='powderblue' fontWeight={"bold"}>Open</Button></Td>
            </Tr>
            <Tr>
              <Td>LINEAR ALGEBRA AND CALCULUS (MAT101)</Td>
              <Td><Button variant='link' color='powderblue' fontWeight={"bold"}>Open</Button></Td>
            </Tr>
            <Tr>
              <Td>LIFE SKILLS (HUN101)</Td>
              <Td><Button variant='link' color='powderblue' fontWeight={"bold"}>Open</Button></Td>
            </Tr>
            <Tr>
              <Td>BASICS OF ELECTRICAL AND ELECTRONICS ENGINEERING (EST130)</Td>
              <Td><Button variant='link' color='powderblue' fontWeight={"bold"}>Open</Button></Td>
            </Tr>
            <Tr>
              <Td>ENGINEERING GRAPHICS (EST110)</Td>
              <Td><Button variant='link' color='powderblue' fontWeight={"bold"}>Open</Button></Td>
            </Tr>
          </Tbody>

        </Table>
      </TableContainer>
    </>
  );
};

export default SubjectPage;