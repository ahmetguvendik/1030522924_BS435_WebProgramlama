let hak =2;
let game =true;
let index = Math.floor(Math.random()*3)

function showanimals(image){
    if(image==index){
        document.getElementById("img"+image).src= "images/kedi.jpg"
        game =false;
        
    }
    else{
        document.getElementById("img"+image).src= "images/kopek.jpg"
        hak--;
        if(hak==0){
           document.getElementById("yenildiId").style = true;
        }
        
    }

    if(game ==false){
        document.getElementById("kazandiId").style = true;
    }
}


function restart(){
    location.reload();
}

