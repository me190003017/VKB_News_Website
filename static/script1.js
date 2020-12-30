// <!-- 6545a231da474112b11ae756cd5f229e api key -->

window.addEventListener('load',changehtmlofnewaccordian1);
window.addEventListener('load',changehtmlofnewaccordian2);
window.addEventListener('load',changehtmlofnewaccordian3);
window.addEventListener('load',changehtmlofnewaccordian4);
window.addEventListener('load',changehtmlofnewaccordian5);
window.addEventListener('load',changehtmlofnewaccordian6);

// create an ajax get request
// http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}  

function changehtmlofnewaccordian1(){
  let newsaccordian1 = document.getElementById('newsaccordion1')
 
  let apikey = "6545a231da474112b11ae756cd5f229e";
  let country="in"
  let category1="business"

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=${country}&category=${category1}&apiKey=${apikey} `, true);

  xhr.onload = function () {
      if (this.status === 200) {
          let json = JSON.parse(this.responseText);
          let articles = json.articles;
          // console.log(articles);
          let newhtml3="";
          articles.forEach((element,index) => {
              console.log(element['urlToImage'])
            
            
            let news3=`
            <div class=" col-md-4 ">
            <div class="  card mb-4 shadow-sm">
              <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${element['urlToImage']}"
                preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
              <div class="card-body">
                <h5 class="card-title">${element['title']}</h5>
                <p class="card-text">${element['content']}</p>
                <a href="${element['url']}" class="btn btn-primary" target="_blank">Read More Here</a>
              </div>
            </div>
          </div>
      
          `
              
              newhtml3+=news3;
          });
          newsaccordian1.innerHTML=newhtml3;
      }
      else {
          console.log("error occured")
      }
  }
  xhr.send();
}

function changehtmlofnewaccordian2(){
      // <!-- 6545a231da474112b11ae756cd5f229e api key -->
    let newsaccordian2 = document.getElementById('newsaccordion2')

    // create an ajax get request
    // http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}  

    let source = "bbc-news"
    let apikey = "6545a231da474112b11ae756cd5f229e";
    let country="in"
    let category1="business"
    let category2="sports";
    let category3="science";
    let category4="health";
    let category5="technology";
    let category6="entertainment"
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=${country}&category=${category2}&apiKey=${apikey} `, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            // console.log(articles);
          
            let newhtml3="";
            articles.forEach((element,index) => {
                console.log(element['urlToImage'])
              
              let news3=`
              <div class=" col-md-4 ">
              <div class="  card mb-4 shadow-sm">
                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${element['urlToImage']}"
                  preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                <div class="card-body">
                  <h5 class="card-title">${element['title']}</h5>
                  <p class="card-text">${element['content']}</p>
                  <a href="${element['url']}" class="btn btn-primary" target="_blank">Read More Here</a>
                </div>
              </div>
            </div>
        
            `
                
                newhtml3+=news3;
            });
            newsaccordian2.innerHTML=newhtml3;
        }
        else {
            console.log("error occured")
        }
    }

    xhr.send();

}

