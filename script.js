

// document.querySelector("#input").addEventListener("keydown", (event) => {
//   if(event.key === "Enter"){
//     const input = document.querySelector("#input");
//     if((input.value.trim())==0){
//       alert("Please enter a value");
//     }
//     else{
//     addItem(input.value);
//     return;
//     }
//   }
    
// });

// document.querySelector("#add_item").addEventListener("click", () => {
//   const input = document.querySelector("#input");
//   if((input.value.trim())==0){
//     alert("Please enter a value");
//   }
//   else{
//   addItem(input.value);
//   return;
//   }
// });

// addItem = (input) => {
//   const item = document.createElement("div");
//   const div = document.createElement("div");
//   const checkIcon = document.createElement("i");
//   const trashIcon = document.createElement("i");
//   const text = document.createElement("p");

//   item.className = "item";
//   text.textContent = input;

//   checkIcon.className = "fas fa-check-square";
//   checkIcon.style.color = "lightgray";
//   checkIcon.addEventListener("click", () => {
//     if(text.style.textDecoration != "line-through")
//         {
//           text.style.textDecoration = "line-through";
//          checkIcon.style.color = "limegreen";
//         }
//     else
//       {
//         text.style.textDecoration = "none";
//       checkIcon.style.color = "lightgray";
//       }
    
//   })
//   div.appendChild(checkIcon);

//   trashIcon.className = "fas fa-trash";
//   trashIcon.style.color = "darkgray";
//   trashIcon.addEventListener("click", () => {
//     item.remove();
//   })
//   div.appendChild(trashIcon);

//   item.appendChild(text);
//   item.appendChild(div);
 

//   document.querySelector("#grocery_list").appendChild(item);
//   document.querySelector("#input").value = "";
//   localStorage.setItem(item,text)
// }

// function addText(){
//   document.getElementById("show").style.opacity="1";
// }


document.querySelector("#input").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
      const input = document.querySelector("#input");
      if((input.value.trim())==0){
        alert("Please enter a value");
      }
      else{
      addItem(input.value);
      return;
      }
    }
      
  });
  
  document.querySelector("#add_item").addEventListener("click", () => {
    const input = document.querySelector("#input");
    if((input.value.trim())==0){
      alert("Please enter a value");
    }
    else{
    addItem(input.value);
    return;
    }
  });
  const add = document.querySelector('.add');
  const done = document.querySelector('.done');
  const notDone = document.querySelector('.notDone');

  const newLi = document.createElement('li');
  const checkBtn = document.createElement('button');
  const delBtn = document.createElement('button');


  checkBtn.innerHTML = '<i class="fas fa-check-square"></i>';
  checkBtn.style.color="darkgreen"
  delBtn.innerHTML = '<i class="fa fa-trash"></i>';
  delBtn.style.color="darkgreen"

  addItem = (input) => {

    
    if(input.value !==''){
      newLi.textContent = input;
      input.value = '';
      add.appendChild(newLi);
      newLi.appendChild(checkBtn);
      newLi.appendChild(delBtn);
    }



  }
  checkBtn.addEventListener('click', function(){
    const parent = this.parentNode;
    done.appendChild(parent);
    const clone = parent.cloneNode(true);
    add.appendChild(clone);
    checkBtn.style.display = 'none';
  });

  delBtn.addEventListener('click', function(){
    const parent = this.parentNode;
    parent.remove();
  });

