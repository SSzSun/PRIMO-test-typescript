import { expect, test } from "bun:test";
import { merge } from "../src/index";

test("merge with one empty array", () => {
  expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
});

test("merge with all arrays empty", () => {
  expect(merge([], [], [])).toEqual([]);
});

test("merge throws error if all collections exhausted but loop continues", () => {
  expect(() => merge([], [], [])).not.toThrow();
});

test("merge with array 2 empty and others non-empty", () => {
  expect(merge([2, 4], [], [1, 3])).toEqual([1, 2, 3, 4]);
});

test("merge handles descending order in collection_2 correctly", () => {
  expect(merge([1, 2], [5, 4, 3], [])).toEqual([1, 2, 3, 4, 5]);
});

test("merge handles duplicate numbers correctly", () => {
  expect(merge([1, 3], [3, 1], [2, 3])).toEqual([1, 1, 2, 3, 3, 3]);
});

