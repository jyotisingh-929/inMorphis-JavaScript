function remove_array_element(arr, element) {
    let newArr = [];
   for(let i=0; i<arr.length; i++){
    if(arr[i] !== element){
        newArr.push(arr[i]);
    }
   }
   return newArr;
}
console.log(remove_array_element([2, 5, 9, 6], 5)); // Output: [2, 9, 6]
