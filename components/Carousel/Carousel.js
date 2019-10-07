/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

mainCarousel = document.querySelector('.carousel-container')
var currentIndex = 0;
mainCarousel.append(createCarousel());


function createCarousel() {
  // create the elements
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const image1 = document.createElement('img');
  const image2 = document.createElement("img");
  const image3 = document.createElement("img");
  const image4 = document.createElement("img");
  const rightButton = document.createElement('div');

  // set the styles
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  image1.classList.add("active");

  // set the content
  image1.src = "./assets/carousel/mountains.jpeg";
  image2.src = "./assets/carousel/computer.jpeg";
  image3.src = "./assets/carousel/trees.jpeg";
  image4.src = "./assets/carousel/turntable.jpeg";

  // put together structure
  carousel.append(leftButton, image1, image2, image3, image4, rightButton);

  images = [image1, image2, image3, image4];

  leftButton.addEventListener("click", () => select(leftIndex));
  rightButton.addEventListener("click", () => select(rightIndex));

  function select(indexFn) {
    images.forEach(image => image.classList.remove("active"));
    console.log(currentIndex)
    currentIndex = indexFn(currentIndex);
    console.log(currentIndex);
    const nextImage = images[currentIndex];
    nextImage.classList.toggle("active");
  };

  function rightIndex(currentIndex) {
    return (currentIndex + 1) % 4;
  };

  function leftIndex(currentIndex) {
    // return rightIndex(currentIndex + 1);
    return (currentIndex + 3) % 4;
  };

  return carousel;
};