var recipes = new Object({});
var playlist = { 'Adele': "Hello"}; 

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({}, playlist, {key: value});
}
