//list group

let listgroup =document.querySelector(".list")
console.log(listgroup)




//input
let input=document.querySelector(".input")


input.onblur=()=>{
    input.value.target=" "
    input.value=""
}

//button
let button =document.querySelector(".button")


let inputtext;

input.addEventListener("input",(e)=>{
   inputtext=e.target.value

   
})






let listUl =document.createElement("ol").cloneNode(true)
listgroup.appendChild(listUl)

listUl.style.cssText="color:white;"

button.addEventListener("click",()=>{
   console.log(inputtext)
  
   if(inputtext===undefined){
    inputtext=" "
   }
   if(inputtext!==" "){
//div for list and remove button

let divlist=document.createElement("div")
divlist.className="alllist"
listUl.appendChild(divlist)

 divlist.style.cssText="width:100%; display:flex;justify-content:space-between;align-items:center;"


    //list


let list=document.createElement("li")
divlist.appendChild(list)

// list.style.cssText="width:100%; display:flex;justify-content:space-between;     list-style-type: decimal;"

let listtext=document.createTextNode(`${inputtext}`)
list.appendChild(listtext)


let remove=document.createElement("button")
divlist.append(remove)
let removetext=document.createTextNode("Remove")
remove.appendChild(removetext)

remove.className="remove"



remove.addEventListener("click",()=>{
   
    divlist.remove()
})


   } 


   inputtext=" "


   
})









