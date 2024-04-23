// let request = new XMLHttpRequest()
// request.open("GET", "https://ahmadtaech.github.io/ahdevapi/API.json")
// request.responseType = 'json'
// request.send()
// request.onload = function() {
//   let articlesArray = request.response.ahdev
//   let contenr = document.getElementById('item')
  
//   for (var i = 1; i < request.response.ahdev.length; i++) {
//     contenr.innerHTML += `
//     <div class="item-head">
//     <img src="./${articlesArray[i].posterLogo}" alt="" style="height: 50px;background: #000;border-top-left-radius: 10px;border-bottom-left-radius: 10px;margin-right: 5px">
//       <div class="typographys">
//         <div class="role-name"><i class="bi bi-person-bounding-box"></i> ${articlesArray[i].poster}</div>
//         <div class="date-tow"><i class="bi bi-calendar-date"></i> ${articlesArray[i].date}</div>
//       </div>
//     </div>
  
//     <div class="item-body">
//       <h5 style='color :#06c;'>${articlesArray[i].articleName}</h5>
//       ${articlesArray[i].shortArticle}
//       <a style="text-decoration:none;" href="./${articlesArray[i].learnMoreLink}">learn more</a>
//     </div>
//   <hr>
//   `
//   }
// }

import { articlesArray } from '../API.js'

let contenr = document.getElementById('item')

for (var i = 1; i < articlesArray.length; i++) {
  contenr.innerHTML += `
  <div class="item-head">
  <img src="./${articlesArray[i].posterLogo}" alt="" style="height: 50px;background: #000;border-top-left-radius: 10px;border-bottom-left-radius: 10px;margin-right: 5px">
    <div class="typographys">
      <div class="role-name"><i class="bi bi-person"></i> ${articlesArray[i].poster}</div>
      <div class="date-tow"><i class="bi bi-calendar-date"></i> ${articlesArray[i].date}</div>
    </div>
  </div>

  <div class="item-body">
    <img src="./${articlesArray[i].articleImag}" class="item-img" />
    <div style="padding: 15px">
    <h5 style='color :#06c;'>${articlesArray[i].articleName}</h5>
    ${articlesArray[i].shortArticle}
    <a style="text-decoration:none;" href="./${articlesArray[i].learnMoreLink}">learn more</a>
    </div>
  </div>
<hr>
`
}

let programming = document.getElementById('programming')
let all = document.getElementById('all')
let tech = document.getElementById('tech')
let mobile = document.getElementById('mobile')
let filterType = document.getElementById('filterType')
programming.classList.add('activ')
programming.classList.remove('activ')
programming.classList.remove('activ')
programming.classList.remove('activ')


// for (var i = 0; i < articlesArray.length; i++) {
//   if (articlesArray[i].category == 'programming' || 'technology' || 'mobiles review') {

//   }
// }

all.onclick = function() {
  contenr.innerHTML = ''
  all.classList.add('activ')
  programming.classList.remove('activ')
  mobile.classList.remove('activ')
  tech.classList.remove('activ')
  filterType.innerHTML = 'All Categories';
  for (var i = 0; i < articlesArray.length; i++) {
    if (articlesArray[i].category) {

      contenr.innerHTML += `
        <div class="item-head">
        <img src="./${articlesArray[i].posterLogo}" alt="" style="height: 50px;background: #000;border-top-left-radius: 10px;border-bottom-left-radius: 10px;margin-right: 5px">
          <div class="typographys">
            <div class="role-name"><i class="bi bi-person"></i> ${articlesArray[i].poster}</div>
            <div class="date-tow"><i class="bi bi-calendar-date"></i> ${articlesArray[i].date}</div>
          </div>
        </div>

        <div class="item-body">
    <img src="./${articlesArray[i].articleImag}" class="item-img" />
    <div style="padding: 15px">
    <h5 style='color :#06c;'>${articlesArray[i].articleName}</h5>
    ${articlesArray[i].shortArticle}
    <a style="text-decoration:none;" href="./${articlesArray[i].learnMoreLink}">learn more</a>
    </div>
  </div>
      <hr>
      `
    }
  }
}

