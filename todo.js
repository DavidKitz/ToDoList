
<<<<<<< HEAD
/*Buglist
1) initTodos needs to finish before the checkthebox funtion begins to run
*/
=======
>>>>>>> 66728456674e26b71b949207fbcb32e00bce428c
const spanButton= document.getElementById("add");
const ul = document.getElementById("listUl");
const txtinput= document.getElementById("txtinp");
const list= document.getElementsByTagName("li");
const clearAll=document.getElementById("clearAll");
let archive = [];
<<<<<<< HEAD
let count = 0;
=======
let count=0;
>>>>>>> 66728456674e26b71b949207fbcb32e00bce428c
initTodos();
window.onload= checktheBox();
txtinput.onkeypress=handleKeyPress;

function Todo(name,completo) {
  this.name=name;
    if (completo) {
      this.completed=completo;
    }
      else {
      this.completed=false;
      }
};
function handleKeyPress(e) {
  if(e.which===13) {
       spanButton.click();
       return false;
     }
 };

window.onload=clearAll.addEventListener("click", function(){
  localStorage.clear();
  window.location.reload()
  
  });
window.onload= spanButton.addEventListener("click", function () {
  let txtvalue=txtinput.value;
    if (txtvalue=== "") {
        alert("Please enter a valid input");
    }   
    else { 
<<<<<<< HEAD
       count++; 
=======
       count++;
>>>>>>> 66728456674e26b71b949207fbcb32e00bce428c
       let newTodo=new Todo(txtvalue);
       archive[count]=newTodo;
       let todo=archive[count];
       ul.innerHTML+="<li>"+ todo.name + "</li>";
       lister(count);
       checkboxCreater(todo.completed);
       clearInput();
<<<<<<< HEAD
       saveTodos(); 
        
=======
       saveTodos();  
>>>>>>> 66728456674e26b71b949207fbcb32e00bce428c
    }
});
function clearInput() {
  txtinput.value= "";
};

function lister (num) {
<<<<<<< HEAD
=======
  console.log(num);
>>>>>>> 66728456674e26b71b949207fbcb32e00bce428c
  let span=document.createElement("Span");
  let txt=document.createTextNode("\u00D7");
  span.className="close";
  span.appendChild(txt);
  list[list.length-1].setAttribute("id",num);  
  list[list.length-1].appendChild(span);
  removeLogic();
};
  
function checkboxCreater(completed) {
   for (let i=0;i<list.length;i++) {
     if (list[i].querySelector("input") == null) {
       let checker=document.createElement("input");
       checker.setAttribute("type","checkbox");
       list[i].appendChild(checker);
       checkif();
     } 
   } 
 };
function checkif() {
  for (let i=0;i<list.length;i++) {
      list[i].addEventListener("click",function(event) {
       const element= event.target;
        if(element.parentNode && element.parentNode!==ul) {
          let completo=archive[element.parentNode.id].completed;
            if (completo==false) {                    
              archive[element.parentNode.id].completed=true; 
              let str=JSON.stringify(archive[element.parentNode.id]);
              localStorage[element.parentNode.id]=str;
            }
              else  { 
                archive[element.parentNode.id].completed=false;
                let str=JSON.stringify(archive[element.parentNode.id]);
                localStorage[element.parentNode.id]=str;
              }
      }});
  }
};
     
function removeLogic() {
  const spanClose= document.getElementsByClassName("close");
    for (let i=0;i< spanClose.length;i++) {
      spanClose[i].addEventListener("click",function (event) {
      let element=event.target;
      let container= element.parentNode;
      archive.splice(element.parentNode.id,1);
      localStorage.removeItem(this.parentNode.id);
      container.removeChild(this);
      container.remove();
      });
    }
};
    
function initTodos() {
  let key=Object.keys(localStorage);
  key.sort((a,b)=> {return a-b;}); 
  for (let i=0;i<=localStorage.length;i++){
   
   let key1=key[i]
   let data= localStorage.getItem(key1);
      if (data) {
        let listLocal=JSON.parse(data);
        let nameLocal=listLocal.name;
        let completo=listLocal.completed;
        let list_new=new Todo(nameLocal,completo);
        archive[key1]=list_new;
        loadTodos(nameLocal,completo,key1);      
      } 
  } 
};

function loadTodos (item,completo,k) {
    count=k;
    ul.innerHTML+="<li>"+item + "</li>";
    console.log(completo,k);
    checkboxCreater(completo,k);
    lister(k);
    clearInput();
};

function checktheBox () {
  let key=Object.keys(localStorage);
<<<<<<< HEAD
  console.log(key)
  for (keys in key) {
    if (isNaN(keys))
    {
        key.splice(keys, 1);
    }
  }
=======
>>>>>>> 66728456674e26b71b949207fbcb32e00bce428c
  key.sort((a,b)=> {return a-b;}); 
  for (let i=0;i<=localStorage.length;i++){
   
   let key1=key[i]
   let data= localStorage.getItem(key1);
    if (data) {
      if(archive[key1].completed) {
        let liElement= document.getElementById(key1);
          if (liElement.querySelector("input") == null) {
            let checker=document.createElement("input");
            checker.setAttribute("type","checkbox");
        }
       liElement.querySelector("input").checked=true;
      }
    } 
 } 
};

function saveTodos() {
  let str=JSON.stringify(archive[count]);
  localStorage.setItem(count,str);
  checktheBox();
};
 


<<<<<<< HEAD
 
=======
 
>>>>>>> 66728456674e26b71b949207fbcb32e00bce428c
