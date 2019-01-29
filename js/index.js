const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent['cta']['img-src'];

const btnID = document.querySelector('button');
btnID.textContent = 'Get Started';

let navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link, i) => {
  link.innerHTML = siteContent.nav[`nav-item-${i+1}`];
})
navLinks.forEach((link, i) => {
  link.style.color = 'green';
})

// const navLinkOne = document.querySelector('nav a:first-child');
// navLinkOne.textContent = 'Services';
// navLinkOne.style.color = "green";

// const navLinkTwo = document.querySelector('nav a:nth-child(2)');
// navLinkTwo.textContent = 'Product';
// navLinkTwo.style.color = "green";

// const navLinkThree = document.querySelector('nav a:nth-child(3)');
// navLinkThree.textContent = 'Vision';
// navLinkThree.style.color = "green";

// const navLinkFour = document.querySelector('nav a:nth-child(4)');
// navLinkFour.textContent = 'Features';
// navLinkFour.style.color = "green";

// const navLinkFive = document.querySelector('nav a:nth-child(5)');
// navLinkFive.textContent = 'About';
// navLinkFive.style.color = "green";

// const navLinkSix = document.querySelector('nav a:nth-child(6)');
// navLinkSix.textContent = 'Contact';
// navLinkSix.style.color = "green";

const domAwesome = document.querySelector('h1');
domAwesome.textContent = 'DOM Is Awesome';

const featuresHeader = document.querySelectorAll('.main-content .top-content .text-content h4');
featuresHeader[0].textContent = 'Features';

const featuresParagraph = document.querySelectorAll('.main-content .top-content .text-content p');
featuresParagraph[0].textContent = siteContent['main-content']['features-content'];


featuresHeader[1].textContent = 'About';
featuresParagraph[1].textContent = siteContent['main-content']['about-content'];

const middleImage = document.querySelector('#middle-img');
middleImage.src = siteContent['main-content']['middle-img-src'];


const featuresHeaderBottom = document.querySelectorAll('.main-content .bottom-content .text-content h4');
featuresHeaderBottom[0].textContent = 'Services';

const featuresParagraphBottom = document.querySelectorAll('.main-content .bottom-content .text-content p');
featuresParagraphBottom[0].textContent = siteContent['main-content']['services-content'];

featuresHeaderBottom[1].textContent = 'Product';
featuresParagraphBottom[1].textContent = siteContent['main-content']['product-content'];

featuresHeaderBottom[2].textContent = 'Vision';
featuresParagraphBottom[2].textContent = siteContent['main-content']['vision-content'];



