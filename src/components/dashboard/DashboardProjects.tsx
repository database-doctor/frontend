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

import { gql, useMutation, useSuspenseQuery } from "@apollo/client";

import { GetUserProjectsQuery } from "@/graphql/__generated__/graphql";

import { getBearerFromToken } from "@/utils/clientauth";

import { useSession } from "next-auth/react";

import {
  CreateProject,
  CreateUserProjectToken,
} from "@/graphql/mutations/Project.graphql";

function DashboardProjects({ data }: { data: GetUserProjectsQuery }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectConnUrl, setNewProjectConnUrl] = useState("");

  const { data: session, status } = useSession();

  const [createProject] = useMutation(CreateProject, {
    context: {
      headers: {
        authorization: getBearerFromToken(session?.user?.token || ""),
      },
    },
  });
  const [createUserProjectToken] = useMutation(CreateUserProjectToken, {
    context: {
      headers: {
        authorization: getBearerFromToken(session?.user?.token || ""),
      },
    },
  });

  async function postNewProject(data: any) {
    console.log(data);
    createProject({
      variables: {
        newProject: data.newProject,
      },
    }).then((res) => {
      createUserProjectToken({
        variables: {
          newUserProjectToken: {
            uid: res.data.createProject.createdById,
            pid: res.data.createProject.pid,
          },
        },
      });
    });

    // TODO : Implement an express route to handle instead of what I'm currently doing above. This below was running into cors errors.
    // if (!session?.user) return;
    // console.log(data);
    // const url = "http://localhost:8080/project";
    // const response = await fetch(url, {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     authorization: getBearerFromToken(session.user.token),
    //   },
    //   body: JSON.stringify(data),
    // });
    // const json = await response.json();
    // return json;

    onClose();
  }

  async function onSubmitNewProject() {
    if (!newProjectName || !newProjectConnUrl) {
      alert("You must specify a project name and project connUrl");
      return;
    }

    const newProject = {
      name: newProjectName,
      dbUrl: newProjectConnUrl,
    };

    postNewProject({ newProject });
  }

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
            {/* onClick={onSubmitNewProject} */}
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
        {data.allProjects.map((project: any) => (
          <ProjectCard
            key={project.pid}
            title={project.name}
            owner={project.createdBy}
            createdDate={project.createdAt}
            projectId={project.pid}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default DashboardProjects;
