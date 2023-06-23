function iniciar(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SpG6SYuCI/model.json', modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.log(error)
    } else {
        document.getElementById("precisaodosom").innerHTML = "Preçisao -" + (results[0].confidence* 100).toFixed(2) + " %";
        var imagens = document.getElementById("cachorro")
        var imagens1 = document.getElementById("gato")
        var imagens2 = document.getElementById("vaca")
        var imagens3 = document.getElementById("tigre")

        if (results[0].label == "latido") {
            imagens.src = "cachorro.gif"
            imagens1.src = "maxwell png.png"
            imagens2.src = "vaca png.png"
            imagens3.src = "tigre-removebg-preview.png"
            
        } else if(results[0].label == "miado") {
            imagens.src = "cachorro.png.png"
            imagens1.src = "maxwell gif.gif"
            imagens2.src = "vaca png.png"
            imagens3.src = "tigre-removebg-preview.png"
            
        } else if(results[0].label == "mugido") {
            imagens.src = "cachorro.png.png"
            imagens1.src = "maxwell png.png"
            imagens2.src = "vaca.gif"
            imagens3.src = "tigre-removebg-preview.png"

        } else {
            imagens.src = "cachorro.png.png"
            imagens1.src = "maxwell png.png"
            imagens2.src = "vaca png.png"
            imagens3.src = "tigre.gif"


        }
    }
}