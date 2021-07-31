let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

let n=readLine()
let flag=true
for(let i=0,j=n.length-1;i<j && flag;i++,j--){
    if (n[i]!=n[j]){
        console.log("False")
        flag=false
    }
}
if(flag){
    console.log("True")
}