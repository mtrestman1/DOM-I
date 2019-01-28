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
ctaImage.src = '/Users/mtrestman1/Lambda/Lambda H&CSS/DOM-I/img/header-img.png';

const middleImage = document.querySelector('#middle-img');
middleImage.src = '/Users/mtrestman1/Lambda/Lambda H&CSS/DOM-I/img/mid-page-accent.jpg';

const btnID = document.querySelector('button');
btnID.textContent = 'Get Started';



const navLinkOne = document.querySelector('nav a:first-child');
navLinkOne.textContent = 'Services';

const navLinkTwo = document.querySelector('nav a:nth-child(2)');
navLinkTwo.textContent = 'Product';

const navLinkThree = document.querySelector('nav a:nth-child(3)');
navLinkThree.textContent = 'Vision';

const navLinkFour = document.querySelector('nav a:nth-child(4)');
navLinkFour.textContent = 'Features';

const navLinkFive = document.querySelector('nav a:nth-child(5)');
navLinkFive.textContent = 'About';

const navLinkSix = document.querySelector('nav a:nth-child(6)');
navLinkSix.textContent = 'Contact';

const domAwesome = document.querySelector('h1');
domAwesome.textContent = 'DOM Is Awesome';

const featuresHeader = document.querySelector('.text-content:first-child');
featuresHeader.textContent = 'Features';

const featuresHeaderTwo = document.querySelector('.text-content:nth-child(2');
featuresHeaderTwo.textContent = 'About';

const featuresParagraph = document.querySelector('p:first-child');
featuresParagraph.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const featuresParagraphTwo = document.querySelector('p:nth-child(2)');
featuresParagraphTwo.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

