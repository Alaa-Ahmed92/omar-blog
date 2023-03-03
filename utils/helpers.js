export function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let hash = {};
    for (let i = 0; i < arr1.length; i++) {
        hash[arr1[i]] = true;
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!hash[arr2[i]]) {
            return false;
        }
    }

    return true;
}