// returns true if the given 'value' is found in the given 'array'
// check for each attribute of the object
export const isObjectExist = (array, attributes, value) => {
    array.forEach(item => {
        attributes.forEach(attribute => {
            if (item[attribute] === value) {
                return true;
            }
        });
    });
    return false;
}

