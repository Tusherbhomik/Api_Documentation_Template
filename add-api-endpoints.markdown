# Instructions for Adding New API Endpoints to the API Documentation Website

This guide explains how to add new API endpoints to your API documentation website, which uses static data in `src/lib/api-data.ts`. Follow these steps to update the endpoint list and ensure the new endpoints appear in the Sidebar and endpoint pages. These instructions assume you’re familiar with basic code editing and running a Next.js project.

## Prerequisites

- **Project Folder**: Ensure you have the project folder containing `src/lib/api-data.ts`, `src/components/Sidebar.tsx`, and other files.
- **Code Editor**: Use a code editor like VS Code, IntelliJ, or any text editor.
- **Node.js**: Ensure Node.js is installed (version 18 or later recommended).
- **Dependencies**: The project should have `next`, `shadcn-ui`, `lucide-react`, `framer-motion`, and `react-syntax-highlighter` installed. If you encounter issues, run `npm install` in the project folder.

## Step-by-Step Instructions

### Step 1: Open the `api-data.ts` File

1. **Locate the File**:

   - Navigate to `src/lib/api-data.ts` in your project folder using your code editor.

2. **Understand the Structure**:

   - The file contains an `ApiEndpoint` interface and an `apiEndpoints` array:

     ```typescript
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
       // Existing endpoints
     ];
     ```

   - Each endpoint has fields like `id`, `title`, `method`, etc. The `id` must be unique, and `method` must be one of `GET`, `POST`, `PUT`, or `DELETE`.

### Step 2: Add a New Endpoint

