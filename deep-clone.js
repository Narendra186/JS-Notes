const obj = {
    name: 'Narendra',
    age: 23,
    date: new Date(),
    techStack: {
        frontEnd: 'React',
        backEnd: 'Node'
    }
}

const arr = [
    1,
    2,
    obj
]

function deepClone(obj) {
    var clonedObj;
    const toString = Object.prototype.toString;
    switch(typeof obj) {
        case 'object':
            switch(toString(obj)) {
                case '[object Array]':
                    // Array => create a new array with deep copies
                    clonedObj = obj.map(deepClone);
                    break;
                case '[object Date]':
                    // Date => copy via assignment
                    clonedObj = new Date(obj);
                    break;
                case '[object RegExp]':
                    // Regular expression =>  copy via assignment
                    clonedObj = new RegExp(obj);
                    break;
                default:
                    // object => deep copy it's properties into a new array
                    clonedObj = Object.getOwnPropertyNames(obj).reduce((acc,currKey) => {
                        acc[currKey] = deepClone(obj[currKey]);
                        return acc;
                    },{});
                    break;
            }
            break;
        default:
            // primitive data type => copy via assignment
            clonedObj = obj;
            break;
    }
    return clonedObj;
}

const newObj = deepClone(arr)

newObj[2].techStack.frontEnd = 'Angular'
newObj[0] = 3;

console.log(arr[2].techStack.frontEnd); // => React
console.log(arr[0]); // => 1