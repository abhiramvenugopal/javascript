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
    arr[i]=parseInt(readLine())
}
odd=0
even=0
for(let i=0;i<n;i++){
    if(arr[i]%2==0){
        even++
    }
    else{
        odd++
    }
}
console.log(odd)
console.log(even)
