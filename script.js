var apiUrl = "https://raw.githubusercontent.com/openfootball/football.json/master/2020-21/en.2.json";
var scores = document.querySelector(".scores");
var btn = document.querySelector('#btn');
const ul = document.getElementById('authors');



var clickMe = function() {
    
    
    fetch(apiUrl).then(async res=>{
        const data = await res.json();
        //const reverse = data.matches.reverse();
        const goal = data.matches.score;
        const reverse = data.matches.length;
    
            for (var i = 0; i <= 20; i++) {  
                var date =  document.createElement("ul");
                date.textContent = "Date:   " + data.matches[i].date + " " + data.matches[i].team1 + " vs " 
                + data.matches[i].team2 + " Score: " + "  "  + data.matches[i].score.ft;
                scores.appendChild(date);
            }
  
       
        })

    
}

function remove(me) {
    document.getElementById(me).outerHTML = ""
};

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}





btn.addEventListener('click',clickMe);










