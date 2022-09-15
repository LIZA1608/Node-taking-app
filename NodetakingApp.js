// let input=document.querySelector('input');
// let add=document.querySelector('button');
// let ul=document.querySelector('ul');

// add.addEventListener('click',()=>{
//     let li =document.createElement('li');
//     li.innerHTML=input.value;
//     ul.appendChild(li);
// })

const inputE=document.getElementById('input');
const buttonE=document.getElementById('button');
const ul=document.getElementById('ul');
buttonE.addEventListener('click',function(){
    const li=document .createElement('li')
    li.innerHTML=inputE.value
ul.appendChild(li)
// li.addEventListener('click',(ele)=>{
//     ele.target.remove();
// })// to remove the li items we added
li.addEventListener('click',function(){
    li.remove();
})// another method to remove th elist item we added 
inputE.value=' '// to erase the text in input field
})

