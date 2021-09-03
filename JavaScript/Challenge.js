//input
var arr1 =[ 
    ["id","name","sex"],
    ["1","John","M"],
    ["2","Boby","M"],
    ["3","Doe","M"]
]
var arr2 = [
    ["id","age"],
    ["1","15"],
    ["2","22"],
    ["3","33"]
]

function arrToObj (...arr){
    const [keysList, ...arrList] = arr;
    const result = arrList.map(values => {
      let newObj = {};
      values.forEach((value, i) => {  //because we hv an arr inside arr we are useing forEach to iterate over the inside arr 
        newObj[keysList[i]] = value //considering first row as header
        console.log(keysList[i])
      });
      return newObj;
    });
    return result
}
function mergeObjects(arr1ToObj,arr2ToObj){
    return arr1ToObj.map((item,i)=>{
       if(item.id === arr2ToObj[i].id){
         return Object.assign({},item,arr2ToObj[i]) //merging 2 objects 
       }
    })
}

let arr1ToObj = arrToObj(...arr1)
let arr2ToObj = arrToObj(...arr2)
let finalResult = mergeObjects(arr1ToObj,arr2ToObj);
console.log(finalResult)

// OUTPUT:
// [
//     { id: '1', name: 'John', sex: 'M', age: '15' },
//     { id: '2', name: 'Boby', sex: 'M', age: '22' },
//     { id: '3', name: 'Doe', sex: 'M', age: '33' }  
//   ]


