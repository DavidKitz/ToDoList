
const spanButton= document.getElementById("add");
const ul = document.getElementById("listUl");
const txtinput= document.getElementById("txtinp");
const list= document.getElementsByTagName("li");
const clearAll=document.getElementById("clearAll");
let archive = [];
let count=0;
initTodos();
window.onload= checktheBox();
txtinput.onkeypress=handleKeyPress;
localStorage.setItem("highscore",5)
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
spanButton.addEventListener("click", function () {
  let txtvalue=txtinput.value;
    if (txtvalue=== "") {
        alert("Please enter a valid input");
    }   
    else { 
       count++;
       let newTodo=new Todo(txtvalue);
       archive[count]=newTodo;
       let todo=archive[count];
       let spanInfo = document.createElement("span");
       spanInfo.innerText = todo.name;
       let li = document.createElement("li");
       li.append(spanInfo);
       ul.append(li);
       spanInfo.setAttribute("contenteditable",true);
       spanInfo.addEventListener("input",function() {
           updateTodos(this);
       })
       lister(count);
       checkboxCreater(todo.completed);
       clearInput();
       saveTodos();  
    }
});
function clearInput() {
  txtinput.value= "";
};

function updateTodos(liElement) {
    let update = JSON.parse(localStorage.getItem(liElement.parentNode.id));
    update.name = liElement.innerText;
    update = JSON.stringify(update);

    localStorage.setItem(liElement.parentNode.id,update);
}

function lister (num) {
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
      list[i].childNodes[1].addEventListener("click",function(event) {
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
  for (keys in key) {
    //since only numbers are stored, if something else should be in local stroage it will be detected here
    if (isNaN(Number(key[keys])))
    {
        let index = key.indexOf(key[keys])
        key.splice(index, 1);
        
    }
  }
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
    let spanInfo = document.createElement("span");
    spanInfo.innerText = item;
    let li = document.createElement("li");
    li.append(spanInfo);
    ul.append(li);
    spanInfo.setAttribute("contenteditable",true);
    spanInfo.addEventListener("input",function() {
        updateTodos(this);
    })
    console.log(completo,k);
    checkboxCreater(completo,k);
    lister(k);
    clearInput();
};

function checktheBox () {
  let key=Object.keys(localStorage);
  for (keys in key) {
    //since only numbers are stored, if something else should be in local stroage it will be detected here
    if (isNaN(Number(key[keys])))
    {
        let index = key.indexOf(key[keys])
        key.splice(index, 1);
        
    }
  }
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
 


 
