const removeFromArray = function(array, ...ele) {
    for (let j = 0; j < ele.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === ele[j]) {
                array.splice(i, 1);
            }  
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;