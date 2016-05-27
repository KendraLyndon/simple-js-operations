module.exports = {
  stringToArray: function(str){
    return str.split(' ');
  },
  swapInPlace: function(arr, a, b){
    var temp = arr[a];
    arr.splice(arr[a],1,arr[b]);
    arr.splice(b,1,temp);
    return arr;
  },
  arrayToString: function(arr, char){
    return char ? arr.join(char) : arr.join(' ');
  },
  keys: function(obj){
    return Object.keys(obj);
  }
};
