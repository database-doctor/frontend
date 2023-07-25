# Role Based Access Control (RBAC)

The necessary seed for RBAC can be found at `insert-file-here`

## Permissions

| pid | Name                         | Description                                                            |
| --- | ---------------------------- | ---------------------------------------------------------------------- |
| 1   | admin:manage_users           | Add user to project, remove user from project, add & remove user roles |
| 2   | admin:create_service_account | Grants ability to create service accounts                              |
| 3   | analytics:view               | View project-level analytics                                           |
| 4   | settings:view                | View Project Settings                                                  |
| 5   | settings:edit                | Edit Project Settings                                                  |

## Default Roles

| rid | Name    | Permissions                                                                                       |
| --- | ------- | ------------------------------------------------------------------------------------------------- |
| 1   | Admin   | admin:manage_users <br /> admin:create_service_accounts <br /> settings:view <br /> settings:edit |
| 2   | Analyst | analytics:view                                                                                    |
