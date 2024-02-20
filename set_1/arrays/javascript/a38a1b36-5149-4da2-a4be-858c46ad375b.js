const arr1 = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]

// Output : [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9]

function fixArray(arr1) {
    const arrayLength = arr1.length;
    var i, j, temp;

    // Iterate over the array
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            // Check is any ar[j]
            // exists such that
            // ar[j] is equal to i
            if (ar[j] == i) {
                temp = ar[j];
                ar[j] = ar[i];
                ar[i] = temp;
                break;
            }
        }
    }

    // Iterate over array
    for (i = 0; i < n; i++) {
        // If not present
        if (ar[i] != i) {
            ar[i] = -1;
        }
    }
    return ar;
}

const resp = fixArray(arr1);
