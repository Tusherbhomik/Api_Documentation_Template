export interface ApiEndpoint {
  id: string;
  title: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  endpoint: string;
  description: string;
  requestExample: string;
  responseExample: string;
}

export const apiEndpoints: ApiEndpoint[] = [
  {
    id: "get-user",
    title: "Get User Profile",
    method: "GET",
    endpoint: "/api/users/:id",
    description: "Retrieve the profile information of a user by their ID.",
    requestExample: `curl -X GET https://api.example.com/users/123 \\
  -H "Authorization: Bearer <token>"`,
    responseExample: `{
    "id": "123",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2023-10-01T12:00:00Z"
  }`,
  },
  {
    id: "update-user",
    title: "Update User Profile",
    method: "PUT",
    endpoint: "/api/users/:id",
    description: "Update the profile information of a user by their ID.",
    requestExample: `curl -X PUT https://api.example.com/users/123 \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com"
  }'`,
    responseExample: `{
    "id": "123",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "updatedAt": "2023-10-02T12:00:00Z"
  }`,
  },
  {
    id: "delete-user",
    title: "Delete User",
    method: "DELETE",
    endpoint: "/api/users/:id",
    description: "Delete a user by their ID.",
    requestExample: `curl -X DELETE https://api.example.com/users/123 \\
  -H "Authorization: Bearer <token>"`,
    responseExample: `{
    "message": "User deleted successfully"
  }`,
  },
  {
    id: "create-post",
    title: "Create Post",
    method: "POST",
    endpoint: "/api/posts",
    description: "Create a new post for the authenticated user.",
    requestExample: `curl -X POST https://api.example.com/posts \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "content": "Hello, world!",
    "visibility": "public"
  }'`,
    responseExample: `{
    "id": "456",
    "content": "Hello, world!",
    "visibility": "public",
    "createdAt": "2023-10-01T12:05:00Z"
  }`,
  },
  {
    id: "update-post",
    title: "Update Post",
    method: "PUT",
    endpoint: "/api/posts/:id",
    description: "Update an existing post by its ID.",
    requestExample: `curl -X PUT https://api.example.com/posts/456 \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "content": "Updated content",
    "visibility": "private"
  }'`,
    responseExample: `{
    "id": "456",
    "content": "Updated content",
    "visibility": "private",
    "updatedAt": "2023-10-02T12:10:00Z"
  }`,
  },
  {
    id: "delete-post",
    title: "Delete Post",
    method: "DELETE",
    endpoint: "/api/posts/:id",
    description: "Delete a post by its ID.",
    requestExample: `curl -X DELETE https://api.example.com/posts/456 \\
  -H "Authorization: Bearer <token>"`,
    responseExample: `{
    "message": "Post deleted successfully"
  }`,
  },
  {
    id: "create-comment",
    title: "Create Comment",
    method: "POST",
    endpoint: "/api/posts/:postId/comments",
    description: "Add a comment to a post.",
    requestExample: `curl -X POST https://api.example.com/posts/456/comments \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "content": "Great post!"
  }'`,
    responseExample: `{
    "id": "789",
    "content": "Great post!",
    "postId": "456",
    "createdAt": "2023-10-01T12:15:00Z"
  }`,
  },
  {
    id: "get-comments",
    title: "Get Comments",
    method: "GET",
    endpoint: "/api/posts/:postId/comments",
    description: "Retrieve all comments for a post.",
    requestExample: `curl -X GET https://api.example.com/posts/456/comments \\
  -H "Authorization: Bearer <token>"`,
    responseExample: `[
    {
      "id": "789",
      "content": "Great post!",
      "postId": "456",
      "createdAt": "2023-10-01T12:15:00Z"
    }
  ]`,
  },
  {
    id: "login",
    title: "User Login",
    method: "POST",
    endpoint: "/api/auth/login",
    description: "Authenticate a user and receive a token.",
    requestExample: `curl -X POST https://api.example.com/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "john@example.com",
    "password": "securepassword"
  }'`,
    responseExample: `{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }`,
  },
  {
    id: "refresh-token",
    title: "Refresh Token",
    method: "POST",
    endpoint: "/api/auth/refresh",
    description: "Refresh an expired authentication token.",
    requestExample: `curl -X POST https://api.example.com/auth/refresh \\
  -H "Content-Type: application/json" \\
  -d '{
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }'`,
    responseExample: `{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }`,
  },
];
