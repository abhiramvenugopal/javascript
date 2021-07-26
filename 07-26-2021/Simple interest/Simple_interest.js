let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

p=parseInt(readLine())
t=parseInt(readLine())
r=parseInt(readLine())

console.log((p*t*r)/100)