# FurnitureDraw

**FurnitureDraw** is a modern application designed to simplify and accelerate furniture design processes. This project leverages the [Nx](https://nx.dev) monorepo structure to provide a scalable, modular, and optimized development experience.

## 🚀 Getting Started

Follow these steps to get started with the project.

### 1️⃣ Install Yarn Globally

```sh
npm install -g yarn
```

### 2️⃣ Install Dependencies

```sh
yarn install
```

### 3️⃣ Start the Development Server

```sh
yarn nx dev furniture-draw-introduction
```

### 4️⃣ Build for Production

```sh
yarn nx build furniture-draw-introduction
```

### 5️⃣ View Available Targets

To see all available commands for this project:

```sh
yarn nx show project furniture-draw-introduction
```

## 📦 Add New Projects and Modules

**Nx** provides powerful code generation tools to scale your project. You can create new applications or libraries.

To create a new application:

```sh
yarn nx g @nx/next:app demo
```

To create a new library:

```sh
yarn nx g @nx/react:lib mylib
```

To list installed plugins:

```sh
yarn nx list
```

For more details, refer to the [Nx Plugins](https://nx.dev/concepts/nx-plugins) documentation.

## 🔗 Continuous Integration (CI) Setup

Connect to Nx Cloud to integrate your project with CI/CD processes.

1. **Connect to Nx Cloud:**

   ```sh
   yarn nx connect
   ```

2. **Generate a CI Workflow:**

   ```sh
   yarn nx g ci-workflow
   ```

For more details: [Nx Cloud and CI Integration](https://nx.dev/ci/intro/ci-with-nx)

## 🛠 Enhance Development with Nx Console

[Nx Console](https://nx.dev/getting-started/editor-setup) is an IDE extension that improves your development experience. It is available for VSCode and IntelliJ.

## 📚 Resources and Community

Learn more:

- [Nx Documentation](https://nx.dev/nx-api/next)
- [Nx Blog](https://nx.dev/blog)
- [Nx Discord](https://go.nx.dev/community)
- [Twitter/X](https://twitter.com/nxdevtools)
- [LinkedIn](https://www.linkedin.com/company/nrwl)
- [YouTube Channel](https://www.youtube.com/@nxdevtools)

Start your development journey with FurnitureDraw and optimize modern furniture design processes! 🚀

