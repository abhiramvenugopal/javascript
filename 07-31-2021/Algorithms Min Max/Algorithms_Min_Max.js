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
minn=arr[0]
maxx=arr[0]
for(let i=0;i<n;i++){
    if(arr[i]<minn){
        minn=arr[i]
    }
    if(arr[i]>maxx){
        maxx=arr[i]
    }
}
console.log(maxx)
console.log(minn)