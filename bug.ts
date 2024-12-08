function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Name is null');
  }
}

printName(null); // Output: Name is null
printName('John'); // Output: JOHN
printName(undefined); // Error: Object is possibly 'undefined'.