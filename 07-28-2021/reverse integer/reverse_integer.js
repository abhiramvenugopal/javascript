let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

let strin=readLine()
S=(Math.abs(parseInt(strin))).toString()
let s=""
for(let i=0;i<S.length;i++){
  s=S[i]+s

}
if (parseInt(strin)<0){
  console.log(parseInt(s)*-1)
}
else{
  console.log(parseInt(s))
}