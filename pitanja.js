var json = {
    "quiz": {
        "q1": {
            "question": "Which one is correct team name in NBA?",
            "options": [
                "New York Bulls",
                "Los Angeles Kings",
                "Golden State Warriros",
                "Huston Rocket"
            ],
            "answer": "Huston Rocket"
        },
        "q2": {
            "question": "'Namaste' is a traditional greeting in which Asian language?",
            "options": [
                "Hindi",
                "Mandarin",
                "Nepalese",
                "Thai"
            ],
            "answer": "Hindi"
        },
        "q3": {
            "question": "The Spree river flows through which major European capital city?",
            "options": [
                "Berlin",
                "Paris",
                "Rome",
                "London"
            ],
            "answer": "Berlin"
        },
        "q4": {
            "question": "Which famous artist had both a 'Rose Period' and a 'Blue Period'?",
            "options": [
                "Pablo Picasso",
                "Vincent van Gogh",
                "Salvador Dalí",
                "Edgar Degas"
            ],
            "answer": "Pablo Picasso"
        }
    }
}


var kontejner = document.getElementById("kontejner");
var pitanja = json['quiz'];

for( i in pitanja){
    let pitanje = pitanja[i];
    console.log(pitanje)
    kontejner.innerHTML += '<h2>'+pitanje['question'] +'</h2>'

    for (o in pitanje['options']){
        var odgovor = pitanje["options"][o]
        console.log(odgovor)
        kontejner.innerHTML += "<input type='radio' id='"+o+"' name='"+pitanje["options"]+"' value ='"+ odgovor +"'>"+odgovor+"</br>"
        
       }

}







