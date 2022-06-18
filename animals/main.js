function startClassification() 
{
navigator.mediaDevices.getUserMedia({audio: true});
classifier = m15.soundSlassifier('https://teachablemachine.withgoogle.com/models/iXtKGKH_-/' , modelReady);
}
function modelReady()
{
classifier.classify(gotResults)
}
function gotResults(error , results)
{
if (error){
console.error(error);
}
else {
coseole.log(results);
random_number_r = Math.floor(Math.random() *  255 ) + 1;
random_number_g = Math.floor(Math.random() *  255 ) + 1;
random_number_b = Math.floor(Math.random() *  255 ) + 1;
document.getElementById("result_label").innerHTML ='i can hear ' + results[0].label;
document.getElementById("results_confidence").innerHTML = 'accuracy' + (results[0].confidence * 100).toFixed(2) + "%";
document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";           
img = documeant.getElementById('alien1')
img = documeant.getElementById('alien2')
img = documeant.getElementById('alien3')
img = documeant.getElementById('alien4')
if (results[0].label == "meow")
{
img.src ='cat.gif';

}
else if (results[0].label == "bark")
{
    img.src ='cat.gif';
    img1.src ='dog.gif';
 


}
else if (results[0].label == "monkey")
{
    img.src ='cat.gif';
    img1.src ='dog.gif';
 img2.src ='mon.gif';


}
}










