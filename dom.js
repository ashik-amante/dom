const sections = document.querySelectorAll('section');
for(let section of sections){
    section.style.border = '2px solid steelblue'
    section.style.marginTop = '30px'
    section.style.padding = '30px'
    section.style.borderRadius = '30px'
    section.style.backgroundColor = 'lightgray'
}

const vlogContainer = document.getElementById('myVlog');
vlogContainer.style.backgroundColor = 'yellow'

const foodcontainer = document.getElementById('food-container');
foodcontainer.style.backgroundColor = 'green'