var courses = [{
    image: './images/javascriptDef.png',
    title: 'what is javascript?',
    category: 'JS',
    price: 10
},
{
    image: './images/htmlBasics.PNG',
    title: 'basics of HTML',
    category: 'HTML',
    price: 20
},
{
    image: './images/htmlElements.png',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 30
},
{
    image: './images/cssSelectors.jpg',
    title: 'CSS selectors',
    category: 'CSS',
    price: 40
},
{
    image: './images/javascriptVariables.png',
    title: 'variables and data type ',
    category: 'JS',
    price: 50
},
{
    image: './images/javascriptOperators.png',
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: 60
},
{
    image: './images/htmlAttrVal.jpg',
    title: 'HTML attributes and values',
    category: 'HTML',
    price: 70
},
{
    image: './images/cssProperties.png',
    title: 'CSS properties',
    category: 'CSS',
    price: 80
},
{
    image: './images/javascriptObjects.png',
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: 90
},
{
    image: './images/cssMesures.png',
    title: 'mesures and unites of CSS',
    category: 'CSS',
    price: 100
},
{
    image: './images/cssAnimation.png',
    title: 'CSS animations',
    category: 'CSS',
    price: 110
},
{
    image: './images/javascriptFunctions.png',
    title: 'The basics of javascript',
    category: 'JS',
    price: 120
},
{
    image: './images/javascriptEvents.png',
    title: 'javascript events',
    category: 'JS',
    price: 130
},
{
    image: './images/cssColors.png',
    title: 'css colors',
    category: 'css',
    price: 140
},
{
    image: './images/phpBasics.png',
    title: 'getting started with php',
    category: 'php',
    price: 150
},
{
    image: './images/javascriptFunctions2.png',
    title: 'functions and loops with javascript',
    category: 'JS',
    price: 160
},
{
    image: './images/phpDataBase.png',
    title: 'connecting to database using PHP',
    category: 'PHP',
    price: 170
},
{
    image: './images/phpCRUD.png',
    title: 'manipulating crud using php',
    category: 'php',
    price: 180
},
{
    image: './images/javascriptDOM.png',
    title: 'DOM the power of javascript',
    category: 'JS',
    price: 190
},
{
    image: './images/course3.jpeg',
    title: 'PHP functions',
    category: 'PHP',
    price: 200
},
{
    image: './images/course2.jpeg',
    title: 'basics of HTML',
    category: 'html',
    price: 210
}

]

	
var cont = document.querySelector('.cont'),
ls = document.querySelector('#ls');

let Coursesnb= (image, titre, prix)=> {
    let div = document.createElement('div');
    div.setAttribute('class', 'card text-center col-3 me-2 mb-2');
    let img = document.createElement('img');
    img.setAttribute('src',image)
    img.setAttribute('class','img_crd ')

    let db = document.createElement('div')
 
    let ntitre = document.createElement('h2');
    ntitre.setAttribute('class', 'card-title');
    let xtitre = document.createTextNode(titre);
    ntitre.appendChild(xtitre);

    let span = document.createElement('span');
    span.appendChild(document.createTextNode(prix + '€'));

    div.appendChild(img);
    db.appendChild(ntitre);
    db.appendChild(span);
    div.appendChild(db)
    cont.append(div)
}


courses.forEach((el) => {
    Coursesnb(el.image, el.title, el.price);
})

let Categories = (cat)=>{
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(cat));
    li.setAttribute('class', 'list-group-item');
    li.id=cat;
    ls.append(li);
}
let categories = ['all', ...new Set(courses.map((v) => v.category.toLowerCase()))]

categories.forEach((v) => {
    Categories(v);
})



let search = ()=>{
    let result;
    let cat = document.getElementsByClassName('form-control')[0].value
    document.getElementById('tof').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].title.toLowerCase().includes(cat.toLowerCase().trimStart())){
            Coursesnb(courses[i].image,courses[i].title,courses[i].price)
        }
    }
    if(cat =="")
        courses.forEach((el)=>{
            Coursesnb(el.image,el.title,el.price)
        })
}
document.getElementById('search').addEventListener('keyup',search)



document.getElementById('all').addEventListener('click',()=>{
    document.getElementById('tof').innerHTML = " "
    courses.forEach((el) => {
        Coursesnb(el.image, el.title, el.price);
    })
})
document.getElementById('js').addEventListener('click',()=>{
    document.getElementById('tof').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()==="js"){
            Coursesnb(courses[i].image,courses[i].title,courses[i].price)
        }
    }
})
document.getElementById('html').addEventListener('click',()=>{
    document.getElementById('tof').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()==="html"){
            Coursesnb(courses[i].image,courses[i].title,courses[i].price)
        }
    }
})
document.getElementById('css').addEventListener('click',()=>{
    document.getElementById('tof').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()==="css"){
            Coursesnb(courses[i].image,courses[i].title,courses[i].price)
        }
    }
})
document.getElementById('php').addEventListener('click',()=>{
    document.getElementById('tof').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()==="php"){
            Coursesnb(courses[i].image,courses[i].title,courses[i].price)
        }
    }
})


let val=()=>{
    let value =document.getElementById('range').value
    document.getElementById('val').innerHTML = "Value : "+ value +" €"
    document.getElementById('range').addEventListener('click',()=>{
    document.getElementById('tof').innerHTML = " "
        for(let i =0;i<courses.length;i++){
            if(courses[i].price <= value){
                Coursesnb(courses[i].image,courses[i].title,courses[i].price)
            }
           
        }
    })
}



    