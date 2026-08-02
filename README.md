Role-Based Access Control (RBAC)

Aim: To implement Role-Based Access Control (RBAC) and secure application routes based on user permissions.

Core Concepts: While authentication verifies a user's identity, authorization determines what resources and actions that user is allowed to access. This experiment defines predefined roles (such as Admin, Editor, and Viewer) to restrict access to protected resources.

Security Mechanisms: Uses React Router to create protected routes and redirect unauthorized users away from sensitive pages. It uses Context API or Redux to manage the authentication state and dynamically renders UI elements (like buttons and menus) according to the user's specific permissions.

Tech Stack: Node.js, React.js, React Router, Context API / Redux, Vite, JavaScript, HTML5, and CSS3.