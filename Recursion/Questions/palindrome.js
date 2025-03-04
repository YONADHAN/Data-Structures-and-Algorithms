let word = "malayala"
function palindrome(str){
    if(str===""){
        return ""
    }
    
    let newstr = palindrome(str.slice(1))

    newstr += str.charAt(0);
    return newstr;
}

if(word == palindrome(word)){
    console.log("palindrome")
}else{
    console.log("not ")
}