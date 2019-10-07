// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


mainTab = document.querySelector(".topics");

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(data => {
        console.log("response", data);
        const topics = data.data.topics;
        topics.forEach(element => {
            const tab = createTab(element);
            mainTab.appendChild(tab);
        });
    })
    .catch(error => {
        console.log("The API is currently down, try again later", error)
    });


function createTab(userObj) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = userObj;

    tab.addEventListener("click", () => {
        var selectCards = null;
        if (userObj === "node.js") {
            selectCards = document.querySelectorAll(`.card[data-tab='node']`)
        } else {
            selectCards = document.querySelectorAll(`.card[data-tab='${userObj}']`)
        };
        const allCards = document.querySelectorAll(".card");
        allCards.forEach(card => (card.style.display = "none"));
        selectCards.forEach(card => card.style.display = "flex");
        });

    return tab;
};