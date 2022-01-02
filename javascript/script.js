function submitButton(){
    var total = 5;
    var score = 0;

    //input from client

    var q1 = document.forms["quiz"]["q1"].value;
    var q2 = document.forms["quiz"]["q2"].value;
    var q3 = document.forms["quiz"]["q3"].value;
    var q4 = document.forms["quiz"]["q4"].value;
    var q5 = document.forms["quiz"]["q5"].value;

    // if(q1 == null || q1 == "")
    // {
    //     alert("You missed Question 1");
    //     return false;
    // }
    
    // validation

    for(i = 1; i <= total; i++){
        if(eval('q'+i) == null || eval('q'+i) == ""){
            alert("You missed Question "+i);
        }
    }

    // correct Answer
    var answer = ["c", "d", "a" , "b", "d"];

    //check answer

    // if(q1 == answer[0]){
    //     score++;
    // }

    for(i =1; i <= total; i++){
        if(eval('q'+i) == answer[i - 1]){
            score++;
        }
    }

    //display result

    var results = document.getElementById('results');
    results.innerHTML="<h3>Your Correct answers are <span>" +score + "</span> out of <span>"+total+"</span></h3>"
    return false;
}