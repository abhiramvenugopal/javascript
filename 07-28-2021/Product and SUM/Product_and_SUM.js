let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

N=readLine()
summ=0
prod=1
for(i=0;i<N.length;i++){
    summ+=parseInt(N[i])
    prod*=parseInt(N[i])
}
console.log(parseInt(prod)-parseInt(summ))