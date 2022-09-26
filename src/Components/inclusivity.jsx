// import Navbar from "./Navbar";
import {Box,Flex,Heading,Button,Text,Spacer } from "@chakra-ui/react";

export default function Kuttynav() {
    return (
      <>
      <Box backgroundColor="darkblue" color="white" >
      <Box  width="auto">
      <Flex gap="2rem" textAlign="center" margin="2rem 2rem 2rem">
      <Heading color="white" fontSize="40px">Neurodiversity</Heading>
      <Spacer/>
      <Box  margin="0.5rem 0.5rem" >
     <Button  padding =" 10px" fontSize="16px" backgroundColor="blue" border="blue">Overviews</Button>
      </Box>
      <Box margin="0.5rem 0.5rem" >
       <Text fontsixe="16px">In Education</Text>
      </Box>
      <Box margin="0.5rem 0.5rem" >
      <Text fontsixe="16px">In the Workplace</Text>
      </Box>
      <Box margin="0.5rem 0.5rem" >
      <Text fontsixe="16px">Needs Assessors</Text>
      </Box>
      
      <Box >
      <Button   margin-top="50px" 	border-radius ="20px"padding =" 10px" fontsixe="16px" backgroundColor="Blue" color="white">Get Started</Button>
      </Box>
     </Flex>
     <Box alignItems="center" width="60%">
     </Box>
     <Flex gap="30%">
      <Box width="40%">
    <Heading  width="100% "fontSize="60px">What is Neurodiversity?</Heading>
    </Box>
    <Box width="50%">
    <Text width="90%" font-size="50px">“ Neurodiversity may be every bit as crucial for the human race as biodiversity is for life in general. “
</Text>

<Text font-size="24px">Harvey Blume</Text>
    </Box>
    </Flex>
    <Box>
      <img width="70%" src="https://www.ayoa.com/wp-content/uploads/2022/06/My-project-4.png" alt="brain" />
    </Box>
    <Box width="50%" alignItems="center" margin="auto">
    <Text>
    In basic terms, neurodiversity refers to the fact that we all think differently, and our brains function in different ways. Sometimes, this difference is clear to us, but other times it might be harder to detect or understand.
    </Text>
    </Box>
    <Box width="50%" alignItems="center" margin="auto">
    <Text>
    Neurodivergent individuals usually have a specific condition characterised by a cluster of behavioural or cognitive symptoms that impair ability to function ‘typically’ in society, whether that’s at home, in education, or in the workplace.
    </Text>
    </Box>
    <Box width="50%" alignItems="center" margin="auto">
    <Text>

    This is quite a simplistic understanding, though, and doesn’t account for the range of human experiences, individual differences, or the strengths of neurodivergent brains!
    </Text>
    </Box>
    <Box  width="50%" alignItems="center" margin="auto">
    <Text>
    Head over to our blog on neurodiversity to find out more.
    </Text>
    </Box>
    </Box>
    </Box>
    
     </>
    );
  }