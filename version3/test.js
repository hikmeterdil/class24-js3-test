// Version 3

// 1.
// Write a function that:
// - Makes an API call using the Fetch API or the regular XMLHttpRequest
// - Uses the following URL: https://jsonplaceholder.typicode.com/users
// - Displays the "name", "email" and "city" of the first person inside an unordered list (created programmatically using JavaScript)
const body=  document.body;
const url ='https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(res=>res.json())
.then((data)=>{
    let output='';
    let slicedOut = data.slice(0,1);
    slicedOut.forEach(user=>
    
        output += `<ul>
            <li>name: ${user.name}</li>
            <li>email: ${user.email}</li>
            <li>adress: ${user.address.street}</li>
        </ul>`  
        
    ) 
body.innerHTML = output})

.catch(error){
        console.log(error);
}









2.
Write a function that:
- Takes in an array of strings:
const fruits = ["Strawberry", "Apple", "Papaya", "Banana", "Apricot", "Pear"];
- Returns an array with the fruits that start with the letter "P"

const pFruits = [];

function filterIfWithP(ar){
    ar.filter((fruit)=>{
        if(fruit[0] === 'P'){
       return pFruits.push(fruit);
    }
    })
    console.log(pFruits);
}

filterIfWithP(fruits)





3.
Using JavaScript only (adding HTML to index.html is NOT allowed), write a function that:
- Creates a button element (with text "click me!")
- Creates an empty image element and add it to the document.
- Inserts an image URL into the <img> tag, when the button is clicked
- Removes the button after the click
- Use the following image URL: https://thehub.dk/files/5ad4b4a9f9ac4aa13c3d2d58/logo_upload-6d537cf7e5de664db275b32b3c6ae12d.png

function funnyButton (){
    const img = document.createElement('img');
    const button = document.createElement('button');
    document.body.appendChild(button)
    button.textContent = "Click me!"
    button.addEventListener('click', ()=>{
        img.setAttribute('src',' https://thehub.dk/files/5ad4b4a9f9ac4aa13c3d2d58/logo_upload-6d537cf7e5de664db275b32b3c6ae12d.png' );
        button.remove();
    })

}