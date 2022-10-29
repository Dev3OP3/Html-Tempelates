let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let delBtn = document.querySelector('.delete-list');
let tasks = document.querySelector('.tasks');
let comp = document.querySelector('.item')

// add brn disabled

input.addEventListener('keyup',()=>{
    if(input.value.trim() != 0){
        addBtn.classList.add('active');
        delBtn.classList.add('active');
    }else{
        addBtn.classList.remove('active');
        delBtn.classList.remove('active');
    }
})

delBtn.addEventListener('click',()=>{
    if(input.value.trim()!=0){
        input.value = '';
    }
    else{
        alert("Nothing to Delete")
    }
})

// adding item to list

addBtn.addEventListener('click', ()=>{
    if(input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item')
        newItem.innerHTML = `
        <p>${input.value}</p >`
        let newBtns = document.createElement('div');
        newBtns.classList.add('item-btn');
        newBtns.innerHTML = `
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-xmark"></i>
        `
        tasks.appendChild(newItem);
        tasks.appendChild(newBtns)
        input.value = ''
    }else{
        alert('please enter a task');
    }
})

// mark completed ---optional---

// tasks.addEventListener('click', (e)=>{
//     if(e.target.classList.contains('fa-pen-to-square')
//     ){
//         e.target.parentElement.parentElement.classList.toggle('completed');
//     }
// })
comp.addEventListener('click',(e)=>{
    e.target.classList.toggle('completed')
})