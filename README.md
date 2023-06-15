# Analog App

This simple project showcases  NBA team components created using Analog.js, a full stack meta-framework for Angular.

Analog.js is a powerful metaframework that enables developers to build applications using Angular, a popular JavaScript framework. It provides additional features and abstractions to enhance the development process and improve productivity. One of the key features of Analog.js is its support for file-based routing with .page.ts routes.

In traditional Angular applications, routing is typically configured using a dedicated routing module where developers define the routes and their corresponding components. However, Analog.js takes a different approach by allowing developers to define routes using individual files with a .page.ts extension.

With .page.ts routes, developers can create separate files for each route in their application. Each file represents a specific page or view and contains the necessary code and configuration for that particular route. This approach offers several advantages.

Firstly, file-based routing simplifies the organization and management of routes in large-scale applications. Instead of having all the route configurations in a single routing module, developers can distribute them across multiple files, making it easier to locate and modify specific routes.

Secondly, this approach promotes modularity and reusability. Each .page.ts file can encapsulate all the logic and components required for a specific page or view. This allows developers to easily reuse or share these files across different projects or even within the same project.

Additionally, the use of .page.ts routes in Analog.js enables better collaboration among team members. Since each route is defined in its own file, multiple developers can work simultaneously on different routes without conflicts. It also facilitates code reviews and reduces the likelihood of merge conflicts when changes are made to the routing configuration.

Overall, Analog.js with its support for file-based routing using .page.ts routes offers developers a more flexible and organized approach to managing routes in Angular applications. By leveraging this metaframework, developers can enhance their productivity and build robust applications with ease, as demonstrated in the simple project showcasing NBA team components.

This project was generated with [Analog](https://analogjs.org), the fullstack meta-framework for Angular.

## Setup

Run `npm install` to install the application dependencies.

## Development

Run `npm start` for a dev server. Navigate to `http://localhost:5173/`. The application automatically reloads if you change any of the source files.

## Build

Run `npm run build` to build the client/server project. The client build artifacts are located in the `dist/analog/public` directory. The server for the API build artifacts are located in the `dist/analog/server` directory.

## Test

Run `npm run test` to run unit tests with [Vitest](https://vitest.dev).

## Community

- Visit and Star the [GitHub Repo](https://github.com/analogjs/analog)
- Join the [Discord](https://chat.analogjs.org)
- Follow us on [Twitter](https://twitter.com/analogjs)
- Become a [Sponsor](https://github.com/sponsors/brandonroberts)
