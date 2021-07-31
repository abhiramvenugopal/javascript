let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
let arr=[]
while(true){
    let item=readLine()
    if (item==42){
        break;
    }
    arr.push(item)
}
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
