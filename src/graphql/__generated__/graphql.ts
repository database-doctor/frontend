/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any; }
};

export type AddUserToProjectInput = {
  email: Scalars['String']['input'];
  pid: Scalars['Int']['input'];
  roles: Array<Scalars['Int']['input']>;
};

export type AlertHistoryListRelationFilter = {
  every?: InputMaybe<AlertHistoryWhereInput>;
  none?: InputMaybe<AlertHistoryWhereInput>;
  some?: InputMaybe<AlertHistoryWhereInput>;
};

export type AlertHistoryWhereInput = {
  AND?: InputMaybe<Array<AlertHistoryWhereInput>>;
  NOT?: InputMaybe<Array<AlertHistoryWhereInput>>;
  OR?: InputMaybe<Array<AlertHistoryWhereInput>>;
  ahid?: InputMaybe<IntFilter>;
  aid?: InputMaybe<IntFilter>;
  alert?: InputMaybe<AlertRelationFilter>;
  issuedAt?: InputMaybe<DateTimeFilter>;
};

export type AlertListRelationFilter = {
  every?: InputMaybe<AlertWhereInput>;
  none?: InputMaybe<AlertWhereInput>;
  some?: InputMaybe<AlertWhereInput>;
};

export type AlertNotificationListRelationFilter = {
  every?: InputMaybe<AlertNotificationWhereInput>;
  none?: InputMaybe<AlertNotificationWhereInput>;
  some?: InputMaybe<AlertNotificationWhereInput>;
};

