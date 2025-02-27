// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


mainCard = document.querySelector(".cards-container");

// topics = [
//     'bootstrap',
//     'javascript',
//     'jquery',
//     'node',
//     'technology']

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(data => {
    console.log("response", data);
      const cards = data.data.articles;
      for (var key in cards) {
        const articleArray = cards[key];
        articleArray.forEach(article => {
          const card = createCard(article, key);
          mainCard.append(card);
        });
      };
  })
  .catch(error => {
    console.log("The API is currently down, try again later", error);
  });

function createCard(userObj, category) {
    // create the elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    // set the styles
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    card.setAttribute("data-tab", category);
  

    // set the content
    headline.textContent = userObj.headline;
    img.src = userObj.authorPhoto;
    authorName.textContent = userObj.authorName;

    // put together structure
    card.append(headline, author);
    author.append(imgContainer, authorName);
    imgContainer.append(img);

    return card;
}
