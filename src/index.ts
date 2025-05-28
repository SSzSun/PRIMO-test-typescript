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
        const candidates: { value: number; source: 'collection_1' | 'collection_2' | 'collection_3' }[] = [];
        if (index1 < collection_1.length) {
            candidates.push({value: collection_1[index1], source: 'collection_1' });
        }
        if (index2 >= 0) {
            candidates.push({value: collection_2[index2], source: 'collection_2' });
        }
        if (index3 < collection_3.length) {
            candidates.push({value: collection_3[index3], source: 'collection_3' });
        }

    }
    return mergedCollection;
}
