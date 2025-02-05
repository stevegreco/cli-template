#!/usr/bin/env node

import { Command } from "commander";
import pkg from "../package.json";

const program = new Command();

// Setup basic program information
program.name(pkg.name).description(pkg.description).version(pkg.version);

// Version command
program
  .command("version")
  .description("Display the CLI version")
  .action(() => {
    console.log(`${pkg.name} version: ${pkg.version}`);
  });

// Example command
program
  .command("greet")
  .description("Greet the user")
  .argument("<name>", "name of the user")
  .option("-u, --uppercase", "convert greeting to uppercase")
  .action((name: string, options: { uppercase?: boolean }) => {
    let message = `Hello, ${name}!`;
    if (options.uppercase) {
      message = message.toUpperCase();
    }
    console.log(message);
  });

// Parse command line arguments
program.parse();