export type AlertNotificationWhereInput = {
  AND?: InputMaybe<Array<AlertNotificationWhereInput>>;
  NOT?: InputMaybe<Array<AlertNotificationWhereInput>>;
  OR?: InputMaybe<Array<AlertNotificationWhereInput>>;
  aid?: InputMaybe<IntFilter>;
  alert?: InputMaybe<AlertRelationFilter>;
  anid?: InputMaybe<IntFilter>;
  isRead?: InputMaybe<BoolFilter>;
  issuedAt?: InputMaybe<DateTimeFilter>;
  uid?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type AlertRelationFilter = {
  is?: InputMaybe<AlertWhereInput>;
  isNot?: InputMaybe<AlertWhereInput>;
};

export type AlertRoleMapListRelationFilter = {
  every?: InputMaybe<AlertRoleMapWhereInput>;
  none?: InputMaybe<AlertRoleMapWhereInput>;
  some?: InputMaybe<AlertRoleMapWhereInput>;
};

export type AlertRoleMapWhereInput = {
  AND?: InputMaybe<Array<AlertRoleMapWhereInput>>;
  NOT?: InputMaybe<Array<AlertRoleMapWhereInput>>;
  OR?: InputMaybe<Array<AlertRoleMapWhereInput>>;
  aid?: InputMaybe<IntFilter>;
  alert?: InputMaybe<AlertRelationFilter>;
  rid?: InputMaybe<IntFilter>;
  role?: InputMaybe<RoleRelationFilter>;
};

export type AlertUserMapListRelationFilter = {
  every?: InputMaybe<AlertUserMapWhereInput>;
  none?: InputMaybe<AlertUserMapWhereInput>;
  some?: InputMaybe<AlertUserMapWhereInput>;
};

export type AlertUserMapWhereInput = {
  AND?: InputMaybe<Array<AlertUserMapWhereInput>>;
  NOT?: InputMaybe<Array<AlertUserMapWhereInput>>;
  OR?: InputMaybe<Array<AlertUserMapWhereInput>>;
  aid?: InputMaybe<IntFilter>;
  alert?: InputMaybe<AlertRelationFilter>;
  uid?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type AlertWhereInput = {
  AND?: InputMaybe<Array<AlertWhereInput>>;
  NOT?: InputMaybe<Array<AlertWhereInput>>;
  OR?: InputMaybe<Array<AlertWhereInput>>;
  aid?: InputMaybe<IntFilter>;
  condExpr?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  frequency?: InputMaybe<IntFilter>;
  history?: InputMaybe<AlertHistoryListRelationFilter>;
  message?: InputMaybe<StringFilter>;
  notifications?: InputMaybe<AlertNotificationListRelationFilter>;
  returnExpr?: InputMaybe<StringFilter>;
  roles?: InputMaybe<AlertRoleMapListRelationFilter>;
  schema?: InputMaybe<SchemaRelationFilter>;
  sid?: InputMaybe<IntFilter>;
  users?: InputMaybe<AlertUserMapListRelationFilter>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Column = {
  __typename?: 'Column';
  _count?: Maybe<ColumnCount>;
  cid: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  table: Table;
  tid: Scalars['Int']['output'];
  type: ColumnType;
};

export type ColumnAccessFreq = {
  __typename?: 'ColumnAccessFreq';
  cid: Scalars['Int']['output'];
  column: Column;
  frequency: Scalars['Int']['output'];
};

export type ColumnAccessFreqListRelationFilter = {
  every?: InputMaybe<ColumnAccessFreqWhereInput>;
  none?: InputMaybe<ColumnAccessFreqWhereInput>;
  some?: InputMaybe<ColumnAccessFreqWhereInput>;
};

export type ColumnAccessFreqWhereInput = {
  AND?: InputMaybe<Array<ColumnAccessFreqWhereInput>>;
  NOT?: InputMaybe<Array<ColumnAccessFreqWhereInput>>;
  OR?: InputMaybe<Array<ColumnAccessFreqWhereInput>>;
  cid?: InputMaybe<IntFilter>;
  column?: InputMaybe<ColumnRelationFilter>;
  frequency?: InputMaybe<IntFilter>;
};

export type ColumnCount = {
  __typename?: 'ColumnCount';
  ColumnAccessFreq: Scalars['Int']['output'];
  jobs: Scalars['Int']['output'];
};


export type ColumnCountColumnAccessFreqArgs = {
  where?: InputMaybe<ColumnAccessFreqWhereInput>;
};


export type ColumnCountJobsArgs = {
  where?: InputMaybe<JobColumnAccessWhereInput>;
};

export type ColumnListRelationFilter = {
  every?: InputMaybe<ColumnWhereInput>;
  none?: InputMaybe<ColumnWhereInput>;
  some?: InputMaybe<ColumnWhereInput>;
};

export type ColumnRelationFilter = {
  is?: InputMaybe<ColumnWhereInput>;
  isNot?: InputMaybe<ColumnWhereInput>;
};

export enum ColumnType {
  Bigint = 'BIGINT',
  Boolean = 'BOOLEAN',
  Char = 'CHAR',
  Date = 'DATE',
  Decimal = 'DECIMAL',
  Double = 'DOUBLE',
  Integer = 'INTEGER',
  Numeric = 'NUMERIC',
  Real = 'REAL',
  Serial = 'SERIAL',
  Smallint = 'SMALLINT',
  String = 'STRING',
  Text = 'TEXT',
  Time = 'TIME',
  Timestamp = 'TIMESTAMP',
  Varchar = 'VARCHAR'
}

export type ColumnWhereInput = {
  AND?: InputMaybe<Array<ColumnWhereInput>>;
  ColumnAccessFreq?: InputMaybe<ColumnAccessFreqListRelationFilter>;
  NOT?: InputMaybe<Array<ColumnWhereInput>>;
  OR?: InputMaybe<Array<ColumnWhereInput>>;
  cid?: InputMaybe<IntFilter>;
  jobs?: InputMaybe<JobColumnAccessListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  table?: InputMaybe<TableRelationFilter>;
  tid?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumColumnTypeFilter>;
};

export type CreateProjectInput = {
  dbUrl: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateRoleInput = {
  name: Scalars['String']['input'];
  permissions: Array<Scalars['Int']['input']>;
  pid: Scalars['Float']['input'];
};

export type CreateSchemaColumnInput = {
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateSchemaInput = {
  name: Scalars['String']['input'];
  pid: Scalars['Int']['input'];
  tables: Array<CreateSchemaTableInput>;
};

export type CreateSchemaTableInput = {
  columns: Array<CreateSchemaColumnInput>;
  name: Scalars['String']['input'];
};

export type CreateUserProjectTokenInput = {
  pid: Scalars['Int']['input'];
  uid: Scalars['Int']['input'];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumColumnTypeFilter = {
  equals?: InputMaybe<ColumnType>;
  in?: InputMaybe<Array<ColumnType>>;
  not?: InputMaybe<NestedEnumColumnTypeFilter>;
  notIn?: InputMaybe<Array<ColumnType>>;
};

export type EnumJobTypeFilter = {
  equals?: InputMaybe<JobType>;
  in?: InputMaybe<Array<JobType>>;
  not?: InputMaybe<NestedEnumJobTypeFilter>;
  notIn?: InputMaybe<Array<JobType>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Job = {
  __typename?: 'Job';
  _count?: Maybe<JobCount>;
  error?: Maybe<Scalars['String']['output']>;
  finishedAt?: Maybe<Scalars['DateTime']['output']>;
  issuedAt: Scalars['DateTime']['output'];
  issuedById: Scalars['Int']['output'];
  issuedByUser?: Maybe<User>;
  jid: Scalars['Int']['output'];
  pid: Scalars['Int']['output'];
  project?: Maybe<Project>;
  statement: Scalars['String']['output'];
  type: JobType;
};

export type JobColumnAccessListRelationFilter = {
  every?: InputMaybe<JobColumnAccessWhereInput>;
  none?: InputMaybe<JobColumnAccessWhereInput>;
  some?: InputMaybe<JobColumnAccessWhereInput>;
};

export type JobColumnAccessWhereInput = {
  AND?: InputMaybe<Array<JobColumnAccessWhereInput>>;
  Job?: InputMaybe<JobRelationFilter>;
  NOT?: InputMaybe<Array<JobColumnAccessWhereInput>>;
  OR?: InputMaybe<Array<JobColumnAccessWhereInput>>;
  cid?: InputMaybe<IntFilter>;
  column?: InputMaybe<ColumnRelationFilter>;
  jid?: InputMaybe<IntFilter>;
};

export type JobColumnDetail = {
  __typename?: 'JobColumnDetail';
  cid: Scalars['Int']['output'];
  columnName: Scalars['String']['output'];
  columnType: Scalars['String']['output'];
  schemaName: Scalars['String']['output'];
  tableName: Scalars['String']['output'];
};

export type JobCount = {
  __typename?: 'JobCount';
  columns: Scalars['Int']['output'];
  tables: Scalars['Int']['output'];
};


export type JobCountColumnsArgs = {
  where?: InputMaybe<JobColumnAccessWhereInput>;
};


export type JobCountTablesArgs = {
  where?: InputMaybe<JobTableAccessWhereInput>;
};

export type JobListRelationFilter = {
  every?: InputMaybe<JobWhereInput>;
  none?: InputMaybe<JobWhereInput>;
  some?: InputMaybe<JobWhereInput>;
};

export type JobRelationFilter = {
  is?: InputMaybe<JobWhereInput>;
  isNot?: InputMaybe<JobWhereInput>;
};

export type JobTableAccessListRelationFilter = {
  every?: InputMaybe<JobTableAccessWhereInput>;
  none?: InputMaybe<JobTableAccessWhereInput>;
  some?: InputMaybe<JobTableAccessWhereInput>;
};

export type JobTableAccessWhereInput = {
  AND?: InputMaybe<Array<JobTableAccessWhereInput>>;
  Job?: InputMaybe<JobRelationFilter>;
  NOT?: InputMaybe<Array<JobTableAccessWhereInput>>;
  OR?: InputMaybe<Array<JobTableAccessWhereInput>>;
  jid?: InputMaybe<IntFilter>;
  table?: InputMaybe<TableRelationFilter>;
  tid?: InputMaybe<IntFilter>;
};

export type JobTableDetail = {
  __typename?: 'JobTableDetail';
  schemaName: Scalars['String']['output'];
  tableName: Scalars['String']['output'];
  tid: Scalars['Int']['output'];
};

export enum JobType {
  Delete = 'DELETE',
  Insert = 'INSERT',
  Other = 'OTHER',
  Select = 'SELECT',
  Update = 'UPDATE'
}

export type JobWhereInput = {
  AND?: InputMaybe<Array<JobWhereInput>>;
  NOT?: InputMaybe<Array<JobWhereInput>>;
  OR?: InputMaybe<Array<JobWhereInput>>;
  columns?: InputMaybe<JobColumnAccessListRelationFilter>;
  error?: InputMaybe<StringNullableFilter>;
  finishedAt?: InputMaybe<DateTimeNullableFilter>;
  issuedAt?: InputMaybe<DateTimeFilter>;
  issuedBy?: InputMaybe<UserRelationFilter>;
  issuedById?: InputMaybe<IntFilter>;
  jid?: InputMaybe<IntFilter>;
  pid?: InputMaybe<IntFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  statement?: InputMaybe<StringFilter>;
  tables?: InputMaybe<JobTableAccessListRelationFilter>;
  type?: InputMaybe<EnumJobTypeFilter>;
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginUserOutput = {
  __typename?: 'LoginUserOutput';
  token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addUserToProject: UserProjectToken;
  authenticateOAuthUser: RegisterUserOutput;
  createProject: Project;
  createRole: Role;
  createSchema: Schema;
  createUserProjectToken: UserProjectToken;
  loginUser: LoginUserOutput;
  registerUser: RegisterUserOutput;
};


export type MutationAddUserToProjectArgs = {
  addUserInput: AddUserToProjectInput;
};


export type MutationAuthenticateOAuthUserArgs = {
  user: RegisterUserInput;
};


export type MutationCreateProjectArgs = {
  newProject: CreateProjectInput;
};


export type MutationCreateRoleArgs = {
  newRole: CreateRoleInput;
};


export type MutationCreateSchemaArgs = {
  newSchema: CreateSchemaInput;
};


export type MutationCreateUserProjectTokenArgs = {
  newUserProjectToken: CreateUserProjectTokenInput;
};


export type MutationLoginUserArgs = {
  userCreds: LoginUserInput;
};


export type MutationRegisterUserArgs = {
  newUser: RegisterUserInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumColumnTypeFilter = {
  equals?: InputMaybe<ColumnType>;
  in?: InputMaybe<Array<ColumnType>>;
  not?: InputMaybe<NestedEnumColumnTypeFilter>;
  notIn?: InputMaybe<Array<ColumnType>>;
};

export type NestedEnumJobTypeFilter = {
  equals?: InputMaybe<JobType>;
  in?: InputMaybe<Array<JobType>>;
  not?: InputMaybe<NestedEnumJobTypeFilter>;
  notIn?: InputMaybe<Array<JobType>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Permission = {
  __typename?: 'Permission';
  _count?: Maybe<PermissionCount>;
  name: Scalars['String']['output'];
  pid: Scalars['Int']['output'];
};

export type PermissionCount = {
  __typename?: 'PermissionCount';
  roles: Scalars['Int']['output'];
};


export type PermissionCountRolesArgs = {
  where?: InputMaybe<RolePermissionMapWhereInput>;
};

export type PermissionDetail = {
  __typename?: 'PermissionDetail';
  name: Scalars['String']['output'];
  pid: Scalars['Int']['output'];
};

export type PermissionRelationFilter = {
  is?: InputMaybe<PermissionWhereInput>;
  isNot?: InputMaybe<PermissionWhereInput>;
};

export type PermissionWhereInput = {
  AND?: InputMaybe<Array<PermissionWhereInput>>;
  NOT?: InputMaybe<Array<PermissionWhereInput>>;
  OR?: InputMaybe<Array<PermissionWhereInput>>;
  name?: InputMaybe<StringFilter>;
  pid?: InputMaybe<IntFilter>;
  roles?: InputMaybe<RolePermissionMapListRelationFilter>;
};

export type Project = {
  __typename?: 'Project';
  _count?: Maybe<ProjectCount>;
  createdAt: Scalars['DateTime']['output'];
  createdById: Scalars['Int']['output'];
  dbUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pid: Scalars['Int']['output'];
};

export type ProjectCount = {
  __typename?: 'ProjectCount';
  jobs: Scalars['Int']['output'];
  roles: Scalars['Int']['output'];
  schemas: Scalars['Int']['output'];
  tokens: Scalars['Int']['output'];
};


export type ProjectCountJobsArgs = {
  where?: InputMaybe<JobWhereInput>;
};


export type ProjectCountRolesArgs = {
  where?: InputMaybe<RoleWhereInput>;
};


export type ProjectCountSchemasArgs = {
  where?: InputMaybe<SchemaWhereInput>;
};


export type ProjectCountTokensArgs = {
  where?: InputMaybe<UserProjectTokenWhereInput>;
};

export type ProjectDetail = {
  __typename?: 'ProjectDetail';
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  dbUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pid: Scalars['Int']['output'];
  roles: Array<Role>;
  users: Array<User>;
};

export type ProjectListRelationFilter = {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
};

export type ProjectRelationFilter = {
  is?: InputMaybe<ProjectWhereInput>;
  isNot?: InputMaybe<ProjectWhereInput>;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserRelationFilter>;
  createdById?: InputMaybe<IntFilter>;
  dbUrl?: InputMaybe<StringFilter>;
  jobs?: InputMaybe<JobListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  pid?: InputMaybe<IntFilter>;
  roles?: InputMaybe<RoleListRelationFilter>;
  schemas?: InputMaybe<SchemaListRelationFilter>;
  tokens?: InputMaybe<UserProjectTokenListRelationFilter>;
};

export type Query = {
  __typename?: 'Query';
  allJobs: Array<Job>;
  allPermissions: Array<PermissionDetail>;
  allProjects: Array<ProjectDetail>;
  allRoles: Array<Role>;
  allSchemas: Array<Schema>;
  column: Column;
  columnFrequency: Array<ColumnAccessFreq>;
  columnTypes: Array<Scalars['String']['output']>;
  commonColumnQueries: Array<JobColumnDetail>;
  commonSqlQueries: Array<Job>;
  commonTableQueries: Array<JobTableDetail>;
  commonUserQueries?: Maybe<Array<User>>;
  job: Job;
  jobsByType: Array<Job>;
  latestSchema: Schema;
  project?: Maybe<ProjectDetail>;
  schema: Schema;
  table: Table;
  tableFrequency: Array<TableAccessFreq>;
  tableSnapshots: Array<TableSnapshotOutput>;
  user: User;
  userByEmail: User;
  userByUsername: User;
  userProjectToken: UserProjectToken;
};


export type QueryAllJobsArgs = {
  pid: Scalars['Int']['input'];
};


export type QueryAllRolesArgs = {
  pid: Scalars['Int']['input'];
};


export type QueryColumnArgs = {
  cid: Scalars['Int']['input'];
};


export type QueryCommonColumnQueriesArgs = {
  pid: Scalars['Int']['input'];
};


export type QueryCommonSqlQueriesArgs = {
  pid: Scalars['Int']['input'];
};


export type QueryCommonTableQueriesArgs = {
  pid: Scalars['Int']['input'];
};


export type QueryCommonUserQueriesArgs = {
  uid: Scalars['Int']['input'];
};


export type QueryJobArgs = {
  jid: Scalars['Int']['input'];
  pid: Scalars['Int']['input'];
};


export type QueryJobsByTypeArgs = {
  pid: Scalars['Int']['input'];
  type: Scalars['String']['input'];
};


export type QueryLatestSchemaArgs = {
  pid: Scalars['Int']['input'];
};


export type QueryProjectArgs = {
  pid: Scalars['Int']['input'];
};


export type QuerySchemaArgs = {
  sid: Scalars['Int']['input'];
};


export type QueryTableArgs = {
  tid: Scalars['Int']['input'];
};


export type QueryTableSnapshotsArgs = {
  table: TableSnapshotInput;
};


export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryUserByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type QueryUserProjectTokenArgs = {
  pid: Scalars['Int']['input'];
  uid: Scalars['Int']['input'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type RegisterUserOutput = {
  __typename?: 'RegisterUserOutput';
  token: Scalars['String']['output'];
};

export type Role = {
  __typename?: 'Role';
  _count?: Maybe<RoleCount>;
  name: Scalars['String']['output'];
  permissions: Array<Permission>;
  pid: Scalars['Int']['output'];
  rid: Scalars['Int']['output'];
};

export type RoleCount = {
  __typename?: 'RoleCount';
  alerts: Scalars['Int']['output'];
  permissions: Scalars['Int']['output'];
  users: Scalars['Int']['output'];
};


export type RoleCountAlertsArgs = {
  where?: InputMaybe<AlertRoleMapWhereInput>;
};


export type RoleCountPermissionsArgs = {
  where?: InputMaybe<RolePermissionMapWhereInput>;
};


export type RoleCountUsersArgs = {
  where?: InputMaybe<UserRoleMapWhereInput>;
};

export type RoleListRelationFilter = {
  every?: InputMaybe<RoleWhereInput>;
  none?: InputMaybe<RoleWhereInput>;
  some?: InputMaybe<RoleWhereInput>;
};

export type RolePermissionMapListRelationFilter = {
  every?: InputMaybe<RolePermissionMapWhereInput>;
  none?: InputMaybe<RolePermissionMapWhereInput>;
  some?: InputMaybe<RolePermissionMapWhereInput>;
};

export type RolePermissionMapWhereInput = {
  AND?: InputMaybe<Array<RolePermissionMapWhereInput>>;
  NOT?: InputMaybe<Array<RolePermissionMapWhereInput>>;
  OR?: InputMaybe<Array<RolePermissionMapWhereInput>>;
  permission?: InputMaybe<PermissionRelationFilter>;
  pid?: InputMaybe<IntFilter>;
  rid?: InputMaybe<IntFilter>;
  role?: InputMaybe<RoleRelationFilter>;
};

export type RoleRelationFilter = {
  is?: InputMaybe<RoleWhereInput>;
  isNot?: InputMaybe<RoleWhereInput>;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  alerts?: InputMaybe<AlertRoleMapListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<RolePermissionMapListRelationFilter>;
  pid?: InputMaybe<IntFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  rid?: InputMaybe<IntFilter>;
  users?: InputMaybe<UserRoleMapListRelationFilter>;
};

export type Schema = {
  __typename?: 'Schema';
  _count?: Maybe<SchemaCount>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: User;
  createdById: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  pid: Scalars['Int']['output'];
  sid: Scalars['Int']['output'];
  tables: Array<Table>;
};

export type SchemaCount = {
  __typename?: 'SchemaCount';
  alerts: Scalars['Int']['output'];
  tables: Scalars['Int']['output'];
};


export type SchemaCountAlertsArgs = {
  where?: InputMaybe<AlertWhereInput>;
};


export type SchemaCountTablesArgs = {
  where?: InputMaybe<TableWhereInput>;
};

export type SchemaListRelationFilter = {
  every?: InputMaybe<SchemaWhereInput>;
  none?: InputMaybe<SchemaWhereInput>;
  some?: InputMaybe<SchemaWhereInput>;
};

export type SchemaRelationFilter = {
  is?: InputMaybe<SchemaWhereInput>;
  isNot?: InputMaybe<SchemaWhereInput>;
};

export type SchemaWhereInput = {
  AND?: InputMaybe<Array<SchemaWhereInput>>;
  NOT?: InputMaybe<Array<SchemaWhereInput>>;
  OR?: InputMaybe<Array<SchemaWhereInput>>;
  alerts?: InputMaybe<AlertListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<UserRelationFilter>;
  createdById?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  pid?: InputMaybe<IntFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  sid?: InputMaybe<IntFilter>;
  tables?: InputMaybe<TableListRelationFilter>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Table = {
  __typename?: 'Table';
  _count?: Maybe<TableCount>;
  columns: Array<Column>;
  name: Scalars['String']['output'];
  sid: Scalars['Int']['output'];
  tid: Scalars['Int']['output'];
};

export type TableAccessFreq = {
  __typename?: 'TableAccessFreq';
  frequency: Scalars['Int']['output'];
  table: Table;
  tid: Scalars['Int']['output'];
};

export type TableAccessFreqListRelationFilter = {
  every?: InputMaybe<TableAccessFreqWhereInput>;
  none?: InputMaybe<TableAccessFreqWhereInput>;
  some?: InputMaybe<TableAccessFreqWhereInput>;
};

export type TableAccessFreqWhereInput = {
  AND?: InputMaybe<Array<TableAccessFreqWhereInput>>;
  NOT?: InputMaybe<Array<TableAccessFreqWhereInput>>;
  OR?: InputMaybe<Array<TableAccessFreqWhereInput>>;
  frequency?: InputMaybe<IntFilter>;
  table?: InputMaybe<TableRelationFilter>;
  tid?: InputMaybe<IntFilter>;
};

export type TableCount = {
  __typename?: 'TableCount';
  TableAccessFreq: Scalars['Int']['output'];
  columns: Scalars['Int']['output'];
  jobs: Scalars['Int']['output'];
  snapshots: Scalars['Int']['output'];
};


export type TableCountTableAccessFreqArgs = {
  where?: InputMaybe<TableAccessFreqWhereInput>;
};


export type TableCountColumnsArgs = {
  where?: InputMaybe<ColumnWhereInput>;
};


export type TableCountJobsArgs = {
  where?: InputMaybe<JobTableAccessWhereInput>;
};


export type TableCountSnapshotsArgs = {
  where?: InputMaybe<TableSnapshotWhereInput>;
};

export type TableListRelationFilter = {
  every?: InputMaybe<TableWhereInput>;
  none?: InputMaybe<TableWhereInput>;
  some?: InputMaybe<TableWhereInput>;
};

export type TableRelationFilter = {
  is?: InputMaybe<TableWhereInput>;
  isNot?: InputMaybe<TableWhereInput>;
};

export type TableSnapshotInput = {
  fromTime: Scalars['String']['input'];
  tid: Scalars['Int']['input'];
  toTime: Scalars['String']['input'];
};

export type TableSnapshotListRelationFilter = {
  every?: InputMaybe<TableSnapshotWhereInput>;
  none?: InputMaybe<TableSnapshotWhereInput>;
  some?: InputMaybe<TableSnapshotWhereInput>;
};

export type TableSnapshotOutput = {
  __typename?: 'TableSnapshotOutput';
  atTime: Scalars['DateTime']['output'];
  queryCount: Scalars['Int']['output'];
  rowCount: Scalars['Int']['output'];
  sizeBytes: Scalars['Int']['output'];
};

export type TableSnapshotWhereInput = {
  AND?: InputMaybe<Array<TableSnapshotWhereInput>>;
  NOT?: InputMaybe<Array<TableSnapshotWhereInput>>;
  OR?: InputMaybe<Array<TableSnapshotWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  rowCount?: InputMaybe<IntFilter>;
  sizeBytes?: InputMaybe<IntFilter>;
  table?: InputMaybe<TableRelationFilter>;
  tid?: InputMaybe<IntFilter>;
  tsid?: InputMaybe<IntFilter>;
};

export type TableWhereInput = {
  AND?: InputMaybe<Array<TableWhereInput>>;
  NOT?: InputMaybe<Array<TableWhereInput>>;
  OR?: InputMaybe<Array<TableWhereInput>>;
  TableAccessFreq?: InputMaybe<TableAccessFreqListRelationFilter>;
  columns?: InputMaybe<ColumnListRelationFilter>;
  jobs?: InputMaybe<JobTableAccessListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  schema?: InputMaybe<SchemaRelationFilter>;
  sid?: InputMaybe<IntFilter>;
  snapshots?: InputMaybe<TableSnapshotListRelationFilter>;
  tid?: InputMaybe<IntFilter>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  projects: Array<Project>;
  uid: Scalars['Int']['output'];
  userRoles: Array<Role>;
  username: Scalars['String']['output'];
};


export type UserUserRolesArgs = {
  pid: Scalars['Int']['input'];
};

export type UserCount = {
  __typename?: 'UserCount';
  alerts: Scalars['Int']['output'];
  jobs: Scalars['Int']['output'];
  notifications: Scalars['Int']['output'];
  projects: Scalars['Int']['output'];
  roles: Scalars['Int']['output'];
  schemas: Scalars['Int']['output'];
  tokens: Scalars['Int']['output'];
};


export type UserCountAlertsArgs = {
  where?: InputMaybe<AlertUserMapWhereInput>;
};


export type UserCountJobsArgs = {
  where?: InputMaybe<JobWhereInput>;
};


export type UserCountNotificationsArgs = {
  where?: InputMaybe<AlertNotificationWhereInput>;
};


export type UserCountProjectsArgs = {
  where?: InputMaybe<ProjectWhereInput>;
};


export type UserCountRolesArgs = {
  where?: InputMaybe<UserRoleMapWhereInput>;
};


export type UserCountSchemasArgs = {
  where?: InputMaybe<SchemaWhereInput>;
};


export type UserCountTokensArgs = {
  where?: InputMaybe<UserProjectTokenWhereInput>;
};

export type UserProjectToken = {
  __typename?: 'UserProjectToken';
  pid: Scalars['Int']['output'];
  token: Scalars['String']['output'];
  uid: Scalars['Int']['output'];
};

export type UserProjectTokenListRelationFilter = {
  every?: InputMaybe<UserProjectTokenWhereInput>;
  none?: InputMaybe<UserProjectTokenWhereInput>;
  some?: InputMaybe<UserProjectTokenWhereInput>;
};

export type UserProjectTokenWhereInput = {
  AND?: InputMaybe<Array<UserProjectTokenWhereInput>>;
  NOT?: InputMaybe<Array<UserProjectTokenWhereInput>>;
  OR?: InputMaybe<Array<UserProjectTokenWhereInput>>;
  pid?: InputMaybe<IntFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  token?: InputMaybe<StringFilter>;
  uid?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserRoleMapListRelationFilter = {
  every?: InputMaybe<UserRoleMapWhereInput>;
  none?: InputMaybe<UserRoleMapWhereInput>;
  some?: InputMaybe<UserRoleMapWhereInput>;
};

export type UserRoleMapWhereInput = {
  AND?: InputMaybe<Array<UserRoleMapWhereInput>>;
  NOT?: InputMaybe<Array<UserRoleMapWhereInput>>;
  OR?: InputMaybe<Array<UserRoleMapWhereInput>>;
  rid?: InputMaybe<IntFilter>;
  role?: InputMaybe<RoleRelationFilter>;
  uid?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  alerts?: InputMaybe<AlertUserMapListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  jobs?: InputMaybe<JobListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  notifications?: InputMaybe<AlertNotificationListRelationFilter>;
  password?: InputMaybe<StringFilter>;
  projects?: InputMaybe<ProjectListRelationFilter>;
  roles?: InputMaybe<UserRoleMapListRelationFilter>;
  schemas?: InputMaybe<SchemaListRelationFilter>;
  tokens?: InputMaybe<UserProjectTokenListRelationFilter>;
  uid?: InputMaybe<IntFilter>;
  username?: InputMaybe<StringFilter>;
};

export type CreateProjectMutationVariables = Exact<{
  newProject: CreateProjectInput;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', pid: number, createdById: number } };

export type CreateUserProjectTokenMutationVariables = Exact<{
  newUserProjectToken: CreateUserProjectTokenInput;
}>;


export type CreateUserProjectTokenMutation = { __typename?: 'Mutation', createUserProjectToken: { __typename?: 'UserProjectToken', token: string } };

export type AddUserToProjectMutationVariables = Exact<{
  addUserInput: AddUserToProjectInput;
}>;


export type AddUserToProjectMutation = { __typename?: 'Mutation', addUserToProject: { __typename?: 'UserProjectToken', token: string } };

export type CreateRoleMutationVariables = Exact<{
  newRole: CreateRoleInput;
}>;


export type CreateRoleMutation = { __typename?: 'Mutation', createRole: { __typename?: 'Role', name: string, pid: number, rid: number, permissions: Array<{ __typename?: 'Permission', name: string }> } };

export type AuthenticateOAuthMutationVariables = Exact<{
  user: RegisterUserInput;
}>;


export type AuthenticateOAuthMutation = { __typename?: 'Mutation', authenticateOAuthUser: { __typename?: 'RegisterUserOutput', token: string } };

export type RegisterUserMutationVariables = Exact<{
  newUser: RegisterUserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'RegisterUserOutput', token: string } };

export type LoginUserMutationVariables = Exact<{
  userCreds: LoginUserInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'LoginUserOutput', token: string } };

export type GetUserProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserProjectsQuery = { __typename?: 'Query', allProjects: Array<{ __typename?: 'ProjectDetail', pid: number, name: string, createdAt: any, createdBy: string, dbUrl: string }> };

export type GetProjectDetailsQueryVariables = Exact<{
  pid: Scalars['Int']['input'];
}>;


export type GetProjectDetailsQuery = { __typename?: 'Query', project?: { __typename?: 'ProjectDetail', name: string, createdAt: any, pid: number, dbUrl: string, createdBy: string, users: Array<{ __typename?: 'User', createdAt: any, email: string, name: string, uid: number, username: string, userRoles: Array<{ __typename?: 'Role', name: string, rid: number }> }>, roles: Array<{ __typename?: 'Role', name: string, rid: number, permissions: Array<{ __typename?: 'Permission', name: string, pid: number }> }> } | null };

export type GetPermissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPermissionsQuery = { __typename?: 'Query', allPermissions: Array<{ __typename?: 'PermissionDetail', name: string, pid: number }> };

export type GetProjectRolesQueryVariables = Exact<{
  pid: Scalars['Int']['input'];
}>;


export type GetProjectRolesQuery = { __typename?: 'Query', allRoles: Array<{ __typename?: 'Role', name: string, rid: number, permissions: Array<{ __typename?: 'Permission', name: string, pid: number }> }> };

export type CommonSqlQueriesQueryVariables = Exact<{
  pid: Scalars['Int']['input'];
}>;


export type CommonSqlQueriesQuery = { __typename?: 'Query', commonSqlQueries: Array<{ __typename?: 'Job', jid: number, statement: string, type: JobType, finishedAt?: any | null, issuedAt: any, error?: string | null, project?: { __typename?: 'Project', name: string } | null }> };

export type CommonColumnQueriesQueryVariables = Exact<{
  pid: Scalars['Int']['input'];
}>;


export type CommonColumnQueriesQuery = { __typename?: 'Query', commonColumnQueries: Array<{ __typename?: 'JobColumnDetail', columnName: string, columnType: string, schemaName: string, tableName: string }> };

export type CommonTableQueriesQueryVariables = Exact<{
  pid: Scalars['Int']['input'];
}>;


export type CommonTableQueriesQuery = { __typename?: 'Query', commonTableQueries: Array<{ __typename?: 'JobTableDetail', tid: number, tableName: string, schemaName: string }> };

export type CommonUserQueriesQueryVariables = Exact<{
  pid: Scalars['Int']['input'];
}>;


export type CommonUserQueriesQuery = { __typename?: 'Query', commonUserQueries?: Array<{ __typename?: 'User', uid: number, username: string, name: string, email: string }> | null };

export type TableFrequencyQueryVariables = Exact<{ [key: string]: never; }>;


export type TableFrequencyQuery = { __typename?: 'Query', tableFrequency: Array<{ __typename?: 'TableAccessFreq', frequency: number, table: { __typename?: 'Table', name: string } }> };

export type ColumnFrequencyQueryVariables = Exact<{ [key: string]: never; }>;


export type ColumnFrequencyQuery = { __typename?: 'Query', columnFrequency: Array<{ __typename?: 'ColumnAccessFreq', cid: number, frequency: number, column: { __typename?: 'Column', name: string, table: { __typename?: 'Table', name: string } } }> };

export type GetUserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserProfileQuery = { __typename?: 'Query', user: { __typename?: 'User', name: string, email: string, uid: number, username: string, createdAt: any } };


export const CreateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newProject"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newProject"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newProject"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pid"}},{"kind":"Field","name":{"kind":"Name","value":"createdById"}}]}}]}}]} as unknown as DocumentNode<CreateProjectMutation, CreateProjectMutationVariables>;
export const CreateUserProjectTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserProjectToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newUserProjectToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserProjectTokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserProjectToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newUserProjectToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newUserProjectToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<CreateUserProjectTokenMutation, CreateUserProjectTokenMutationVariables>;
export const AddUserToProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddUserToProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddUserToProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addUserToProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"addUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<AddUserToProjectMutation, AddUserToProjectMutationVariables>;
export const CreateRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newRole"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newRole"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newRole"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pid"}},{"kind":"Field","name":{"kind":"Name","value":"rid"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateRoleMutation, CreateRoleMutationVariables>;
export const AuthenticateOAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AuthenticateOAuth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticateOAuthUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<AuthenticateOAuthMutation, AuthenticateOAuthMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RegisterUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newUser"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"newUser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newUser"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userCreds"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userCreds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userCreds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const GetUserProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allProjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"dbUrl"}}]}}]}}]} as unknown as DocumentNode<GetUserProjectsQuery, GetUserProjectsQueryVariables>;
export const GetProjectDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"pid"}},{"kind":"Field","name":{"kind":"Name","value":"dbUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"userRoles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rid"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pid"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectDetailsQuery, GetProjectDetailsQueryVariables>;
export const GetPermissionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPermissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPermissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pid"}}]}}]}}]} as unknown as DocumentNode<GetPermissionsQuery, GetPermissionsQueryVariables>;
export const GetProjectRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectRoles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allRoles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"rid"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pid"}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectRolesQuery, GetProjectRolesQueryVariables>;
export const CommonSqlQueriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CommonSqlQueries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commonSqlQueries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jid"}},{"kind":"Field","name":{"kind":"Name","value":"statement"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"issuedAt"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]} as unknown as DocumentNode<CommonSqlQueriesQuery, CommonSqlQueriesQueryVariables>;
export const CommonColumnQueriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CommonColumnQueries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commonColumnQueries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columnName"}},{"kind":"Field","name":{"kind":"Name","value":"columnType"}},{"kind":"Field","name":{"kind":"Name","value":"schemaName"}},{"kind":"Field","name":{"kind":"Name","value":"tableName"}}]}}]}}]} as unknown as DocumentNode<CommonColumnQueriesQuery, CommonColumnQueriesQueryVariables>;
export const CommonTableQueriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CommonTableQueries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commonTableQueries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tid"}},{"kind":"Field","name":{"kind":"Name","value":"tableName"}},{"kind":"Field","name":{"kind":"Name","value":"schemaName"}}]}}]}}]} as unknown as DocumentNode<CommonTableQueriesQuery, CommonTableQueriesQueryVariables>;
export const CommonUserQueriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CommonUserQueries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commonUserQueries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<CommonUserQueriesQuery, CommonUserQueriesQueryVariables>;
export const TableFrequencyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TableFrequency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tableFrequency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"table"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}}]}}]}}]} as unknown as DocumentNode<TableFrequencyQuery, TableFrequencyQueryVariables>;
export const ColumnFrequencyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ColumnFrequency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"columnFrequency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cid"}},{"kind":"Field","name":{"kind":"Name","value":"column"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"table"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}}]}}]}}]} as unknown as DocumentNode<ColumnFrequencyQuery, ColumnFrequencyQueryVariables>;
export const GetUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetUserProfileQuery, GetUserProfileQueryVariables>;