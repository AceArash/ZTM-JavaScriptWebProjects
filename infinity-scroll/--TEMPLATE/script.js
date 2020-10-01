// Work in Progress
const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API

const count = 10;
const apiKey = "epM79mUgTWNDp6_Nd0wzNJn31vs0BCvIDDEedGFf-bg";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}
`;

// Helper Function to Set Attributes on DOM Elements
function setAttibutes(element, attributes) {
  for (const key in attributes) {
    element.setAttibute(key, attributes[key]);
  }
}

// Create elements for Links & Photos, Add to DOM

function displayPhotos() {
  //Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement("a");
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("target", "_blank");
    setAttibutes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    //Create <img> for photo
    const img = document.createElement("img");
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);
    setAttibutes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Put <img> inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    //   Catch Error here
  }
}

// On Load
getPhotos();
