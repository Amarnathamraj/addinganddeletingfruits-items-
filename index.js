// Add the Edit Button:


// Implement the code as in video but with one extra 'Edit' button in 'li'
const form=document.querySelector('form');
const Fruits=document.querySelector('.fruits');
form.addEventListener('submit',function(event){
    event.preventDefault();
 const FruitstoAdd=document.getElementById('fruit-to-add');
   const newLi=document.createElement('li');
newLi.innerHTML=FruitstoAdd.value+'<button class="delete-btn">x</button>'
Fruits.appendChild(newLi);
})
Fruits.addEventListener('click',function(event){
  //console.log(event.target);
  if(event.target.classList.contains('delete-btn')){
    const fruittodelete=event.target.parentElement;
    Fruits.removeChild(fruittodelete);
  }
  else if (event.target.classList.contains('edit-btn')) {
    // You can add edit functionality here if needed
    console.log('Edit button clicked');
  }
})
