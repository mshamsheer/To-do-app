let btn=document.querySelector('button');
let input=document.querySelector('input');
let ul=document.querySelector('ul');

btn.addEventListener('click',function(){

    if (input.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    let item=document.createElement('li');
    item.innerText=input.value;
    
    let del=document.createElement('button');
    del.innerText='Delete';
    del.classList.add('Delete')
    item.appendChild(del)

    ul.appendChild(item);
    input.value='';
   
});
 ul.addEventListener('click',function(event){
    if(event.target.nodeName=='BUTTON'){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log('deleted')
    }
})