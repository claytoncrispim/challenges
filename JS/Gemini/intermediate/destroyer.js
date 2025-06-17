function destroyer(arr, ...valsToDestroy) {
    const filteredArr = []; // New array to store elements we want to keep

    // Loop through each element in the original array 'arr'
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element 'arr[i]' is NOT present in the 'valsToDestroy' array
        if (!valsToDestroy.includes(arr[i])) {
            // If it's not in 'valsToDestroy', then add it to our 'filteredArr'
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr; // Return the new array with falsy values removed
}