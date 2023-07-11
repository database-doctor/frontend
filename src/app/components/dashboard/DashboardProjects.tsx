"use client";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import {
  Card,
  CardBody,
  Flex,
  Icon,
  Heading,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";

import ProjectCard from "./ProjectCard";

import { gql, useMutation } from "@apollo/client";

const CREATE_PROJECT_MUTATION = gql`
mutation CreateProject($newProject: CreateProjectInput!)${""} {
    createProject(newProject: $newProject) {
      projectName,
      projectId,
      createdById,
      createdAt
    }
}
`;

const CREATE_USER_PROJECT_TOKEN_MUTATION = gql`
mutation CreateUserProjToken($newUserProjectToken: CreateUserProjectTokenInput!)${""} {
  createUserProjectToken(newUserProjectToken: $newUserProjectToken) {
    projectId,
    userId,
  }
}
`;

function DashboardProjects({ userId }: { userId: number }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectConnUrl, setNewProjectConnUrl] = useState("");

  const [createProject, { data, loading, error }] = useMutation(
    CREATE_PROJECT_MUTATION
  );
  const [createUserProjectToken] = useMutation(
    CREATE_USER_PROJECT_TOKEN_MUTATION
  );

  const onSubmitNewProject = () => {
    if (!newProjectName || !newProjectConnUrl) {
      alert("You must specify a project name and project connUrl");
      return;
    }

    const newProject = {
      projectName: newProjectName,
      connUrl: newProjectConnUrl,
      createdById: userId,
    };

    createProject({
      variables: {
        newProject,
      },
    }).then((res) => {
      createUserProjectToken({
        variables: {
          newUserProjectToken: {
            userId,
            projectId: res.data.createProject.projectId,
            accessToken: "what-is-this?",
          },
        },
      });
    });

    onClose();
  };

  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Heading size={"lg"}>Projects</Heading>
        <Button bgColor="pink.600" _hover={{ bg: "pink.900" }} onClick={onOpen}>
          <Icon as={AddIcon} marginRight={2} />
          Create New Project
        </Button>
      </Flex>
      <br />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl id="Project Name">
                <Input
                  placeholder="Project Name"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  onChange={(e) => setNewProjectName(e.target.value)}
                />
              </FormControl>
              <FormControl id="connurl">
                <Input
                  placeholder="Connection URL"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  onChange={(e) => setNewProjectConnUrl(e.target.value)}
                />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="pink" mr={3} onClick={onSubmitNewProject}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <SimpleGrid
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </SimpleGrid>
    </>
  );
}

export default DashboardProjects;
