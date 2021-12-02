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
    
            for (var i = 0; i <= 5; i++) {  
                var date =  document.createElement("ul");
                date.textContent = "Date:   " + data.matches[i].date + " " + data.matches[i].team1 + " vs " 
                + data.matches[i].team2 + " Score: " + "  " +  data.matches[i].score.ft;
                scores.appendChild(date);
            }

            
       
        })

    
}





btn.addEventListener('click',clickMe);










