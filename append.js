const placeList = document.getElementById('food-list')
const li = document.createElement('li')
li.innerText = 'muraaaggg Pulao';

placeList.appendChild(li)


// ................

const mainContainer = document.getElementById('main')

// create section

const section = document.createElement('section')

const h1 = document.createElement('h1')
h1.innerText = 'My Sports'
section.appendChild(h1);


// ul 
const ul = document.createElement('ul')

// li

const li1 = document.createElement('li')
li1.innerText = 'cricket'

const li2 = document.createElement('li')
li2.innerText = 'tennis'

const li3 = document.createElement('li')
li3.innerText = 'football'


// append ul

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

// append section

section.appendChild(ul)

// main 
mainContainer.appendChild(section)


// easy system..........

const sectionDress = document.createElement('sfection')
sectionDress.innerHTML = `
    <h1>Dress section</h1>
    <ul>
        <li>t shirt</li>
        <li>pant</li>
        <li>cap</li>
    <ul>
`
mainContainer.appendChild(sectionDress)
