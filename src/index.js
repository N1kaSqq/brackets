module.exports = function check(str, bracketsConfig) {
  
    class Token {
        constructor(value,key) {
            this.value = value;
            this.key = key;
        }
    }
    
    let keyArr = [];
    let temp;
    for(let i =0; i<bracketsConfig.length; i++){
        for(let j =0; j<bracketsConfig[i].length; j++){
          if(j==0){
            temp = new Token(bracketsConfig[i][j], true);
          } else if(j==1&&bracketsConfig[i][j]=="|"){
            temp = new Token(bracketsConfig[i][j], true);  
          } else {
            temp = new Token(bracketsConfig[i][j], false);
          }
       keyArr.push(temp);  
        
    }
    }
    
    
    let arr = str.split("");
    if(arr.length%2!=0){
        return false;
    }
    let x;
    let y;
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<keyArr.length;j++){
        if(arr[i]==keyArr[j].value){
          x = keyArr[j].value;
          y = keyArr[j].key;
          for(let k=0;k<arr.length;k++){
            if(arr[k]==x && arr[k]!=y){
              arr.splice(k,1);
              arr.splice(i,1);
              i--;
            }
          }
        }
    }
    }
    
    
    if(arr.length==0){
      return true;
    } else return false;
    
    }
