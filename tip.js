let toDoList =[];
let toDoList2 = [];



function addiItem(array){
     let answer = prompt('Sta ubacujes u listu ');
     let correct = answer.toLowerCase().trim();
     
     if(checkDuplicateItemsInList(array,correct)){
         array.push(correct);
         showItemList(toDoList);
     }else{
         alert('To vec postoji brt moj')
     }

    }



     //function addItem2(array2){
    //    let answer = prompt('Koje stavke ubacujes u listu da bi kasnije spojio sa listom drugom');
    //    let correct = answer.toLowerCase().trim();
   //      if(checkDuplicateItemsInList(array2,correct)){
           
   //      array2.push(correct);
         
  //   }
  //   else{
         //alert('To vec postoji brt moj')
  //   }

  //   }




     //function spojiDveListe(list1,list2){
       //   let newList = list1.concat(list2);
       //   console.log('Eve novih spojenih itema u listi ' +newList);

   //  }





   // this is to delete specific item in list in function
   function removeItemSpecific(array){

   let answer = prompt('Koji specificni item zelis obrisati iz lsita');
   let correct = answer.toLowerCase().trim();

   let index = array.indexOf(correct);
   if(!checkDuplicateItemsInList(array,correct)){// znaci samo da obrnes u funckiji true false u checkDuplicateItems funkciji jer ti vraca false ako postoji stavka u listi
       let removed = array.splice(index,1);
       console.log(removed);
       alert(`Obrisao si "${removed}" ovog lika iz liste koju si unosio preko prompta  `);
   } 
   else{
       alert('PRobaj ponovo')
   }
}




function deleteAllItems(list){
   for(let i = 0;i<list.length;i++){
             if(list.length>0){
                let rezultatList = list.pop();
                console.log("Obriso si sve elemente u ovoj listi " +rezultatList);
                
             }
   }

}
function deleteItemsFromList(list){
    if(list.length>0){
        console.log(`Obrisao si "${list[list.length-1]}" zadnjeg sa liste `);
        list.pop();
    }else{
        console.log("nema vise nista u listi");
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
         let valuesFromList = "Your values are : ";
      for(let i = 0; i<list.length; i++){
         valuesFromList += ` " ${i} and  ${list[i]}  "  `;    
         
      }
      alert(valuesFromList);
}



addiItem(toDoList);
addiItem(toDoList);
addiItem(toDoList);

removeItemSpecific(toDoList);
//deleteItemsFromList(toDoList);
//addItem2(toDoList2);
//addItem2(toDoList2);

//spojiDveListe(toDoList,toDoList2);

//removeItemList(toDoList);
showItemList(toDoList);

console.log(toDoList);