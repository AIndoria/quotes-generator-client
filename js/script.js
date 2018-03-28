
var quoteDiv=document.getElementById("quote");

function getQuote(){
    var request=new XMLHttpRequest();

    request.open('GET','http://talaikis.com/api/quotes/random/');

    request.onload=function(){
    var data=JSON.parse(request.responseText);
    clearQuote();
    appendQuote(data);
    
    }
request.send();
}

getQuote();



function clearQuote(){
    document.getElementById("quote").innerHTML = "";
}
function appendQuote(text){
    var completeString=text.quote +" <BR> ~~<em> "+text.author + "</em>";
    quoteDiv.insertAdjacentHTML("afterbegin", completeString);
    console.log("Loading finished.");

}

function tweet(){
    var twitterText=document.getElementById("quote").innerText;
    console.log("Timeout executed");
    console.log(twitterText);
    var tweetURL="https://twitter.com/share?text="+encodeURIComponent(twitterText)+"&url=http://aindoria.com";
    window.open(tweetURL);
}

// I didn't originally intend to include this
// but then I read fcc project requirements. Oh well.
