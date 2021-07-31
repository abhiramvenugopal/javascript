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
i=0
j=n-1
while(i<j){
    [arr[i],arr[j]]=[arr[j],arr[i]]
    i++
    j--
}
for(let i=0;i<n;i++){
    console.log(arr[i])
} 