import { Box, Heading, VStack, Text, Input, HStack, Button, Select } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react'

const RegisterPage = () => {
    return (
        <Box
        w={['full','md']}
        p={[8,10]}
        mt={[20,'10vh']}
        mx={'auto'}
        border={['none','1px']}
        borderColor={['','gray.700']}
        borderRadius={10}
        >
            <VStack spacing={4} align='flex-start' w='full'>
                <VStack spacing={2} align={['flex-start','center']} w='full'>
                    <Heading color='teal.500'>Register</Heading>
                    <Text>Enter following credentials to Register</Text>
                </VStack>

                <HStack>
                <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type='text' variant='outline'></Input>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input type='text' variant='outline'></Input>
                </FormControl>
                </HStack>
                <FormControl isRequired>
                    <FormLabel>College Name</FormLabel>
                    <Input type='text' variant='outline'></Input>
                </FormControl>
                <HStack>
                    <FormControl isRequired>
                        <FormLabel>Branch</FormLabel>
                        <Select variant='outline'>
                            <option value='cse'>CSE</option>
                            <option value='me'>ME</option>
                            <option value='eee'>EEE</option>
                            <option value='aid'>AID</option>
                            <option value='mc'>MC</option>
                            <option value='ra'>RA</option>
                            <option value='ece'>ECE</option>
                            <option value='ce'>CE</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Semester</FormLabel>
                        <Select variant='outline'>
                            <option value='s1'>S1</option>
                            <option value='s2'>S2</option>
                            <option value='s3'>S3</option>
                            <option value='s4'>S4</option>
                            <option value='s5'>S5</option>
                            <option value='s6'>S6</option>
                            <option value='s7'>S7</option>
                            <option value='s8'>S8</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Year</FormLabel>
                        <Input type='number' variant='outline'></Input>
                    </FormControl>
                </HStack>
                <FormControl isRequired>
                    <FormLabel>E-mail</FormLabel>
                    <Input type='email' variant='outline'></Input>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" variant="outline"></Input>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input type="password" variant="outline"></Input>
                </FormControl>
                <HStack w='full' justify='space-between'>
                    
                    <Button variant='link' colorScheme='blue'>Forgot Password?</Button>
                </HStack>
                <Button colorScheme='purple' w='full' fontWeight='bold'>
                    Register
                </Button>
                <Text>
                    Already have an account,  
                    <Button variant='link' color='pink.400'>
                        Login Now!
                    </Button>
                </Text>
            </VStack>
        </Box>
    )
}

export default RegisterPage