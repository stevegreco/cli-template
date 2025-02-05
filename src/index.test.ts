import { describe, it, expect } from "vitest";
import { execSync } from "child_process";
import pkg from "../package.json";

const CLI_PATH = "node ./dist/index.js";

describe("CLI Commands", () => {
  it("should display version information", () => {
    const output = execSync(`${CLI_PATH} version`).toString();
    expect(output.trim()).toBe(`${pkg.name} version: ${pkg.version}`);
  });

  it("should greet user", () => {
    const output = execSync(`${CLI_PATH} greet John`).toString();
    expect(output.trim()).toBe("Hello, John!");
  });

  it("should greet user in uppercase", () => {
    const output = execSync(`${CLI_PATH} greet John --uppercase`).toString();
    expect(output.trim()).toBe("HELLO, JOHN!");
  });

  it("should show help information", () => {
    const output = execSync(`${CLI_PATH} --help`).toString();
    expect(output).toContain("Usage:");
    expect(output).toContain("Options:");
    expect(output).toContain("Commands:");
  });
});
