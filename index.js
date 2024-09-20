const fs = require("fs");
const { Command } = require('commander');
const program = new Command();

program
  .name('count-words')
  .description('CLI to count number of words in file')
  .version('1.0.0');

program.command('count')
  .argument('<file>', 'file to count the number of words in it')
  .action((file) => {
    fs.readFile(file,"utf-8",(err,data) => {
        if(err){
            console.log(err);
            return;
        }
        const words = data.trim().split(/\s+/);
        console.log(`Number of words inside this file is ${words.length}`)
    })
  });

program.parse();