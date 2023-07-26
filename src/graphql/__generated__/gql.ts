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
    "mutation CreateProject($newProject: CreateProjectInput!) {\n  createProject(newProject: $newProject) {\n    pid\n    createdById\n  }\n}\n\nmutation CreateUserProjectToken($newUserProjectToken: CreateUserProjectTokenInput!) {\n  createUserProjectToken(newUserProjectToken: $newUserProjectToken) {\n    token\n  }\n}\n\nmutation AddUserToProject($addUserInput: AddUserToProjectInput!) {\n  addUserToProject(addUserInput: $addUserInput) {\n    token\n  }\n}": types.CreateProjectDocument,
    "mutation CreateRole($newRole: CreateRoleInput!) {\n  createRole(newRole: $newRole) {\n    name\n    pid\n    rid\n    permissions {\n      name\n    }\n  }\n}\n\nmutation AuthenticateOAuth($user: RegisterUserInput!) {\n  authenticateOAuthUser(user: $user) {\n    token\n  }\n}": types.CreateRoleDocument,
    "mutation RegisterUser($newUser: RegisterUserInput!) {\n  registerUser(newUser: $newUser) {\n    token\n  }\n}\n\nmutation LoginUser($userCreds: LoginUserInput!) {\n  loginUser(userCreds: $userCreds) {\n    token\n  }\n}": types.RegisterUserDocument,
    "query GetUserProjects {\n  allProjects {\n    pid\n    name\n    createdAt\n    createdBy\n    dbUrl\n  }\n}\n\nquery GetProjectDetails($pid: Int!) {\n  project(pid: $pid) {\n    name\n    createdAt\n    pid\n    dbUrl\n    createdBy\n    users {\n      createdAt\n      email\n      name\n      uid\n      username\n      userRoles(pid: $pid) {\n        name\n        rid\n      }\n    }\n    roles {\n      name\n      rid\n      permissions {\n        name\n        pid\n      }\n    }\n  }\n}": types.GetUserProjectsDocument,
    "query GetPermissions {\n  allPermissions {\n    name\n    pid\n  }\n}\n\nquery GetProjectRoles($pid: Int!) {\n  allRoles(pid: $pid) {\n    name\n    rid\n    permissions {\n      name\n      pid\n    }\n  }\n}": types.GetPermissionsDocument,
    "query CommonSqlQueries($pid: Int!) {\n  commonSqlQueries(pid: $pid) {\n    jid\n    statement\n    type\n    project {\n      name\n    }\n    finishedAt\n    issuedAt\n    error\n  }\n}\n\nquery CommonColumnQueries($pid: Int!) {\n  commonColumnQueries(pid: $pid) {\n    columnName\n    columnType\n    schemaName\n    tableName\n  }\n}\n\nquery CommonTableQueries($pid: Int!) {\n  commonTableQueries(pid: $pid) {\n    tid\n    tableName\n    schemaName\n  }\n}\n\nquery CommonUserQueries($pid: Int!) {\n  commonUserQueries(uid: $pid) {\n    uid\n    username\n    name\n    email\n  }\n}\n\nquery TableFrequency {\n  tableFrequency {\n    table {\n      name\n    }\n    frequency\n  }\n}\n\nquery ColumnFrequency {\n  columnFrequency {\n    cid\n    column {\n      name\n      table {\n        name\n      }\n    }\n    frequency\n  }\n}": types.CommonSqlQueriesDocument,
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
export function gql(source: "mutation CreateProject($newProject: CreateProjectInput!) {\n  createProject(newProject: $newProject) {\n    pid\n    createdById\n  }\n}\n\nmutation CreateUserProjectToken($newUserProjectToken: CreateUserProjectTokenInput!) {\n  createUserProjectToken(newUserProjectToken: $newUserProjectToken) {\n    token\n  }\n}\n\nmutation AddUserToProject($addUserInput: AddUserToProjectInput!) {\n  addUserToProject(addUserInput: $addUserInput) {\n    token\n  }\n}"): (typeof documents)["mutation CreateProject($newProject: CreateProjectInput!) {\n  createProject(newProject: $newProject) {\n    pid\n    createdById\n  }\n}\n\nmutation CreateUserProjectToken($newUserProjectToken: CreateUserProjectTokenInput!) {\n  createUserProjectToken(newUserProjectToken: $newUserProjectToken) {\n    token\n  }\n}\n\nmutation AddUserToProject($addUserInput: AddUserToProjectInput!) {\n  addUserToProject(addUserInput: $addUserInput) {\n    token\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation CreateRole($newRole: CreateRoleInput!) {\n  createRole(newRole: $newRole) {\n    name\n    pid\n    rid\n    permissions {\n      name\n    }\n  }\n}\n\nmutation AuthenticateOAuth($user: RegisterUserInput!) {\n  authenticateOAuthUser(user: $user) {\n    token\n  }\n}"): (typeof documents)["mutation CreateRole($newRole: CreateRoleInput!) {\n  createRole(newRole: $newRole) {\n    name\n    pid\n    rid\n    permissions {\n      name\n    }\n  }\n}\n\nmutation AuthenticateOAuth($user: RegisterUserInput!) {\n  authenticateOAuthUser(user: $user) {\n    token\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation RegisterUser($newUser: RegisterUserInput!) {\n  registerUser(newUser: $newUser) {\n    token\n  }\n}\n\nmutation LoginUser($userCreds: LoginUserInput!) {\n  loginUser(userCreds: $userCreds) {\n    token\n  }\n}"): (typeof documents)["mutation RegisterUser($newUser: RegisterUserInput!) {\n  registerUser(newUser: $newUser) {\n    token\n  }\n}\n\nmutation LoginUser($userCreds: LoginUserInput!) {\n  loginUser(userCreds: $userCreds) {\n    token\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetUserProjects {\n  allProjects {\n    pid\n    name\n    createdAt\n    createdBy\n    dbUrl\n  }\n}\n\nquery GetProjectDetails($pid: Int!) {\n  project(pid: $pid) {\n    name\n    createdAt\n    pid\n    dbUrl\n    createdBy\n    users {\n      createdAt\n      email\n      name\n      uid\n      username\n      userRoles(pid: $pid) {\n        name\n        rid\n      }\n    }\n    roles {\n      name\n      rid\n      permissions {\n        name\n        pid\n      }\n    }\n  }\n}"): (typeof documents)["query GetUserProjects {\n  allProjects {\n    pid\n    name\n    createdAt\n    createdBy\n    dbUrl\n  }\n}\n\nquery GetProjectDetails($pid: Int!) {\n  project(pid: $pid) {\n    name\n    createdAt\n    pid\n    dbUrl\n    createdBy\n    users {\n      createdAt\n      email\n      name\n      uid\n      username\n      userRoles(pid: $pid) {\n        name\n        rid\n      }\n    }\n    roles {\n      name\n      rid\n      permissions {\n        name\n        pid\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetPermissions {\n  allPermissions {\n    name\n    pid\n  }\n}\n\nquery GetProjectRoles($pid: Int!) {\n  allRoles(pid: $pid) {\n    name\n    rid\n    permissions {\n      name\n      pid\n    }\n  }\n}"): (typeof documents)["query GetPermissions {\n  allPermissions {\n    name\n    pid\n  }\n}\n\nquery GetProjectRoles($pid: Int!) {\n  allRoles(pid: $pid) {\n    name\n    rid\n    permissions {\n      name\n      pid\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query CommonSqlQueries($pid: Int!) {\n  commonSqlQueries(pid: $pid) {\n    jid\n    statement\n    type\n    project {\n      name\n    }\n    finishedAt\n    issuedAt\n    error\n  }\n}\n\nquery CommonColumnQueries($pid: Int!) {\n  commonColumnQueries(pid: $pid) {\n    columnName\n    columnType\n    schemaName\n    tableName\n  }\n}\n\nquery CommonTableQueries($pid: Int!) {\n  commonTableQueries(pid: $pid) {\n    tid\n    tableName\n    schemaName\n  }\n}\n\nquery CommonUserQueries($pid: Int!) {\n  commonUserQueries(uid: $pid) {\n    uid\n    username\n    name\n    email\n  }\n}\n\nquery TableFrequency {\n  tableFrequency {\n    table {\n      name\n    }\n    frequency\n  }\n}\n\nquery ColumnFrequency {\n  columnFrequency {\n    cid\n    column {\n      name\n      table {\n        name\n      }\n    }\n    frequency\n  }\n}"): (typeof documents)["query CommonSqlQueries($pid: Int!) {\n  commonSqlQueries(pid: $pid) {\n    jid\n    statement\n    type\n    project {\n      name\n    }\n    finishedAt\n    issuedAt\n    error\n  }\n}\n\nquery CommonColumnQueries($pid: Int!) {\n  commonColumnQueries(pid: $pid) {\n    columnName\n    columnType\n    schemaName\n    tableName\n  }\n}\n\nquery CommonTableQueries($pid: Int!) {\n  commonTableQueries(pid: $pid) {\n    tid\n    tableName\n    schemaName\n  }\n}\n\nquery CommonUserQueries($pid: Int!) {\n  commonUserQueries(uid: $pid) {\n    uid\n    username\n    name\n    email\n  }\n}\n\nquery TableFrequency {\n  tableFrequency {\n    table {\n      name\n    }\n    frequency\n  }\n}\n\nquery ColumnFrequency {\n  columnFrequency {\n    cid\n    column {\n      name\n      table {\n        name\n      }\n    }\n    frequency\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetUserProfile {\n  user {\n    name\n    email\n    uid\n    username\n    createdAt\n  }\n}"): (typeof documents)["query GetUserProfile {\n  user {\n    name\n    email\n    uid\n    username\n    createdAt\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;