// const { stringify } = require("postcss");

getLocalData();
getData();
async function getData(){
    const response = await fetch('https://www.scorebat.com/video-api/v3/');
    const data = await response.json();

    objectlength(data.response);
}

function objectlength(response){
    let i = 1;
    var videoCoutn = 10;
    newVCreation(i);
    function newVCreation(a){
        for(let i = a + 1 ; i <= videoCoutn;i++){
            // Json file setUp
            let row = response[i].date;
            let year = row.split(':')[0].split('-');
            let title = response[i].title.split(' ');
            let videoUrl = response[i].videos[0].embed;
            
            // HTML News box container
            var childContainer = document.createElement('div');
            childContainer.id = i;
            childContainer.classList.add("ml-2","mr-2","text-center");
            var titleAndDait = document.createElement('div');
            titleAndDait.classList.add("flex");
            var titlechild = document.createElement('div');
            titlechild.innerHTML =title[0];
            titlechild.classList.add("bg-gray-500","w-3/4");
            var daitchild = document.createElement('div')
            daitchild.innerHTML = year[0] + "/" + year[1];
            daitchild.classList.add("bg-gray-500","w-1/4","text-left","text-sm");
            var videochild = document.createElement('div');
            videochild.classList.add("w-52","h-30");
            videochild.innerHTML = videoUrl;
            var addBT = document.createElement("button");  
            addBT.classList.add("w-52","h-29","bg-green-400","hover:bg-green-900");
            addBT.innerHTML="add";
    
            // BUTTON iteration
            addBT.addEventListener("click",function(){
                document.getElementById(i).remove();
                buttonIterationAdd(response[i],i);
                saveData(response[i]);
                newVCreation(i = videoCoutn++);
            });
            
            // appending the div's
            document.getElementById("sectionchild").append(childContainer);
            childContainer.append(titleAndDait);
            titleAndDait.append(titlechild);
            titleAndDait.append(daitchild);
            childContainer.append(videochild);
            childContainer.append(addBT);
        }
    }
}
function buttonIterationAdd(content,count){

    let row = content.date;
    let year = row.split(':')[0].split('-');
    let title = content.title.split(' ');
    let videoUrl = content.videos[0].embed;

    // HTML News box container
    var childContainer = document.createElement('div');
    childContainer.id = count; 
    childContainer.classList.add("ml-2","mr-2","text-center");
    var titleAndDait = document.createElement('div');
    titleAndDait.classList.add("flex");
    var titlechild = document.createElement('div');
    titlechild.innerHTML =title[0];
    titlechild.classList.add("bg-gray-500","w-3/4");
    var daitchild = document.createElement('div')
    daitchild.innerHTML = year[0] + "/" + year[1];
    daitchild.classList.add("bg-gray-500","w-1/4","text-left","text-sm");
    var videochild = document.createElement('div');
    videochild.classList.add("w-52","h-30");
    videochild.innerHTML = videoUrl;
    
    // appending the div's
    document.getElementById("saved-videos").append(childContainer);
    childContainer.append(titleAndDait);
    titleAndDait.append(titlechild);
    titleAndDait.append(daitchild);
    childContainer.append(videochild);
    // childContainer.append(removeBT);
}

function saveData(response){
    var responseAR = JSON.parse(localStorage.getItem('video')) || [];
    responseAR.push(response)
    var responseString = JSON.stringify(responseAR);
    localStorage.setItem('video',responseString);
}

function getLocalData(){
    var responseAR = JSON.parse(localStorage.getItem('video')) || [];
    var localData = localStorage.getItem('video');
    var data = JSON.parse(localData);
    if(responseAR.length == 0){
        return;
    }else{
        for(var i = 0; i < data.length;i++){
            buttonIterationAdd(data[i],i)
        }
    }
} 

function removeBT(){
    localStorage.removeItem('video');
}

// https://www.scorebat.com/video-api/v3/