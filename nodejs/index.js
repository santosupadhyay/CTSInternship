//blocking code
const fs = require('fs');

const data = fs.readFileSync('natureofnodejs.txt', 'utf8');
console.log(data)

console.log('This will run after the file is read')


fs.readFile('natureofnodejs.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log('This will run BEFORE file is read.');




const content = 'Hello, this is written asynchronously! This line came from writing the file from the code';

fs.writeFile('file.txt', content, (err) => {
  if (err) {
    console.log('Error writing file:', err);
    return;
  }
  console.log('File written successfully.');
});
