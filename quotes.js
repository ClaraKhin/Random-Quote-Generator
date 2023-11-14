const quoteText = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".author");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const tweetBtn = document.querySelector(".tweet");
const quoteBtn = document.querySelector(".quote-btn");

const randomQuote=()=>{
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
       
        quoteText.innerText = result.content;
        quoteAuthor.innerText = result.author;
    });
}

soundBtn.addEventListener("click", ()=>{
    const utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${quoteAuthor.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

tweetBtn.addEventListener("click", ()=>{s
    const tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);