const galleryItems = [
  {
    preview: "img/preview-1.jpeg",
    fullview: "img/fullview-1.jpeg",
    alt: "alt text 1"
  },
  {
    preview: "img/preview-2.jpeg",
    fullview: "img/fullview-2.jpeg",
    alt: "alt text 2"
  },
  {
    preview: "img/preview-3.jpeg",
    fullview: "img/fullview-3.jpeg",
    alt: "alt text 3"
  },
  {
    preview: "img/preview-4.jpeg",
    fullview: "img/fullview-4.jpeg",
    alt: "alt text 4"
  },
  {
    preview: "img/preview-5.jpeg",
    fullview: "img/fullview-5.jpeg",
    alt: "alt text 5"
  },
  {
    preview: "img/preview-6.jpeg",
    fullview: "img/fullview-6.jpeg",
    alt: "alt text 6"
  }
];

const imageGallery = document.querySelector('.image-gallery');

function smallImg() {
  const newUl = document.createElement("ul");
  imageGallery.prepend(newUl);
  galleryItems.forEach(imgS => {
    const newLi = document.createElement("li");
    newUl.prepend(newLi);
    const img = document.createElement("img");
    newLi.prepend(img);
    img.setAttribute("alt", imgS.alt);
    img.setAttribute("src", imgS.preview);
  });
}

smallImg(galleryItems);


function defaultBigImg(galleryItems) {
  const newDiv = document.createElement("div");
  imageGallery.prepend(newDiv);
  const img = document.createElement("img");
  newDiv.prepend(img);
  img.classList.add("def__image");
  img.setAttribute("alt", galleryItems[3].alt);
  img.setAttribute("src", galleryItems[3].fullview);

}

defaultBigImg(galleryItems);

function onListClick (event) {
  if (event.target.nodeName !== 'IMG') return;
  console.log(event.target);
  console.log(event.target.alt);
  console.log(event.target.src);
  const defImg = document.querySelector(".def__image");
 console.log("defImg: ", defImg.alt);
  defImg.setAttribute("alt", event.target.alt);
  for (let i = 0; i < galleryItems.length; i++) {
    let curentAlt = galleryItems[i].alt;
    let curentSrc = galleryItems[i].fullview;
    console.log(galleryItems[i].alt);
    console.log(galleryItems[i].fullview);
       if (defImg.alt === curentAlt) {
         defImg.setAttribute("src", curentSrc);
       }
    
  }
  
}

document.querySelector("ul").addEventListener("click", onListClick);



