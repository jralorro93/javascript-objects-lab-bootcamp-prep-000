var recipes = new Object({});
var playlist = { 'Adele': "Hello"}; 

function updateObjectWithKeyAndValue(object, key, value) {
  
  return Object.assign ({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

deleteFromObjectByKey(object, key)