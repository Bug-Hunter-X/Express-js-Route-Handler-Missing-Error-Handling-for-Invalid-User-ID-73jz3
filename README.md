# Express.js Route Handler Missing Error Handling for Invalid User ID

This repository demonstrates a common error in Express.js route handlers:  missing error handling for invalid input.  Specifically, the `/users/:id` route fails to handle cases where the `id` parameter is not a valid integer.

## Bug Description
The provided code fetches a user based on their ID. However, it lacks error handling for scenarios where the `id` parameter is not a number, resulting in a runtime error when `parseInt()` fails.

## Bug Solution
The solution adds robust error handling to gracefully handle invalid user IDs by checking the type and validity of the `id` parameter before attempting to parse it and access database records.  The code checks if the `id` is a valid number and returns a proper HTTP status code (400) in case of an invalid input.

## How to Run
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the buggy code: `node bug.js`
4. Run the fixed code: `node bugSolution.js`

Observe the difference in behavior between the buggy and fixed versions, paying close attention to error handling and response codes.  This example highlights the importance of robust error handling in production-ready Express.js applications.