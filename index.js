// Write your solution in this file!
const employee = {
    name: "Andy Hall",
    streetAddress: "123 Main Street"
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const updatedEmployeeInfo = {...obj}
    updatedEmployeeInfo[key] = value;
    return updatedEmployeeInfo;
// I originally tried updatedEmployeeInfo.key = value, but that 
// was giving me an error.... not sure why
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    const updatedEmployeeInfo = {...obj};
    delete updatedEmployeeInfo[key];
    return updatedEmployeeInfo;
// I originally tried delete updatedEmployeeInfo.key, but that 
// was giving me an error.... not sure why
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}