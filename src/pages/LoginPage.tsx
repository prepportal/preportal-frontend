import {FormControl,FormLabel} from '@chakra-ui/form-control';
import {Box, Heading, VStack, Text, Input, HStack, Checkbox, Button} from '@chakra-ui/react';

const LoginPage = () => {
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
        <VStack spacing={1} align={['flex-start','center']} w='full'>
          <Heading color='teal.500'>Login</Heading>
          <Text>Enter following credentials to Login</Text>
        </VStack>
      
        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input rounded='none' variant='filled'></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type='password' rounded='none' variant='filled'></Input>
          
        </FormControl>
        <HStack w='full' justify='space-between'>
          <Checkbox>
            Remember Me.
          </Checkbox>
          <Button variant='link' colorScheme='blue'>
            Forgot Password?
          </Button>
        </HStack>
        <Button rounded='none' colorScheme='purple' w='full' fontWeight='bold'>
          Login
        </Button>
        <Text>
          Don't have an account,  
          <Button variant='link' color='pink.400'>
            Register Here!
          </Button>
        </Text>
      </VStack>
    </Box>

  );
}

export default LoginPage