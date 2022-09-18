/* 
    Object.freeze() does a shallow freeze, i.e, it only applies to immediate properties of an object.
    This is a function to recursively freeze each property which is of type Object
 */

function deepFreeze(obj) {
    const propNames = Object.getOwnPropertyNames(obj); // unlike Object.keys(), this method returns non-enumerable properties also

    for(const prop of propNames) {
        const value = obj[prop];
        if(value && typeof value === 'object') deepFreeze(value);
    }

    return Object.freeze(obj);
}

const obj = {
    name: 'Narendra',
    age: 23,
    techStack: {
        frontEnd: 'React',
        backEnd: 'Node'
    }
}

const frozenObj = deepFreeze(obj);

frozenObj.techStack.frontEnd = 'Angular';

console.log(obj.techStack.frontEnd); // => React

console.log(frozenObj === obj); // => true