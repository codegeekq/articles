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

let ar = [

  {
    langName: 'HTML',
    color: '#FB6000',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',
    img: 'html.png',
},
  {
    langName: 'CSS',
    color: '#06c',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',
    img: 'css.png',
},
  {
    langName: 'JavaScript',
    color: ' #FBB700 ',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',
    img: 'js.png',

  },
  {
    langName: 'TypeScript',
    color: '#06c',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',
    img: 'typescript.png',

  },
  {
    langName: 'Python',
    color: '#FBBB00',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'python.png',
  },
  {
    langName: 'PHP',
    color: '#9200FB',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'php.png',
  },
  {
    langName: 'Java',
    color: '#9F9883',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'java.png',
  },
  {
    langName: 'C',
    color: '#B200FF',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'c.png',
  },
  {
    langName: 'C#',
    color: '#B200FF',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'cs.png',
  },
  {
    langName: 'C++',
    color: '#005DFF',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'cpp.png',
  },
  {
  langName: 'Dart',
  color: '#005DFF',
  dic: ' The Language to build web pages structure',
  learnLink: '../pages/Front-end Road Map/html/lesson1.html',

  img: 'dart.png',
},
  {
  langName: 'Flutter',
  color: '#005DFF',
  dic: ' The Language to build web pages structure',
  learnLink: '../pages/Front-end Road Map/html/lesson1.html',

  img: 'flutter.png',
},
{
  langName: 'React js',
  color: '#005DFF',
  dic: ' The Language to build web pages structure',
  learnLink: '../pages/Front-end Road Map/html/lesson1.html',

  img: 'react.png',
},
  {
    langName: 'Angular js',
    color: '#970000',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'angular.png',
  },
  {
    langName: 'Vue js',
    color: '#00BB45',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'vue.png',
  },
  {
    langName: 'Next js',
    color: 'black',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'next.png',
  },
  {
    langName: 'Express js',
    color: '#9F9883',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'ex.png',
  },
  {
    langName: 'Django',
    color: '#01521F',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'django.png',
  },
  {
    langName: 'Flask',
    color: 'black',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'flask.png',
  },
  {
    langName: 'freeAPI',
    color: '#06c',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'freeAPI.png',
  },
  {
    langName: 'Laravel',
    color: '#FF0042',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'laravel.png',
  },
  {
    langName: 'Gulpjs',
    color: '#5A0202',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'gulp.png',
  },
  {
    langName: 'Pugjs',
    color: '#9F9883',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'pug.png',
  },
  {
    langName: 'Sass',
    color: '#FF00D2',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'sass.png',
  },
  {
    langName: 'Bootstarp',
    color: '#FF00D2',
    dic: ' The Language to build web pages structure',
    learnLink: '../pages/Front-end Road Map/html/lesson1.html',

    img: 'bootstrap.png',
  },

]
let cont = document.querySelector('.other-topics')
for (var i = 0; i < ar.length; i++) {
  cont.innerHTML += `
      <div class="topic">
        <h4 style="width:100%; display:flex;  justify-content: space-between;"><img style="height:50px;width:50px;background:#eee;border-radius:10px;paddin:5px;" src="/Images/Languages IMG/${ar[i].img}" ><span style="width:100%;margin-left:-10%;;text-align: center;">${ar[i].langName}</span></h4>
        <p>${ar[i].dic}</p>
        <button class="learn-topic"><a href=""><i class="bi bi-file-text" style="margin-right:10px;font-size:20px;"></i>Learn ${ar[i].langName}</a></button>
      </div><center><hr style="width:80%"></center>
  `
}






import { articlesArray } from '../API.js'

let contenr = document.getElementById('item')

for (var i = 1; i < articlesArray.length; i++) {
  contenr.innerHTML += `
  <div class="item-head">
  <img src="./${articlesArray[i].posterLogo}" alt="" style="height: 50px;background: #000;border-top-left-radius: 10px;border-bottom-left-radius: 10px;margin-right: 5px" class="poster-img">
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
        <img src="./${articlesArray[i].posterLogo}" alt="" style="height: 50px;background: #000;border-top-left-radius: 10px;border-bottom-left-radius: 10px;margin-right: 5px" class="poster-img">
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
          <img src="./${articlesArray[i].posterLogo}" alt="" style="height: 50px;background: #000;border-top-left-radius: 10px;border-bottom-left-radius: 10px;margin-right: 5px" class="poster-img">
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
            <img src="./${articlesArray[i].posterLogo}" alt="" style="height: 50px;background: #000;border-top-left-radius: 10px;border-bottom-left-radius: 10px;margin-right: 5px" class="poster-img">
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
              <img src="./${articlesArray[i].posterLogo}" alt="" style="height: 50px;background: #000;border-top-left-radius: 10px;border-bottom-left-radius: 10px;margin-right: 5px" class="poster-img">
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