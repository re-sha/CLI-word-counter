# CLI Word-counter

This is a command line interface that lets a user specify a file path to get the number of words inside it. It uses the `commander` library for parsing command-line arguments.

## Prerequisites
- Node.js (version 14 or higher)
- npm (version 6 or higher)

## Installation
1. Clone this repo

2. Navigate to the project directory:
   ```bash
   cd word-counter-cli
   ```
3. Install dependencies:
   ```bash
   npm install 
   ```

## Usage
To use the word counter CLI, run the following command in your terminal:

```bash
npm start <file-path>
```

Replace `<file-path>` with the actual path to the file you want to count the words in.

For example:

```bash
npm start /Users/abc/dev/cli/a.txt
```

This will output the number of words in the specified file:

```
Number of words inside this file is 25
```

## Scripts
**start**: Runs the application using the command:
  ```bash
  node index.js
  ```

