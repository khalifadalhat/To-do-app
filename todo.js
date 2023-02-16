// document.querySelector('#push').onclick = function() {
//     if (document.querySelector('#newtask input').value.length==0){
//         alert("Field cannot be empty");
//     }
//     else {
//         document.querySelector('#tasks').innerHTML +=`
//         <div class="task">
//          <span id="taskname"> 
//           ${document.querySelector('newtask input').value} 
//           </span>
//           <button class="delete">&times</button>
//           </div>`;

//           let current_task = document.querySelectorAll('.delete');
//           for (let i = 0; i < current_task.length; i++) {
//               current_task[i].onclick = function() {
//                   this.parentNode.removeChild();
                  
//               }
              
//           }
        
//     }
    
// }


const button = document.querySelector('#push')
button.addEventListener('click', function(e) {
    const value = input.value;

    if( value == "") {
        alert("You must type something")
    }else{
        const newlist = document.querySelector('#tasks')
        //const div = document.createElement('div')
        //const divText = document.createTextNode(value)

        //div.appendChild(divText)
        //new.appendChild(div)
        const div = `<div class="task"> ${value}
        <span class="close">&times;</span>
        </div>`
        newlist.insertAdjacentHTML('afterbegin', div)

        input.value =""
        addListener()
    }    
})
function addListener() {
    const mylist = document.querySelectorAll('.close')
    for (let i = 0; i < mylist.length; i++) {
                      mylist[i].onclick = function() {
                          this.parentNode.remove();
                          
                      }
}
}
