// Iterative binary search
const iterative_binary_search = (array, total, target) => {
    // Initial index is 0, last index is total count - 1
    let low = 0, high = total - 1;

    // Loop until search space exhausted.
    while (low <= high) {
        let mid = parseInt((low + high) / 2);

        if (target == array[mid]) { // Target is found, return the mid value.
            return mid;
        } else if (target < array[mid]) { // Target is in the left subarray.
            high = mid - 1;
        } else { // Target is in the right subarray.
            low = mid + 1;
        }
    }

    return -1; // Target is not found.
}

// Recursive binary search
let recursive_binary_search = (array, low, high, target) => {
    // Loop until search space exhausted.
    if (low > high) {
        return -1;
    }

    let mid = parseInt((low + high) / 2);

    if (target == array[mid]) { // Target is found, return the mid value.
        return mid;
    } else if (target < array[mid]) { // Target is in the left subarray.
        return recursive_binary_search(array, low, mid - 1, target);
    } else { // Target is in the right subarray.
        return recursive_binary_search(array, mid + 1, high, target);
    }
}

let array = [2, 5, 7, 9, 12, 17], target = 9, total = array.length, low = 0, high = total - 1;
// let target_index = iterative_binary_search(array, total, target);
let target_index = recursive_binary_search(array, low, high, target);

if (target_index != -1) {
    console.log("Target was found in the index - ", target_index);
} else {
    console.log("Target was not found");
}