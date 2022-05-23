let banner = document.querySelector('.banner')
let pics = document.querySelectorAll('.banner ul li')
let prev = document.querySelector('.l-arrow')
let next = document.querySelector('.r-arrow')
let cilcles = document.querySelectorAll('.banner ol li')
for (let i = 0; i < cilcles.length; i++) {
  cilcles[i].addEventListener('mouseenter', function () {
    document.querySelector('.banner ol .active').classList.remove('active')
    this.classList.add('active')
    document.querySelector('.banner ul .active').classList.remove('active')
    pics[i].classList.add('active')

    index = i
  })
}
let index = 0;

function change() {
  document.querySelector('ol .active').classList.remove('active')
  cilcles[index].classList.add('active')
  document.querySelector('ul .active').classList.remove('active')
  pics[index].classList.add('active')
}
prev.addEventListener('click', function () {
  index--
  index = (cilcles.length + index) % cilcles.length
  change()
})
next.addEventListener('click', function () {
  index++
  index = index % cilcles.length
  change()
})
let timer = setInterval(function () {
  next.click()
}, 1000)
banner.addEventListener('mouseenter', function () {
  clearInterval(timer)
})
banner.addEventListener('mouseleave', function () {
  timer = setInterval(function () {
    next.click()
  }, 1000)
})


let box = document.querySelector('.common-floor .box2')
let imgs = document.querySelectorAll('.common-floor .box2 ul li')
let boxCircles = document.querySelectorAll('.common-floor .box2 ol li')
for (let i = 0; i < boxCircles.length; i++) {
  boxCircles[i].addEventListener('mouseenter', function () {
    document.querySelector('.common-floor .box2 ol .active').classList.remove('active')
    this.classList.add('active')
    document.querySelector('.common-floor .box2 ul .active').classList.remove('active')
    imgs[i].classList.add('active')

    index2 = i
  })
}
let index2 = 0

function change2() {
  document.querySelector('.common-floor .box2 ol .active').classList.remove('active')
  boxCircles[index2].classList.add('active')
  document.querySelector('.common-floor .box2 ul .active').classList.remove('active')
  imgs[index2].classList.add('active')
}
let timer2 = setInterval(function () {
  index2++
  index2 = index2 % boxCircles.length
  change2()
}, 1000)
box.addEventListener('mouseenter', function () {
  clearInterval(timer2)
})
box.addEventListener('mouseleave', function () {
  timer2 = setInterval(function () {
    index2++
    index2 = index2 % boxCircles.length
    change2()
  }, 1000)
})


let flag = true
window.addEventListener('scroll', function () {
  let aside = document.querySelector('.aside-floor')
  let items = document.querySelectorAll('.aside-floor li')
  let floor = document.querySelectorAll('.common-floor')

  let dTop = document.documentElement.scrollTop
  let fun = document.querySelector('.fun')
  let funTop = fun.offsetTop

  function toggleTool() {
    if (dTop >= funTop) {
      aside.style.display = 'block'
    } else {
      aside.style.display = 'none'
    }
  }

  toggleTool()
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
      document.querySelector('.aside-floor .current').classList.remove('current')
      this.classList.add('current')
      document.documentElement.scrollTop = floor[i].offsetTop
    })
  }
  if (flag) {
    floor.forEach((item, i) => {
      if (dTop >= item.offsetTop - 250) {
        document.querySelector('.aside-floor .current').classList.remove('current')
        items[i].classList.add('current')
      }
    })
  }
})