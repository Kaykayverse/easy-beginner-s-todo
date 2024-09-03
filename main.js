const todoList = document.querySelector('.todo-list');
const addBtn = document.querySelector('#add-list');
const search = document.querySelector('#search');
const toggle = document.querySelector('.switch');
const first = document.querySelector('.first');
const complete = document.querySelector('.complete');
const check = document.querySelectorAll('#checker');
const pending = document.querySelector('#pending')
const completed = document.querySelector('#completed');

let d = new Date();

document.querySelectorAll('em').forEach((item)=> item.innerText = `${d.getDate()} : 0${d.getMonth()} : ${d.getFullYear()}`)





// addBtn.addEventListener('submit', addItem);
todoList.addEventListener('click', delTodo);
search.addEventListener('keyup', searcher);
toggle.addEventListener('click', toggled);
completed.addEventListener('click', showComplete);
pending.addEventListener('click', showPending);
// check.addEventListener('input', checkBtn);



(()=>{
    addBtn.addEventListener('submit', addItem);
    // check.addEventListener('input', checkBtn);
    check.forEach((item)=> item.addEventListener('input', checkBtn))
    
    
   


    
    
    
    

    
    // console.log(del);

    

    function addItem(e){
        e.preventDefault();
        const todoName = document.querySelector('#add-input').value.toUpperCase();
        const list = document.createElement('li');
        const listText = document.createTextNode(todoName);
        const checks = document.createElement('input');
        const date = document.createElement('em');
        checks.setAttribute('type', 'checkbox');
        checks.id = 'checker';   
        const first = document.createElement('div'); 

        date.className = 'date';
        first.className = 'first';

        checks.addEventListener('input', checkBtn)

        date.appendChild(document.createTextNode(`${d.getDate()} : 0${d.getMonth()} : ${d.getFullYear()}`))
        
        
                                                        

        first.appendChild(listText)
        first.appendChild(checks);
        list.appendChild(first);
        list.appendChild(date);
        
        if(todoName !== ''){
            complete.appendChild(list);
            
        }
        
    }

    function checkBtn(e){
        const del = document.createElement('button');
        const delText = document.createTextNode('x');
        const date = document.createElement('em');
        
        date.className = 'date';
        del.className = 'btn-del';
        del.appendChild(delText);

        if(e.target.checked === true){
            const list = e.target.parentElement;
            const list2 = list.parentElement;
            e.target.replaceWith(del);
            todoList.appendChild(list2);
            // list.forEach((item) => item.replaceChild(e.target, del))
        }else{
            const list = e.target.parentElement;
            const list2 = list.parentElement;
            complete.appendChild(list2)
        }
    }
})()
// function addItem(e){
//     e.preventDefault();
//     const todoName = document.querySelector('#add-input').value.toUpperCase();
//     const list = document.createElement('li');
//     const del = document.createElement('button');
//     const delText = document.createTextNode('x');
//     const listText = document.createTextNode(todoName);
//     const date = document.createElement('em')
//     date.className = 'date';
    
//     date.appendChild(document.createTextNode(`${d.getDate()} : 0${d.getMonth()} : ${d.getFullYear()}`))
//     const first = document.createElement('div')
//     first.className = 'first';
   


//     del.className = 'btn-del';
//     del.appendChild(delText);
//     first.appendChild(listText)
//     list.appendChild(first);
//     list.appendChild(date)
//     first.appendChild(del);
//     // list.insertAdjacentHTML('afterbegin', italic)

//     if(todoName !== ''){
//         todoList.appendChild(list)
//     }
    
// }

function delTodo(e){
    if(e.target.classList.contains('btn-del')){
        const list = e.target.parentElement;
        const list2 = list.parentElement;
        todoList.removeChild(list2)
        
    }
}


function searcher(e){
    const searchValue = e.target.value.toLowerCase();
    const listText = complete.querySelectorAll('li');
    listText.forEach((item) => {
        const itemText = item.textContent.toLocaleLowerCase()
        if(itemText.indexOf(searchValue) != -1){
            item.style.display ='block'
        }else{
            item.style.display = 'none'
        }
    }
    )

}

function toggled(){
    if(document.body.style.backgroundColor != 'white'){
        const roll = document.querySelector('#roll')
        roll.classList.replace('roll', 'roll-left')
        document.body.style.backgroundColor ='white';
        document.body.style.color ='black';
        document.querySelector('.main-content').style.backgroundColor='#e3e3e3';
        document.querySelector('.done').style.backgroundColor='#e3e3e3';
        document.querySelector('.switch').style.backgroundColor='rgb(94, 217, 176)'
        
    }else{
        roll.classList.replace('roll-left', 'roll');
        document.body.style.backgroundColor ='#2a2438';
        document.body.style.color ='white';
        document.querySelector('.main-content').style.backgroundColor='#333';
        document.querySelector('.done').style.backgroundColor='#333';
        document.querySelector('.switch').style.backgroundColor='rgb(235, 122, 70)'


    }


}

// function checkBtn(e){
//     console.log(e.target.checked);
//     if(e.target.checked === true){
//         const list = e.target.parentElement;
//         const list2 = list.parentElement;
//         todoList.appendChild(list2);
//     }else{
//         const list = e.target.parentElement;
//         const list2 = list.parentElement;
//         document.querySelector('.complete').appendChild(list2)
//     }
// }

function showComplete(e){
    if(document.querySelector('.done').style.zIndex != '0'){
        document.querySelector('.done').style.zIndex = '0';
        e.target.classList.add('active');
        pending.classList.replace('active','remove')
        document.querySelector('.main-content').style.display = 'none';
        document.querySelector('.done').style.display = 'block';
        document.querySelector('.done').style.position = 'relative';
        document.querySelector('.main-content').style.zIndex != '-1';
    }
}
function showPending(e){
    if(document.querySelector('.main-content').style.zIndex != '0'){
        document.querySelector('.done').style.zIndex = '-1';
        document.querySelector('.done').style.display = 'none';
        document.querySelector('.main-content').style.zIndex = '1';
        completed.classList.replace('active', 'remove');
        e.target.classList.add('active')
        document.querySelector('.main-content').style.display = 'block';
    }
}