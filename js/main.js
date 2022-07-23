// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Karmani',
    job: 'founder and ceo of karmani',
    img: '../img/testimonials/profile_testimonials.svg',
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 2,
    name: 'Susan Smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: 'Anna Johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 4,
    name: 'Peter Jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 5,
    name: 'Bill Anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
]

const img = document.querySelector('#user-img')
const author = document.querySelector('.testimonials-card-title')
const job = document.querySelector('.testimonials-card-subtitle')
const info = document.querySelector('.testimonials-card-description')
const prevBtn = document.querySelector('.arrow-left')
const nextBtn = document.querySelector('.arrow-right')

let currentItem = 0

window.addEventListener('DOMContentLoaded', showReview)

function showReview() {
  const item = reviews[currentItem]
  img.src = item.img
  img.alt = item.name
  author.textContent = item.name
  job.textContent = item.job.toUpperCase()
  info.textContent = item.text
}

nextBtn.addEventListener('click', function () {
  currentItem++
  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showReview()
})

prevBtn.addEventListener('click', function () {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showReview()
})

// validate email

const emailField = document.querySelector('input[type=email]')
const button = document.querySelector('#btnSubmit')
const email = emailField.value
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!re.test(email)) {
    emailField.classList.add('shake')
    emailField.focus()
  }
  return re.test(String(email).toLowerCase())
}
button.addEventListener('click', function (e) {
  if (!validateEmail(email)) {
    emailField.focus()
  }
})
