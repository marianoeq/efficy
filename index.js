const oppoStatus = [
  {
    K_OPPO_STATUS: 1,
    STATUS: "1. Initial Contact",
    SUCCESS: 0,
  },
  {
    K_OPPO_STATUS: 2,
    STATUS: "2. Demonstration",
    SUCCESS: 25,
  },
  {
    K_OPPO_STATUS: 3,
    STATUS: "3. Proposal",
    SUCCESS: 50,
  },
  {
    K_OPPO_STATUS: 4,
    STATUS: "4. Negotiation",
    SUCCESS: 75,
  },
  {
    K_OPPO_STATUS: 5,
    STATUS: "5. Order",
    SUCCESS: 100,
  },
];


let select = document.querySelector("select");
let input = document.querySelector("input");
let output = document.querySelector(".output");
let button = document.querySelector("button");

//I creted this empty array to push values from inside the for loop and use those values outside. 
let jsonArray = []

function renderingContent() {

    //I iterate through the array of objects
  for (let i = 0; i < oppoStatus.length; i++) {
    let keyValueOppoStatus = oppoStatus[i];



//I use Object.entries over each object coming from above to get an array of [key:value]
    let entries = Object.entries(keyValueOppoStatus);



    let statusKey = entries[1][0]; //Selecting the word "status" from entries
    let statusValue = entries[1][1] //selecting the value of "status" 
    let successKey = entries[2][0]; //Selecting the word "status" from entries
    let successValue = entries[2][1];//selecting the value of "success"
    console.log(successValue)

    //spliting the status value and selecting just the number
    let statusValueIndex = statusValue.split(" ")[0];

    //Pushing into a new array the variables and converting them in JSON format
    jsonArray.push(JSON.stringify(statusKey))
    jsonArray.push(JSON.stringify(successKey))
    jsonArray.push(JSON.stringify(statusValueIndex))
    
    
    
    //Creating an option element and appending it to the DOM
    let opt = document.createElement("option");
    select.appendChild(opt);
    opt.value = successValue; //Assigning value(Number) to the value
    opt.innerHTML = statusValue;//Assigning value(String) to be shown
    
}

   
  let statusKeyJson = jsonArray[0]  //selecting the words "status" Making use of the data 
  let successKeyJson = jsonArray[1] //selecting the words "success" Making use of the data 
   

 
  
 

  select.addEventListener("change", function (e) {
      e.preventDefault
    let optValue = select.value;
    input.value = optValue;
  
  
});


button.addEventListener("click", function (e) {
    e.preventDefault();
    let statusValueIndex = select.options[select.selectedIndex].text.split(".")[0]; //SelectedIndex gives to us the index of selected option.
    output.textContent =`{${statusKeyJson}:${statusValueIndex} ,${successKeyJson}:${select.value}}`;  
});


}
renderingContent();


