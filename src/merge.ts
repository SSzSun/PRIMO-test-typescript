type Source = "collection_1" | "collection_2" | "collection_3";

interface Candidate {
  value: number;
  source: Source;
}

// Get candidates from three collections based on their indices
function getCandidates(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
  index1: number,
  index2: number,
  index3: number
): Candidate[] {
  const candidates: Candidate[] = [];

    const col_1 = collection_1[index1];
    const col_2 = collection_2[index2];
    const col_3 = collection_3[index3];

    if (index1 < collection_1.length && col_1 !== undefined) {
      candidates.push({ value: col_1, source: "collection_1" });
    }
    if (index2 >= 0 && col_2 !== undefined) {
      candidates.push({ value: col_2, source: "collection_2" });
    }
    if (index3 < collection_3.length && col_3 !== undefined) {
      candidates.push({ value: col_3, source: "collection_3" });
    }

  return candidates;
}

// Merge three sorted collections into one sorted collection
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const mergedCollection: number[] = [];

  let index1 = 0;
  let index2 = collection_2.length - 1;
  let index3 = 0;

  while (index1 < collection_1.length || index2 >= 0 || index3 < collection_3.length) {
    const candidates = getCandidates(collection_1, collection_2, collection_3, index1, index2, index3);

    if (candidates.length === 0) {
      throw new Error("No valid candidates found");
    }

    const minCandidate = Math.min(...candidates.map((c) => c.value));
    const minSource = candidates.find((c) => c.value === minCandidate)?.source;

    if (!minSource) {
      throw new Error("Failed to determine source of minimum value");
    }

    if (minSource === "collection_1") {
      mergedCollection.push(collection_1[index1++]!);
    } else if (minSource === "collection_2") {
      mergedCollection.push(collection_2[index2--]!);
    } else if (minSource === "collection_3") {
      mergedCollection.push(collection_3[index3++]!);
    }

  }
  return mergedCollection;
}
