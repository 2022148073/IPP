//import { send_message } from "./sens.js";

function quickRep() {
    var loc = document.getElementById('place').value;
    var sym = document.getElementById('symptom').value;

    if(loc) {
        /*try{
            //send_message(loc, sym, '01072831516');
        }
        catch(error){
            console.log(error);
        }*/
        window.location.href = ('emergencyReport.html');
        console.log("화면 이동");

    }
    else window.alert("지역이 입력되지 않았습니다!");
    
}

function concreteRep() {

    var name = document.getElementById('name').value;
    var phon = document.getElementById('phone').value;
    var desc = document.getElementById('description').value;
    var age = document.getElementById('age').value;
    var gend = document.getElementById('gender').value;
   
    if((name) && (phon) && (desc) && (age) && (gend)) window.location.href = ('main.html');
    else window.alert("정보가 제대로 입력되지 않았습니다!");
}
