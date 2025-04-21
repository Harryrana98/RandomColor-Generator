const input=document.querySelector("input")
const btn=document.querySelector("button")
const body=document.querySelector("body")
const allowedValues="0123456789abcdef"


btn.addEventListener("click",function(){
    let RandomColor=RandomValue()
    // let back=color+allowedValues.RandomValue().slice(0,6)
    
    body.style.backgroundColor=RandomColor
    input.value=RandomColor
    // console.log(back);
})
// input.value=""
function RandomValue(){
    let color="#"
    for(let i=0;i<6;i++){

        let Random=Math.floor(Math.random()*allowedValues.length)
        color+=allowedValues[Random]

    }

    return color
// console.log(Random); 

}
