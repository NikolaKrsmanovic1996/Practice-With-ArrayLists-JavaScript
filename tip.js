let toDoList =[];



function addiItem(array){
        let answer = prompt("sta radis ti danas govedo raspalo ?");
        let correct = answer.toUpperCase().trim();
        
        if(checkDuplicateItemsInList(array,correct)){

            array.push(correct);
        }
        else{
            alert('Postoji vec taj u listi ne mozes da ubacujes ponovo');
        }
        
}
function removeItemList(array){
      let answer = prompt('Koji item zelis obrisati jadnice jedan ? ')
      let correct = answer.toLowerCase().trim();

      let index = array.indexOf(correct);

      if(checkDuplicateItemsInList(array,correct)){
          let removedItem = array.splice(index,1);
          console.log(removedItem);
          alert('You removed an item from list')
      }
      else{
          console.log("nema te vrednosti");
      }
}


function checkDuplicateItemsInList(array,item){
         let postoji = false;
         let index = array.indexOf(item);
         if(index!=-1){
             postoji = false;
         }else{
             postoji = true;
         }
         return postoji;
}

function showItemList(list){
    let listValues = 'Your list items are : ';

    for(let i = 0; i<=list.length; i++){
        listValues = `'List item Nr ${i+1} : ${list[i]}`
    }
    alert(listValues);
}



addiItem(toDoList);
addiItem(toDoList);
addiItem(toDoList);
removeItemList(toDoList);
showItemList(toDoList);

console.log(toDoList)