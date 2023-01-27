const removeFromArray = function(array, ele1, ele2) {
    for (let i = 0; i < array.length; i++) {
        if ((array[i] === ele1) || (array[i] === ele2)) {
            array.splice(i, 1);
        }        
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
