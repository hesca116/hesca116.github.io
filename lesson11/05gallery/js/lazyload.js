//This query gets all the images that contain a data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");
//console.log(imagesToLoad);

//IntersectionalObserver API> Optional parameters
const imgOptions = {
  threshold: 0.8,
  rootMargin: "0px 0px 300px 0px"
};

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    alert("intersecting did not work");
    loadImages(img);
  });
}

//Arrow function with two instructions. 1. replace the data-src attribute with src, so it becomes the loaded image
// , and 2. remove the  data-src attribute  

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.removeAttribute('data-src');
  /*image.onLoad = () => {//image has not loaded to this point, maybe eliminate this event listener and use remove attribue at once
    image.removeAttribute('data-src');
  };*/
}


/*the other approach. Tried this and it didnt work.
//this part checks if the IntersectionObserver supported? 
if('IntersectionObserver' in window) {
  const imgObserver = new IntersectionObserver((items, observer) =>{
    items.forEach((item) =>{
      if(item.isIntersecting){
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);
//forEach loop cicles through the images to load them when the imageObserver catches them
imagesToLoad.forEach((img) => {
  imgObserver.observe(img);
  });
}
else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}
*/
