//VARIABLE a container that stores value


// let thisname = 'nandy';
// let price = 3123;
// let gst = 10.1;

// console.log(`name of the product${thisname}`)
// console.log(`totall cost of the thing ${price}`)
// console.log(`totall tax${gst}`)
// let facebook = true
// let whatsapp = false
// let insta = true

// console.log(`now online ${facebook}`)
// console.log(`now offline${whatsapp}`)
// console.log(`now online ${insta}`)

// let myname ="nandhakumar"
// let age = 23;
// let myland ="london"

// document.getElementById("p1").textContent = `my name ${myname}`;
// document.getElementById("p2").textContent = `my age ${age}`;
// document.getElementById("p3").textContent = `my location ${myland}`;

//Arithmetic operators

// let amount = 40

// amount = amount +1
// amount = amount -1
// amount = amount *1
// amount = amount /4
// amount = amount **2

// amount += 1
// amount -= 1
// amount *= 5
// amount /= 1
// amount **= 1
// amount++
// amount--


// console.log(amount)

// operator precedence
// 1 parenthesis ()
// 2 exponents 
// 3 multiplications & division & modulo
// 4 addition & subtraction


// let result = 2 + 3 - 4 * 6 % 4

// console.log(result)


//user input 

// let username;

// username = window.prompt("Enter your name")

// console.log(username)

let username ;

document.getElementById("mybutton").onclick = function(){
    username = document.getElementById("myname").value;
    document.getElementById("data").textContent = `this is your id ${username}`
}