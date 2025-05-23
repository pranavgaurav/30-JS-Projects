const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        quote.innerHTML = `"${data.content}"`;
        author.innerHTML = `— ${data.author}`;
      } catch (error) {
        quote.innerHTML = "Failed to fetch quote.";
        author.innerHTML = "";
        console.error("Error fetching quote:", error);
      }
    }

getQuote(api_url);