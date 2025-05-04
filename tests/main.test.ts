import { merge } from "../main";

describe("merge()", () => {
  it("merges and sorts three arrays correctly", () => {
    const c1 = [1, 3, 7];
    const c2 = [8, 4, 2]; // descending
    const c3 = [5, 6, 9];

    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("handles empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1], [], [])).toEqual([1]);
    expect(merge([], [2], [])).toEqual([2]);
  });

  it("handles duplicates correctly", () => {
    const c1 = [1, 2];
    const c2 = [3, 2, 1]; // descending
    const c3 = [2, 3];
    expect(merge(c1, c2, c3)).toEqual([1, 1, 2, 2, 2, 3, 3]);
  });
});
