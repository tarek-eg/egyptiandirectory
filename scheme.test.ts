import assert from "node:assert";
import test from "node:test";
import { directory } from "./src/scheme";

import json from "./src/data/data.json";

test("the scheme is valid", () => {
  assert(directory.parse(json));
});
