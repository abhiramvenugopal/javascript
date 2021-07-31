const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

S=readLine()
if (S.length==0){
    console.log(0)
}
else{
    let maxx=0
    let prev=S[0]
    let count=0
    for(let i=1;i<S.length;i++){
        if (prev==S[i]){
            count+=1
        }
        else{
            if (count>maxx){
                maxx=count
            }
            prev=S[i]
            count=1
        }
    }
    console.log(maxx)
}

