var recipes = new Object({});
var playlist = { 'Adele': "Hello"}; 

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {prop: 1};
  
  return Object.assign ({}, playlist, {key: value});
}
