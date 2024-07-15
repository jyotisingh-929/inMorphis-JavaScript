function Trim(str)
{
  let result;
  if (typeof str === 'string') 
  {
    result = str.replace(/^\s+|\s+$/g, '');
    return result;
  }
  else
  {
    return false;
  }
}
let testString1 = "   Hello, World!   ";
let testString2 = "\t\tJavaScript is fun!\n\n";
let testString3 = "No extra spaces";

console.log(`"${Trim(testString1)}"`); 
console.log(`"${Trim(testString2)}"`);
console.log(`"${Trim(testString3)}"`); 
