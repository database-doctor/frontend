/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation RegisterUser($newUser: RegisterUserInput!) {\n  registerUser(newUser: $newUser) {\n    token\n  }\n}\n\nmutation LoginUser($userCreds: LoginUserInput!) {\n  loginUser(userCreds: $userCreds) {\n    token\n  }\n}": types.RegisterUserDocument,
    "query GetUserProjects {\n  allProjects {\n    pid\n    name\n    createdAt\n    createdBy\n    dbUrl\n  }\n}": types.GetUserProjectsDocument,
    "query GetUserProfile {\n  user {\n    name\n    email\n    uid\n    username\n    createdAt\n  }\n}": types.GetUserProfileDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation RegisterUser($newUser: RegisterUserInput!) {\n  registerUser(newUser: $newUser) {\n    token\n  }\n}\n\nmutation LoginUser($userCreds: LoginUserInput!) {\n  loginUser(userCreds: $userCreds) {\n    token\n  }\n}"): (typeof documents)["mutation RegisterUser($newUser: RegisterUserInput!) {\n  registerUser(newUser: $newUser) {\n    token\n  }\n}\n\nmutation LoginUser($userCreds: LoginUserInput!) {\n  loginUser(userCreds: $userCreds) {\n    token\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetUserProjects {\n  allProjects {\n    pid\n    name\n    createdAt\n    createdBy\n    dbUrl\n  }\n}"): (typeof documents)["query GetUserProjects {\n  allProjects {\n    pid\n    name\n    createdAt\n    createdBy\n    dbUrl\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetUserProfile {\n  user {\n    name\n    email\n    uid\n    username\n    createdAt\n  }\n}"): (typeof documents)["query GetUserProfile {\n  user {\n    name\n    email\n    uid\n    username\n    createdAt\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;