import { sum } from "./sum.ts";
import { assertEquals } from "../../deps.ts";

Deno.test("[sum]", () => {
  const result = sum(1, 10, 23, 46);

  assertEquals(result, 80);
});
