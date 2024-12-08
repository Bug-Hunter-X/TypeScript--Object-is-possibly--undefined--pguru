function printName(name: string | null | undefined): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Name is null or undefined');
  }
}

//Alternative solution using optional chaining
function printName2(name: string | null | undefined): void {
  console.log(name?.toUpperCase() || 'Name is null or undefined');
}

printName(null); // Output: Name is null or undefined
printName('John'); // Output: JOHN
printName(undefined); // Output: Name is null or undefined

printName2(null); // Output: Name is null or undefined
printName2('John'); // Output: JOHN
printName2(undefined); // Output: Name is null or undefined