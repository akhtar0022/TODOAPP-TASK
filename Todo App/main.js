var list=document.getElementById('list');

function AddTodo(){

// Creating li and connect with ul user litext     
 var todo_item=document.getElementById('todo-item');
 var li=document.createElement('li');
 var litext=document.createTextNode(todo_item.value);
 li.appendChild(litext);
 list.appendChild(li);

// Delete Button
var delbtn=document.createElement('Button');
var deltext=document.createTextNode('Delete');
delbtn.setAttribute('class','delbtn1');
delbtn.setAttribute('onclick','deleteItem(this)');
delbtn.appendChild(deltext);
li.appendChild(delbtn);

// Edit Button 
var editbtn=document.createElement('Button');
var edittext=document.createTextNode('EDIT');
editbtn.setAttribute('class','editbtn1');
editbtn.setAttribute('onclick','editItem(this)');
editbtn.appendChild(edittext);
li.appendChild(editbtn);

 todo_item.value="";              // Automatice add-item value erase
 console.log(li);

}
function deleteItem(e){
   e.parentNode.remove();
}
function deleteAll(){
   list.innerHTML=""; 
}

function editItem(e){
 var edval=  e.parentNode.firstChild.nodeValue;
 var editvalue=window.prompt('Enter the Edit Text', edval);  // e.parentnode use to target parent node 
 e.parentNode.firstChild.nodeValue=editvalue;                // then firstchild target its text.

}