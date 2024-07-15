function contains_element(arr, element) {
    let newArr = [];
   for(let i=0; i<arr.length; i++){
    if(arr[i] == element){
        return true;
    }
   }
   return false;
}
console.log(contains_element([2, 5, 9, 6], 5)); 
console.log(contains_element([2, 5, 9, 6], 7)); 