const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//Navigation 
const italText = document.querySelectorAll("nav a")
for (let i = 0; i < italText.length; i++) {
  italText[i].classList.add("italic");
}

const nav1 = document.querySelector("nav a");
nav1.textContent = siteContent["nav"]["nav-item-1"];
const nav2 = nav1.nextElementSibling;
nav2.textContent = siteContent["nav"]["nav-item-2"];
const nav3 = nav2.nextElementSibling;
nav3.textContent = siteContent["nav"]["nav-item-3"];
const nav4 = nav3.nextElementSibling;
nav4.textContent = siteContent["nav"]["nav-item-4"];
const nav5 = nav4.nextElementSibling;
nav5.textContent = siteContent["nav"]["nav-item-5"];
const nav6 = nav5.nextElementSibling;
nav6.textContent = siteContent["nav"]["nav-item-6"];

//Logo Image
const logoImg = document.querySelector(".logo");
logoImg.src = siteContent["images"]["logo-img"];

//CTA section
const ctaTitle = document.querySelector("h1");
ctaTitle.textContent = siteContent["cta"]["h1"];

const ctaBttn = document.querySelector("button");
ctaBttn.textContent = siteContent["cta"]["button"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["images"]["cta-img"]

//Main Content
const featSec = document.querySelector(".text-content:nth-of-type(1)");
const featTitle = featSec.querySelector("h4");
featTitle.textContent = siteContent['main-content']["features-h4"];
const featCont = featSec.querySelector("p");
featCont.textContent = siteContent["main-content"]["features-content"];

const aboutSec = document.querySelector(".text-content:nth-of-type(2)");
const aboutTitle = aboutSec.querySelector("h4");
aboutTitle.textContent = siteContent["main-content"]["about-h4"];
const aboutCont = aboutSec.querySelector("p");
aboutCont.textContent = siteContent["main-content"]["about-content"];

//Middle Image
const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["images"]["accent-img"];

// Bottom Content
const servSec = document.querySelector(".bottom-content .text-content:nth-of-type(1)");
const servTitle = servSec.querySelector("h4");
servTitle.textContent = siteContent['main-content']["services-h4"];
const servCont = servSec.querySelector("p");
servCont.textContent = siteContent["main-content"]["services-content"];

const productSec = document.querySelector(".bottom-content .text-content:nth-of-type(2)");
const productTitle = productSec.querySelector("h4");
productTitle.textContent = siteContent['main-content']["product-h4"];
const productCont = productSec.querySelector("p");
productCont.textContent = siteContent["main-content"]["product-content"];

const visionSec = document.querySelector(".bottom-content .text-content:nth-of-type(3)");
const visionTitle = visionSec.querySelector("h4");
visionTitle.textContent = siteContent['main-content']["vision-h4"];
const visionCont = visionSec.querySelector("p");
visionCont.textContent = siteContent["main-content"]["vision-content"];

// Contact
const contactSec = document.querySelector(".contact");
const contactTitle = contactSec.querySelector("h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

const address = contactSec.querySelector("p:nth-of-type(1)");
address.textContent = siteContent["contact"]["address"];

const phone = contactSec.querySelector("p:nth-of-type(2)");
phone.textContent = siteContent["contact"]["phone"];

const email = contactSec.querySelector("p:nth-of-type(3)");
email.textContent = siteContent["contact"]["email"];

//Footer
const copyright = document.querySelector("footer a");
copyright.textContent = siteContent["footer"]["copyright"];

copyright.classList.add("bold");


