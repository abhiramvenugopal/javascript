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
arr=Array(n).fill(0)
max_dail=parseInt(readLine())
t=parseInt(readLine())
flag=true
for(let i=0;i<t;i++){
    num=parseInt(readLine())
    arr[num-1]+=1
    if (arr[num-1]>=max_dail){
        console.log(num)
        flag=false
        break
    }
}
if(flag){
    console.log(0)
}