1. **Edit** `apiEndpoints` **Array**:

   - Scroll to the `apiEndpoints` array in `src/lib/api-data.ts`.

   - Add a new endpoint object at the end of the array (before the closing `];`).

   - Use the following template, filling in the details for your new endpoint:

     ```typescript
     {
       id: "your-unique-id",
       title: "Your Endpoint Title",
       method: "GET", // or "POST", "PUT", "DELETE"
       endpoint: "/api/your/path",
       description: "Description of what this endpoint does.",
       requestExample: `curl -X METHOD https://api.example.com/your/path \\
     ```

\-H "Authorization: Bearer " \\ -H "Content-Type: application/json" \\ -d '{ "key": "value" }'`, responseExample: `{ "key": "value" }\`, }, \`\`\`

- **Example**: To add a "Get All Users" endpoint:

  ```typescript
  {
    id: "get-all-users",
    title: "Get All Users",
    method: "GET",
    endpoint: "/api/users",
    description: "Retrieve a list of all users.",
    requestExample: `curl -X GET https://api.example.com/users \\
  ```

\-H "Authorization: Bearer "`, responseExample: `\[ { "id": "123", "name": "John Doe", "email": "john@example.com" }, { "id": "124", "name": "Jane Doe", "email": "jane@example.com" } \]\`, }, \`\`\`

- **Tips**:
  - Ensure `id` is unique (e.g., `get-all-users`, not `get-user` if it exists).
  - Use backticks (\`) for `requestExample` and `responseExample` to preserve formatting.
  - Match the `method` to the HTTP method (GET, POST, PUT, DELETE).
  - Use realistic paths and examples that align with your Spring Boot backend.

2. **Save the File**:
   - Save `src/lib/api-data.ts` after adding the new endpoint(s).

### Step 3: Update the Sidebar Categories (if Needed)

1. **Open** `Sidebar.tsx`:

   - Navigate to `src/components/Sidebar.tsx` in your code editor.

2. **Check the** `endpointGroups` **Array**:

   - The Sidebar groups endpoints into categories (e.g., User, Post, Comment, Authentication) using the `endpointGroups` array:

     ```typescript
     const endpointGroups: EndpointGroup[] = [
       {
         category: "User",
         icon: Users,
         endpoints: apiEndpoints.filter((e) => e.id.includes("user")),
       },
       {
         category: "Post",
         icon: FileText,
         endpoints: apiEndpoints.filter((e) => e.id.includes("post")),
       },
       {
         category: "Comment",
         icon: MessageSquare,
         endpoints: apiEndpoints.filter((e) => e.id.includes("comment")),
       },
       {
         category: "Authentication",
         icon: Lock,
         endpoints: apiEndpoints.filter((e) => e.id.includes("auth")),
       },
     ];
     ```

   - Each category filters endpoints based on their `id` (e.g., `user` for User-related endpoints).

3. **Add the New Endpoint to an Existing Category**:

   - If your new endpoint fits an existing category, ensure its `id` contains the appropriate keyword:
     - For User: Include `user` in the `id` (e.g., `get-all-users`).
     - For Post: Include `post` (e.g., `get-post`).
     - For Comment: Include `comment` (e.g., `delete-comment`).
     - For Authentication: Include `auth` (e.g., `logout-auth`).
   - Example: The `get-all-users` endpoint above has `user` in its `id`, so it will automatically appear under the "User" category.

4. **Create a New Category (if Needed)**:

   - If the new endpoint doesn’t fit existing categories (e.g., for a "Settings" endpoint with `id: "update-settings"`), add a new category to `endpointGroups`.

   - **Steps**:

     - Add a new import for an icon from `lucide-react` at the top of `Sidebar.tsx`:

       ```typescript
       import { Search, Users, FileText, MessageSquare, Lock, Book, Settings } from "lucide-react";
       ```

     - Add a new category to `endpointGroups`:

       ```typescript
       {
         category: "Settings",
         icon: Settings,
         endpoints: apiEndpoints.filter((e) => e.id.includes("settings")),
       },
       ```

     - Ensure the new endpoint’s `id` includes the keyword (e.g., `settings` for `update-settings`).

   - **Example**: For a "Update Settings" endpoint:

     - In `api-data.ts`:

       ```typescript
       {
         id: "update-settings",
         title: "Update Settings",
         method: "PUT",
         endpoint: "/api/settings",
         description: "Update user settings.",
         requestExample: `curl -X PUT https://api.example.com/settings \\
       ```

\-H "Authorization: Bearer " \\ -H "Content-Type: application/json" \\ -d '{ "theme": "light" }'`, responseExample: `{ "message": "Settings updated successfully" }```` , }, ``` - In  ````Sidebar.tsx`, add to `endpointGroups\` as shown above.

5. **Save the File**:
   - Save `src/components/Sidebar.tsx` after updating `endpointGroups`.

### Step 4: Run the Application

1. **Start the Development Server**:

   - Open a terminal in the project folder.

   - Run:

     ```bash
     npm run dev
     ```

   - This starts the Next.js server, typically at `http://localhost:3000`.

2. **Verify the New Endpoint**:

   - Open your browser and go to `http://localhost:3000`.
   - **Check the Sidebar**:
     - Look for the new endpoint under its category (e.g., "Get All Users" under "User").
     - Use the search bar (type part of the title or description, e.g., "users") to ensure the endpoint appears.
     - Check that the HTTP method (e.g., GET) has the correct color (green for GET, blue for POST, yellow for PUT, red for DELETE).
   - **Check the API Reference Page**:
     - Go to `http://localhost:3000/api`.
     - Ensure the new endpoint appears in the list (e.g., "Get All Users" with GET and `/api/users`).
   - **Check the Endpoint Page**:
     - Click the new endpoint in the Sidebar or navigate to its URL (e.g., `http://localhost:3000/api/get-all-users`).
     - Verify that the title, method (in a colored badge), endpoint path, description, request example, and response example display correctly.

### Step 5: Troubleshoot Issues

If something doesn’t work, try these fixes:

- **Endpoint Not in Sidebar**:

  - Check that the `id` in `api-data.ts` contains the correct keyword (e.g., `user` for User category).
  - Ensure `Sidebar.tsx` has the right category filter in `endpointGroups`.
  - Example: If `id: "get-users"` doesn’t appear under User, change it to `id: "get-all-users"` or update the filter to `e.id.includes("users")`.

- **Page Not Found**:

  - Verify the `id` in the URL matches exactly (e.g., `/api/get-all-users` for `id: "get-all-users"`).
  - Check for typos in `api-data.ts`.

- **Colors Wrong**:

  - Ensure the `method` is one of `GET`, `POST`, `PUT`, or `DELETE` (uppercase) in `api-data.ts`.

  - Check `Sidebar.tsx` and `api/[endpoint]/page.tsx` for consistent `methodColors` mapping:

    ```typescript
    const methodColors: Record<string, string> = {
      GET: "bg-green-500",
      POST: "bg-blue-500",
      PUT: "bg-yellow-500",
      DELETE: "bg-red-500",
    };
    ```

- **Server Not Starting**:

  - Run `npm install` to ensure dependencies are installed.
  - Check for errors in the terminal and fix any missing packages.

- **Code Formatting Issues**:

  - Ensure `requestExample` and `responseExample` use backticks (\`) and proper JSON formatting.
  - Example: Use `{\n "key": "value"\n}` for multiline JSON.

### Step 6: Repeat for Additional Endpoints

- To add more endpoints, repeat Steps 2–4 for each new endpoint.
- Add multiple endpoints to `api-data.ts` in one go if needed.
- Create new categories in `Sidebar.tsx` for unrelated endpoints (e.g., "Analytics" for `id: "get-analytics"`).

### Step 7: Deploy (Optional)

If you want to update the live website:

1. **Commit Changes**:

   - If using Git, commit your changes:

     ```bash
     git add .
     git commit -m "Added new API endpoints"
     ```

2. **Deploy to Vercel** (or your hosting platform):

   - Run:

     ```bash
     vercel
     ```

   - Follow the prompts to deploy.

   - Check the deployed URL to ensure the new endpoints appear.

## Example Workflow

Suppose you want to add a "Get Post by ID" endpoint:

1. **Edit** `api-data.ts`:

   - Add to `apiEndpoints`:

     ```typescript
     {
       id: "get-post",
       title: "Get Post by ID",
       method: "GET",
       endpoint: "/api/posts/:id",
       description: "Retrieve a post by its ID.",
       requestExample: `curl -X GET https://api.example.com/posts/456 \\
     ```

\-H "Authorization: Bearer "`, responseExample: `{ "id": "456", "content": "Hello, world!", "visibility": "public", "createdAt": "2023-10-01T12:05:00Z" }\`, }, \`\`\` 2. **Check Sidebar**:

- The `id: "get-post"` contains "post", so it will appear under the "Post" category automatically.

3. **Run and Test**:
   - Run `npm run dev`.
   - Go to `http://localhost:3000/api/get-post` and verify the endpoint details.
   - Check the Sidebar and API Reference page for "Get Post by ID".

## Notes

- **Backup**: Save a copy of `api-data.ts` before editing to avoid losing data.
- **Consistency**: Use similar formatting for `requestExample` and `responseExample` as existing endpoints.
- **Spring Boot Backend**: These changes only update the documentation. Ensure your Spring Boot backend implements the new endpoints (e.g., `/api/users`) if they’re meant to be functional.
- **Help**: If you get stuck, consult the project’s README (if available) or search online for Next.js or Shadcn UI documentation. You can also revisit the original setup instructions or contact the developer who set this up.

Last Updated: April 17, 2025