// Group Attributions by the following: Sam D.,Divya S.,Eric E.,Orson S.F.,Thais C.,Stacey H.


const ul = document.querySelector("ul")
const clearCompleted = document.querySelector("#clearCompleted")
const clearAll = document.querySelector("#clearAll")
let totalTasks = document.querySelector("#totalTasks")

document.querySelector("#addToList").addEventListener("click", addToList => {
  event.preventDefault()
  let li = document.createElement("li")
  let listItem = document.querySelector("#listItem").value;

  ul.appendChild(li);
  li.appendChild(document.createTextNode(listItem));

  document.querySelector("#listItem").value = ""
  checkCount();
})

ul.addEventListener('click', (e) => {
  e = e.target
  e.classList.toggle('line')
  checkCount()
})

clearAll.addEventListener('click', () => {
  const li = document.querySelectorAll('li')
  for (let i = 0; i < li.length; i++) {
   ul.removeChild(li[i])
  }
  checkCount()
})

clearCompleted.addEventListener('click', () => {
 const li = document.querySelectorAll('li')
 for( let i = 0; i < li.length; i++){
   if (li[i].classList.contains('line'))
 {
     ul.removeChild(li[i])
 }
 }
 checkCount()
})

function checkCount(){
  let count = 0
  const li = document.querySelectorAll('li')
  for( let i = 0; i < li.length; i++) {
   if (!(li[i].classList.contains('line'))) {
     count++
   }
  }
  totalTasks.innerHTML = count
}
