let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
n=parseInt(readLine())
let arr=[]
for(let i=0;i<n;i++){
    arr.push(parseInt(readLine()))
}
step=parseInt(readLine())
summ=0
for(let j=step-1;j<n;j=j+step){
    summ+=arr[j]
}
console.log(summ)
