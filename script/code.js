/*let input = document.getElementById('userinput')
let display = document.getElementById('results')

function adding(){
    if(input.value === ''){
        alert('type something down!')
    }
    else if(input.value.length < 3){
        alert('Enter more characters')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value
        display.append(li)
    
    }
    input.value = "";
}*/

let button = document.getElementById('addtodo');
let showlist = document.getElementById('display');
let userinput = document.getElementById('inputfield');

button.addEventListener('click', function(){


    if(userinput.value === ''){
        alert('type something!')
    }
    else if(userinput.value.length < 3){
        alert('enter more characters')
    }
    else{
    let li = document.createElement('li')
    li.innerHTML = userinput.value
    showlist.appendChild(li)
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.setAttribute('id', 'check')
    showlist.append(checkbox)
    }

    /*let li = document.createElement('li')
    li.innerHTML = userinput.value
    showlist.appendChild(li)
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.setAttribute('id', 'check')
    showlist.append(checkbox)*/

})
userinput.value = "";