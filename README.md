# TypeScript: Object is possibly 'undefined' Bug

This repository demonstrates a common TypeScript error: "Object is possibly 'undefined'".  This error arises when you attempt to access a property of a variable that might be undefined or null without first checking its value.  The provided code shows the bug and a solution.

## Bug

The `bug.ts` file contains a function that attempts to access the `toUpperCase()` method of a string variable that might be null or undefined.  This results in the TypeScript compiler throwing an error.

## Solution

The `bugSolution.ts` file demonstrates a solution to this problem by using optional chaining (`?.`) to safely access properties.  If the variable is null or undefined, the optional chaining operator returns `undefined` instead of throwing an error.