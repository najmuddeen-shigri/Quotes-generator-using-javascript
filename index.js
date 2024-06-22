const api_url = "https://api.quotable.io/random";
const Quote = document.getElementById("quote");
const Auther = document.getElementById("auther")

async function getQuotes(url){
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data)
  Quote.innerHTML= data.content;
  Auther.innerHTML= data.author;
}
getQuotes(api_url)
function tweet(){
    var url = 'https://twitter.com/intent/tweet?url=URL_HERE&via=getboldify&text=yourtext';
    TwitterWindow = window.open(url, 'TwitterWindow',width=600,height=300);
    return false;

}