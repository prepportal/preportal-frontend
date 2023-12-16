import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import PageFilters from "../components/PageFilters";
import useQuestionPapers from "../hooks/useQuestionPapers";
import { MdFileDownload, MdOpenInNew } from "react-icons/md";

const QuestionPaperPage = () => {
  const location = useLocation();
  const { subject_id } = location.state;
  const { data } = useQuestionPapers(subject_id);
  console.log(data);
  return (
    <>
      <PageFilters name="Question Papers" />
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {data?.response.map((q) => (
          <Box
            borderRadius={10}
            overflow="hidden"
            _hover={{
              transform: "scale(1.03)",
              transition: "transform .15s ease-in",
            }}
          >
            <Card variant="filled" maxW={"sm"}>
              <Image
                src="https://lh3.googleusercontent.com/d/1d8f4nG8HNizUliqg19_9hztdVl8boIQz"
                objectFit={"cover"}
                maxH="300px"
                sx={{ objectPosition: "top" }}
              />
              <CardBody>
                <HStack justifyContent="space-between" marginBottom={3}>
                  <Badge fontSize="0.8em" colorScheme="green">
                    {`${q.month}, ${q.year}`}
                  </Badge>
                </HStack>
                <Heading fontSize="lg">{q.name}</Heading>
                <HStack justifyContent="space-between" marginTop={3}>
                  <Button
                    rightIcon={<MdFileDownload size="1.5em" />}
                    colorScheme="blue"
                    variant="solid"
                    size={"sm"}
                    as={"a"}
                    href={`https://drive.google.com/uc?export=download&id=${q.file_id}`}
                  >
                    Download
                  </Button>
                  <Button
                    rightIcon={<MdOpenInNew size="1.5em" />}
                    colorScheme="teal"
                    variant="solid"
                    size={"sm"}
                    as={"a"}
                    href={`https://drive.google.com/open?id=${q.file_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview
                  </Button>
                </HStack>
              </CardBody>
            </Card>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default QuestionPaperPage;