tech.onclick = function() {
  contenr.innerHTML = ''
  all.classList.remove('activ')
  programming.classList.remove('activ')
  mobile.classList.remove('activ')
  tech.classList.add('activ')
  filterType.innerHTML = 'Technology';
  for (var i = 0; i < articlesArray.length; i++) {
    if (articlesArray[i].category == 'technology') {

      contenr.innerHTML += `
          <div class="item-head">
          <img src="./${articlesArray[i].posterLogo}" alt="" style="height: 50px;background: #000;border-top-left-radius: 10px;border-bottom-left-radius: 10px;margin-right: 5px">
            <div class="typographys">
              <div class="role-name"><i class="bi bi-person"></i> ${articlesArray[i].poster}</div>
              <div class="date-tow"><i class="bi bi-calendar-date"></i> ${articlesArray[i].date}</div>
            </div>
          </div>

          <div class="item-body">
              <img src="./${articlesArray[i].articleImag}" class="item-img" />
              <div style="padding: 15px">
              <h5 style='color :#06c;'>${articlesArray[i].articleName}</h5>
              ${articlesArray[i].shortArticle}
              <a style="text-decoration:none;" href="./${articlesArray[i].learnMoreLink}">learn more</a>
              </div>
            </div>
        <hr>
        `
    }
  }
}

mobile.onclick = function() {
  contenr.innerHTML = ''
  all.classList.remove('activ')
  programming.classList.remove('activ')
  mobile.classList.add('activ')
  tech.classList.remove('activ')
  filterType.innerHTML = 'Mobiles Review';

  for (var i = 0; i < articlesArray.length; i++) {
    if (articlesArray[i].category == 'mobiles review') {
      contenr.innerHTML += `
            <div class="item-head">
            <img src="./${articlesArray[i].posterLogo}" alt="" style="height: 50px;background: #000;border-top-left-radius: 10px;border-bottom-left-radius: 10px;margin-right: 5px">
              <div class="typographys">
                <div class="role-name"><i class="bi bi-person"></i> ${articlesArray[i].poster}</div>
                <div class="date-tow"><i class="bi bi-calendar-date"></i> ${articlesArray[i].date}</div>
              </div>
            </div>

            <div class="item-body">
            <center>
    <img src="./${articlesArray[i].articleImag}" class="item-img" />
    </center>
    <div style="padding: 15px">
    <h5 style='color :#06c;height:50%;'>${articlesArray[i].articleName}</h5>
    ${articlesArray[i].shortArticle}
    <a style="text-decoration:none;" href="./${articlesArray[i].learnMoreLink}">learn more</a>
    </div>
  </div>
          <hr>
          `
    }
  }
}

programming.onclick = function() {
  contenr.innerHTML = ''
  all.classList.remove('activ')
  programming.classList.add('activ')
  mobile.classList.remove('activ')
  tech.classList.remove('activ')
  filterType.innerHTML = 'Programming';
  for (var i = 0; i < articlesArray.length; i++) {
    if (articlesArray[i].category == 'programming') {
      contenr.innerHTML += `
              <div class="item-head">
              <img src="./${articlesArray[i].posterLogo}" alt="" style="height: 50px;background: #000;border-top-left-radius: 10px;border-bottom-left-radius: 10px;margin-right: 5px">
                <div class="typographys">
                  <div class="role-name"><i class="bi bi-person"></i> ${articlesArray[i].poster}</div>
                  <div class="date-tow"><i class="bi bi-calendar-date"></i> ${articlesArray[i].date}</div>
                </div>
              </div>

              <div class="item-body">
                  <img src="./${articlesArray[i].articleImag}" class="item-img" />
                  <div style="padding: 15px">
                  <h5 style='color :#06c;'>${articlesArray[i].articleName}</h5>
                  ${articlesArray[i].shortArticle}
                  <a style="text-decoration:none;" href="./${articlesArray[i].learnMoreLink}">learn more</a>
                  </div>
                </div>
            <hr>
            `
    }
  }
}

