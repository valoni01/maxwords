function solution(S) {
    let sent = S.split(/[.?!]+/);
    let sentLength = [];
    
    for(let a =0; a < sent.length; a ++){
        let holder = sent[a].split(" ");
        for(let b = 0; b < holder.length; b++){
            if(!holder[b].match(/^[A-Za-z]+$/)){
              holder.splice(b,1);
            }
        }
         sentLength.push(holder.length)
    }
    
    //return the the highest number 
    return Math.max(...sentLength)
}

