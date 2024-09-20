const fs = require("fs");

function countWords(fileName) {
    fs.readFile(fileName, "utf-8", (err,data) => {
        if (err) {
            return err;
        }
        else {
            const words = data.trim().split(/\s+/);
            console.log(`Number of words is ${words.length}`);
        }
    })
}

countWords(process.argv[2]); //2nd index as the third arg in the user specified comment will be the file name