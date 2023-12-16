import {Table, TableContainer, Tbody, Td, Th, Thead, Tr, Button } from "@chakra-ui/react";

const SubjectPage = () => {
 
  return (
    <>
      

      <TableContainer>
        <Table variant='unstyled' colorScheme='purple'>
          <Thead>
            <Tr>
              <Th color='blueviolet' style={{ textAlign: 'center' }}>Subjects</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Button variant='outline'  borderColor='purple' fontWeight={"bold"} w='full'>
                  ENGINEERING MECHANICS (EST100)
                </Button>
              </Td>
            </Tr>

            <Tr>
              <Td>
                <Button variant='outline'  borderColor='purple' fontWeight={"bold"} w='full'>
                  BASICS OF CIVIL AND MECHANICAL ENGINEERING (EST120)
                </Button>
              </Td> 
            </Tr>

            <Tr>
              <Td>
                <Button variant='outline'  borderColor='purple' fontWeight={"bold"} w='full'>
                  ENGINEERING PHYSICS A (PHT100)
                </Button>
              </Td>
            </Tr>

            <Tr>
              <Td>
                <Button variant='outline' borderColor='purple' fontWeight={"bold"} w='full'>
                  LINEAR ALGEBRA AND CALCULUS (MAT101)
                </Button>
              </Td> 
            </Tr>

            <Tr>
              <Td>
                <Button variant='outline' borderColor='purple' fontWeight={"bold"} w='full'>
                  LIFE SKILLS (HUN101)
                </Button>
              </Td>
            </Tr>

            <Tr>
              <Td>
                <Button variant='outline'  borderColor='purple' fontWeight={"bold"} w='full'>
                  BASICS OF ELECTRICAL AND ELECTRONICS ENGINEERING (EST130)
                </Button>
              </Td>
            </Tr>

            <Tr>
              <Td>
                <Button variant='outline'  borderColor='purple' fontWeight={"bold"} w='full'>
                  ENGINEERING GRAPHICS (EST110)
                </Button>
              </Td>
            </Tr>

          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SubjectPage;