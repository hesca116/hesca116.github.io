//This query gets all the images that contain a data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

//IntersectionalObserver API> Optional parameters
const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px 50px 0px"
};

//Arrow function with two instructions. 1. replace the data-src attribute with src, so it becomes the loaded image
// , and 2. remove the  data-src attribute  
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onLoad = () => {image.removeAttribute('data-src');};
}

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
