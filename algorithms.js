// 1. LINEAR SEARCH (returns the index of an array item)

const linearSearch = (array, item, equal = defaultEqual) => {
    for (let i = 0; i < array.length; i++) {
        if (equal(array[i], item)) return i;
    }

    return -1;
}

const defaultEqual = (a, b) => a === b;

const deepEqual = (obj1, obj2) => {
    const type1 = typeof(obj1);
    const type2 = typeof(obj2);
    
    if (type1 !== type2) return false;
    if (type1 !== "object") return obj1 === obj2;

    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    
    if (obj1Keys.length !== obj2Keys.length) return false;

    return obj1Keys.every(obj1Key => deepEqual(obj1[obj1Key], obj2[obj1Key]));
}

// 2. BINARY SEARCH (returns the index of an array item)

// 2.1 non-recursive solution

const binarySearch = (array, item) => {
    let start = 0;
    let end = array.length - 1;
    
    while (start <= end) {
        let middle = Math.floor((start + end)/2);
        if (array[middle] === item) {
            return middle;
        } else if (array[middle] < item) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }   
    }

    return -1;
}

// 2.2. recursive solution

const recursiveBinarySearch = (array, item, start, end) => {
    let middleEl = Math.floor((start + end) / 2);

    if (item === array[middleEl]) {
        return middleEl
    } else if (item < array[middleEl]) {
        return recursiveBinarySearch(array, item, start, middleEl - 1)
    } else {
        return recursiveBinarySearch(array, item, middleEl + 1, end)
    }
}



// 3. SELECTION SORT

const selectionSort = array => {
    for (let i = 0; i < array.length; i++) {
        let minInd = i;
        for (let j = i + 1; j < array.length; j++) {  
            if (array[j] < array[minInd]) {
                minInd = j;
            } 
        }
        
        let tmp = array[i];
        array[i] = array[minInd];
        array[minInd] = tmp;
    }   

    return array;
}



// 4. BUBBLE SORT

const bubbleSort = array => {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j];
                array[j] = array[j+1];
                array[j + 1] = tmp;
            }
        }
    } 

    return array;
}


// 5. QUICK SORT

const quickSort = array => {
    if (array.length <= 1) {
        return array
    }

    let middleElIndex = Math.floor(array.length / 2)
    let less = [];
    let greater = [];

    for (let i = 0; i < array.length; i++) {
        if (i === middleElIndex) continue
        if (array[i] < array[middleElIndex]) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }

    return [...quickSort(less), array[middleElIndex],...quickSort(greater)]
}