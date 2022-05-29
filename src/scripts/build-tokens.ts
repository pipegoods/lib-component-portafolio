import { choices, decisions } from "../tokens";
import toKebabCase from "../utils/toKebabCase";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

const cleanLines = (string = "") => string.trim().replace(/^\n\n/gm, "\n");

interface IObjectKeys {
  [key: string]: string | object;
}

function isIObjectKeys(object: object | string): object is IObjectKeys {
  return typeof object === "object";
}

function transformTokens(parentKey: string | null, object: IObjectKeys): string {
  const objectKeys = Object.keys(object);

  return objectKeys.reduce((transformedTokens, objectKey) => {
    const value = object[objectKey];
    const customProperty = parentKey
      ? toKebabCase(`${parentKey}-${objectKey}`)
      : toKebabCase(`${objectKey}`);

    if (Array.isArray(value)) {
      return `${transformedTokens}\n  --${customProperty}: ${value.join(", ")};`;
    } else if (isIObjectKeys(value)) {
      return `${transformedTokens}\n${transformTokens(customProperty, value)}`;
    }

    const label = `--${parentKey}-${toKebabCase(objectKey)}`;
    return `${transformedTokens}\n  ${label}: ${value};`;
  }, "");
}

function buildTokens() {
  const transformedChoices = transformTokens(null, choices);
  const transformedDecisions = transformTokens(null, decisions);
  const customProperties = `${transformedChoices}${transformedDecisions}`;

  const data = `:root {\n  ${cleanLines(customProperties)}\n}\n`;

  fs.writeFile("./src/styles/tokens.css", data, "utf8", (error: Error) => {
    if (error) throw error;
    console.log("🎨 Custom properties created!");
  });
}

buildTokens();
