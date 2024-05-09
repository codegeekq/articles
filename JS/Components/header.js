let siteName = 'Code Geek'
let header = document.querySelector('.header')
header.innerHTML = `  
<div>
      <a href="../../../" class="logo" style="color: inherit;text-decoration: none;margin: auto">${siteName} <i class="bi bi-code-slash"></i></a>
    </div>

    <div class="minu">
      <div class="open-icon" style="margin-right: 1px">
        <a style="color: inherit" href="../../../pages/search.html"><i class="bi bi-search" id="search" style="color: inherit;margin-right: -1px;font-size: 20px;margin-left: 10px"></i></a>
        <i class="bi bi-eye" id="read" style="color: inherit;margin-left: 5px"></i>
        <i class="bi bi-list" id="open" style="color:inherit;"></i>
        
      </div>
      <div class="list" id="list">
        <div class="close-icon" id="close">
          <i class="bi bi-x-lg"></i>
        </div>
        <div class="hidden-list">
          <div>
            <a href="../../../" class="list-item">
              <i class="bi bi-house"></i>
              Home .
            </a>
            <a href="../../contact.html" class="list-item">
              <i class="bi bi-link-45deg"></i>
              Contact .
            </a>
            <a href="../../about.html" class="list-item">
              <i class="bi bi-info-circle-fill"></i>
              About Us .
            </a>
            <a href="../../developer.html" class="list-item">
              <i class="bi bi-code-slash"></i>
              Developer .
            </a>
            <a href="https://ask-ahmad.web.app" class="list-item">
              <i class="bi bi-globe2"></i>
                AhDev official site .
            </a>
            <br><br><br>

          

          </div>
        </div>
      </div>
    </div>
    <!--<div class="search">
      <a href="" style="color: inherit;">
        <i class="bi bi-search"></i>
      </a>
    </div>-->
`
let list = document.getElementById('list')
let open = document.getElementById('open')
let close = document.getElementById('close')
let main = document.getElementById('main')


open.onclick = function() {
  list.style.marginLeft = '-0%'
}

close.onclick = function() {
  list.style.marginLeft = '-60%'
}

let read = document.getElementById('read')

read.onclick = function(){
  document.body.classList.toggle('read-mode')
}