function changehtmlofnewaccordian3(){
    // <!-- 6545a231da474112b11ae756cd5f229e api key -->
    let newsaccordian3 = document.getElementById('newsaccordion3')

    // create an ajax get request
    // http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}  

    let source = "bbc-news"
    let apikey = "6545a231da474112b11ae756cd5f229e";
    let country="in"
    let category1="business"
    let category2="sports";
    let category3="science";
    let category4="health";
    let category5="technology";
    let category6="entertainment"
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=${country}&category=${category5}&apiKey=${apikey} `, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let articles = json.articles;
            // console.log(articles);
            let newhtml="";
            let newhtml2="";
            let newhtml3="";
            articles.forEach((element,index) => {
                console.log(element['urlToImage'])

                
              let news3=`
              <div class=" col-md-4 ">
              <div class="  card mb-4 shadow-sm">
                <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${element['urlToImage']}"
                  preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                <div class="card-body">
                  <h5 class="card-title">${element['title']}</h5>
                  <p class="card-text">${element['content']}</p>
                  <a href="${element['url']}" class="btn btn-primary" target="_blank">Read More Here</a>
                </div>
              </div>
            </div>
        
            `
                newhtml+=news;
                newhtml2+=news2;
                newhtml3+=news3;
            });
            newsaccordian3.innerHTML=newhtml3;
        }
        else {
            console.log("error occured")
        }
    }

    xhr.send();






}
function changehtmlofnewaccordian4(){
// <!-- 6545a231da474112b11ae756cd5f229e api key -->
let newsaccordian4 = document.getElementById('newsaccordion4')

// create an ajax get request
// http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}  


let apikey = "6545a231da474112b11ae756cd5f229e";
let country="in"

let category4="health";

const xhr = new XMLHttpRequest();
xhr.open('GET', `http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=${country}&category=${category4}&apiKey=${apikey} `, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newhtml="";
        let newhtml2="";
        let newhtml3="";
        articles.forEach((element,index) => {
            console.log(element['urlToImage'])
            let news = `
            <div class="card">
                    <div class="card-header" id="heading${index}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed"
                         type="button" data-toggle="collapse" data-target="#collapse${index}" 
                         aria-expanded="true" aria-controls="collapse${index}">
                    <b class="mx-3">Breaking News ${index+1} </b>          ${element['title']}
                        </button>
                    </h2>
                    </div>

                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsaccordion">
                        <div class="card-body">
                        ${element['content']}.<a href="${element['url']}" target="_blank"> Read More Here</a>   
                        </div>
                    </div>
            </div>`
            let news2=`<div class="row my-4">
            <div>
              <div class="card">
              <img src="${element['urlToImage']}" class="img-fluid" alt="Responsive image">
                <div class="card-body">
                  <h5 class="card-title "> ${element['title']}</h5>
                  
                  <p class="card-text">${element['content']}</p>
                  <a href="${element['url']}" target="_blank" class="btn btn-primary"> Read More Here</a>   
                </div>
              </div>
            </div>
          </div>`
          let news3=`
          <div class=" col-md-4 ">
          <div class="  card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${element['urlToImage']}"
              preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
            <div class="card-body">
              <h5 class="card-title">${element['title']}</h5>
              <p class="card-text">${element['content']}</p>
              <a href="${element['url']}" class="btn btn-primary" target="_blank">Read More Here</a>
            </div>
          </div>
        </div>
     
        `
            newhtml+=news;
            newhtml2+=news2;
            newhtml3+=news3;
        });
        newsaccordian4.innerHTML=newhtml3;
    }
    else {
        console.log("error occured")
    }
}

xhr.send();

}
function changehtmlofnewaccordian5(){
// <!-- 6545a231da474112b11ae756cd5f229e api key -->
let newsaccordian5 = document.getElementById('newsaccordion5')

// create an ajax get request
// http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}  

let source = "bbc-news"
let apikey = "6545a231da474112b11ae756cd5f229e";
let country="in"
let category1="business"
let category2="sports";
let category3="science";
let category4="health";
let category5="technology";
let category6="entertainment"
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=${country}&category=${category3}&apiKey=${apikey} `, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newhtml="";
        let newhtml2="";
        let newhtml3="";
        articles.forEach((element,index) => {
            console.log(element['urlToImage'])
            let news = `
            <div class="card">
                    <div class="card-header" id="heading${index}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed"
                         type="button" data-toggle="collapse" data-target="#collapse${index}" 
                         aria-expanded="true" aria-controls="collapse${index}">
                    <b class="mx-3">Breaking News ${index+1} </b>          ${element['title']}
                        </button>
                    </h2>
                    </div>

                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsaccordion">
                        <div class="card-body">
                        ${element['content']}.<a href="${element['url']}" target="_blank"> Read More Here</a>   
                        </div>
                    </div>
            </div>`
            let news2=`<div class="row my-4">
            <div>
              <div class="card">
              <img src="${element['urlToImage']}" class="img-fluid" alt="Responsive image">
                <div class="card-body">
                  <h5 class="card-title "> ${element['title']}</h5>
                  
                  <p class="card-text">${element['content']}</p>
                  <a href="${element['url']}" target="_blank" class="btn btn-primary"> Read More Here</a>   
                </div>
              </div>
            </div>
          </div>`
          let news3=`
          <div class=" col-md-4 ">
          <div class="  card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${element['urlToImage']}"
              preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
            <div class="card-body">
              <h5 class="card-title">${element['title']}</h5>
              <p class="card-text">${element['content']}</p>
              <a href="${element['url']}" class="btn btn-primary" target="_blank">Read More Here</a>
            </div>
          </div>
        </div>
     
        `
            newhtml+=news;
            newhtml2+=news2;
            newhtml3+=news3;
        });
        newsaccordian5.innerHTML=newhtml3;
    }
    else {
        console.log("error occured")
    }
}

xhr.send();

}
function changehtmlofnewaccordian6(){
// <!-- 6545a231da474112b11ae756cd5f229e api key -->
let newsaccordian6 = document.getElementById('newsaccordion6')

// create an ajax get request
// http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}  

let source = "bbc-news"
let apikey = "6545a231da474112b11ae756cd5f229e";
let country="in"
let category1="business"
let category2="sports";
let category3="science";
let category4="health";
let category5="technology";
let category6="entertainment"
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=${country}&category=${category6}&apiKey=${apikey} `, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newhtml="";
        let newhtml2="";
        let newhtml3="";
        articles.forEach((element,index) => {
            console.log(element['urlToImage'])
            let news = `
            <div class="card">
                    <div class="card-header" id="heading${index}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed"
                         type="button" data-toggle="collapse" data-target="#collapse${index}" 
                         aria-expanded="true" aria-controls="collapse${index}">
                    <b class="mx-3">Breaking News ${index+1} </b>          ${element['title']}
                        </button>
                    </h2>
                    </div>

                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsaccordion">
                        <div class="card-body">
                        ${element['content']}.<a href="${element['url']}" target="_blank"> Read More Here</a>   
                        </div>
                    </div>
            </div>`
            let news2=`<div class="row my-4">
            <div>
              <div class="card">
              <img src="${element['urlToImage']}" class="img-fluid" alt="Responsive image">
                <div class="card-body">
                  <h5 class="card-title "> ${element['title']}</h5>
                  
                  <p class="card-text">${element['content']}</p>
                  <a href="${element['url']}" target="_blank" class="btn btn-primary"> Read More Here</a>   
                </div>
              </div>
            </div>
          </div>`
          let news3=`
          <div class=" col-md-4 ">
          <div class="  card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${element['urlToImage']}"
              preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
            <div class="card-body">
              <h5 class="card-title">${element['title']}</h5>
              <p class="card-text">${element['content']}</p>
              <a href="${element['url']}" class="btn btn-primary" target="_blank">Read More Here</a>
            </div>
          </div>
        </div>
     
        `
            newhtml+=news;
            newhtml2+=news2;
            newhtml3+=news3;
        });
        newsaccordian6.innerHTML=newhtml3;
    }
    else {
        console.log("error occured")
    }
}

xhr.send();

}