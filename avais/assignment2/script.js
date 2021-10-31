function findWord(){
    const sentence=document.getElementById('sentence').value
    const letter=document.getElementById('letter').value
    let result=document.getElementById('result')
    if(sentence===''){
        alert('Please Enter Word')
    }
    else if(letter===''){
        alert('Please Enter letter')
    }
    else{
        if(sentence.includes(letter)){
            // alert('letter found')
            result.innerHTML=sentence.substring((sentence.indexOf(letter)+1))
        }
        else{
            result.innerHTML='Letter Not found'
            // alert('Letter not found')
        }
    }
    // console.log(sentence)
}