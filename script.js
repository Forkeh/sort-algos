window.addEventListener("load", start);

function start() {
    const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    // console.log(isSorted(arr));
    simpleSort(arr);
}

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        console.log(arr[i], arr[i + 1]);

        if (!(arr[i] <= arr[i + 1])) {
            return false;
        }
    }
    return true;
}

function simpleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        console.log(arr[i], arr[i + 1]);

        const lookAt = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            if (lookAt > arr[j]) {
                swap(i, j);
            }
        }
    }
    console.log(arr);

    return arr;

    function swap(indexA, indexB) {
        console.log("SWAP Index", indexA, indexB);
        console.log("A", arr[indexA]);
        console.log("B", arr[indexB]);

        [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
    }
}
