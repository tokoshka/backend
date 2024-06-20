/* eslint-disable */
export default async () => {
    const t = {
        ["./modules/users/user.schema"]: await import("./modules/users/user.schema")
    };
    return { "@nestjs/swagger": { "models": [[import("./modules/users/dto/create-user.dto"), { "CreateUserDto": { firstname: { required: true, type: () => String }, lastname: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./modules/users/dto/update-user.dto"), { "UpdateUserDto": {} }], [import("./modules/auth/dto/signin.dto"), { "SigninDto": { email: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./modules/auth/dto/signup.dto"), { "SignupDto": { firstname: { required: true, type: () => String }, lastname: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./modules/projects/dto/create-project.dto"), { "CreateProjectDto": { title: { required: true, type: () => String } } }], [import("./modules/sections/dto/create-section.dto"), { "CreateSectionDto": { title: { required: true, type: () => String } } }], [import("./modules/tasks/dto/create-task.dto"), { "CreateTaskDto": {} }], [import("./modules/tasks/dto/update-task.dto"), { "UpdateTaskDto": {} }], [import("./modules/projects/dto/update-project.dto"), { "UpdateProjectDto": {} }], [import("./modules/sections/dto/update-section.dto"), { "UpdateSectionDto": {} }]], "controllers": [[import("./modules/users/users.controller"), { "UsersController": { "findAll": { type: [Object] }, "getMe": { type: t["./modules/users/user.schema"].User }, "findById": { type: Object }, "updateMe": { type: Object }, "update": { type: Object }, "remove": { type: Object } } }], [import("./modules/auth/auth.controller"), { "AuthController": { "signUp": {}, "signIn": {}, "logout": {}, "refreshTokens": {} } }], [import("./modules/projects/projects.controller"), { "ProjectsController": { "create": { type: Object }, "getProjects": {}, "findOne": { type: Object }, "updateUserRights": { type: Object }, "addUserToProject": {}, "removeUserFromProject": {}, "deleteProject": { type: Object } } }], [import("./modules/sections/sections.controller"), { "SectionsController": { "create": { type: Object }, "findAll": { type: String }, "findOne": { type: Object }, "remove": { type: String } } }], [import("./modules/tasks/tasks.controller"), { "TasksController": { "create": { type: String }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: String }, "remove": { type: String } } }]] } };
};