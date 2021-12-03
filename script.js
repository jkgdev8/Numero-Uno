
getData();
async function getData(){
    const response = await fetch('https://www.scorebat.com/video-api/v3/');
    const data = await response.json();
    objectlength(data);
}

function objectlength(data){
    for(let i = 1; i <= 7;i++){
        // Json file setUp
        let row = data.response[i].date;
        let year = row.split(':')[0].split('-');
        let title = data.response[i].title.split('-');
        let videoUrl = data.response[i].videos[0].embed;
        
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
        addBT.classList.add("w-52","h-30","bg-green-400","hover:bg-green-900");
        addBT.innerHTML="add";

        // BUTTON iteration
        addBT.addEventListener("click",function(){
            document.getElementById(i).remove();
            buttonIterationAdd(data.response[i],i);
        });
        
        // appending the div's
        document.getElementById("sectionchild").append(childContainer);
        childContainer.append(titleAndDait);
        titleAndDait.append(titlechild);
        titleAndDait.append(daitchild);
        childContainer.append(videochild);
        childContainer.append(addBT);
        // saveData(data.response,i)
    }
}
function buttonIterationAdd(content,count){

    let row = content.date;
    let year = row.split(':')[0].split('-');
    let title = content.title.split('-');
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
    var removeBT = document.createElement("button");  
    removeBT.classList.add("w-52","h-30","bg-green-400","hover:bg-green-900");
    removeBT.innerHTML="remove";
    
    removeBT.addEventListener("click",function(){
        document.getElementById(count).remove();
    });
    

    // appending the div's
    document.getElementById("saved-videos").append(childContainer);
    childContainer.append(titleAndDait);
    titleAndDait.append(titlechild);
    titleAndDait.append(daitchild);
    childContainer.append(videochild);
    childContainer.append(removeBT);
}

// function saveData(response,count){
//    // set on load for testing
//    var key = response[count]
//     // localStorage.setItem('response', JSON.stringify(response[count]));
//     let value = JSON.parse(localStorage.getItem('response'));
//     // console.log(local);

//     Storage.prototype.setObject = function(key, value) {
//         this.setItem(key, JSON.stringify(value));
//     }
    
//     Storage.prototype.getObject = function(key) {
//         let l = JSON.parse(this.getItem(key));
//         console.log(l);
//     }
// }
// https://www.scorebat.com/video-api/v3/