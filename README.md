# Subjektify TypeScript Plugin

## Overview

The Subjektify TypeScript Plugin is designed to streamline your decentralized application development workflow by automating several crucial steps. This plugin is particularly useful for TypeScript-based projects, as it generates TypeScript classes for your smart contracts, compiles the client, and updates the contract addresses upon deployment.

## Features

- **TypeScript Class Generation**: Automatically generates TypeScript classes for your smart contracts.
- **Client Compilation**: Compiles the TypeScript client code.
- **Contract Address Update**: Updates the addresses of deployed contracts in your TypeScript files.

## Installation

Subjektify TypeScript Plugin is a native plugin, You just need to have subjektify installed:

```bash
npm install subjektify
```

## Configuration

Open your `subjektify.json` and modify it as follows:

```json
{
    "namespace": "your-namespace",
    // ... existing configuration
    "plugins": [
        {
            "name": "typescript"
        }
    ],
    // ... existing configuration
};
```

## Usage

Once the plugin is installed and configured, you can run the build command to execute its functionalities:

```bash
subjektify build
```

Upon running this command, the plugin will:

1. Generate TypeScript client for your smart contracts and place them in the `.subjektify/client` directory.
2. Compile the TypeScript client code.
3. Update the contract addresses in your TypeScript files, based on the latest deployment.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

---

Developed with ❤️ by the Subjektify Team.
