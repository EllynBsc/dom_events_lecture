console.log("Hello from src/index.js!");


// WRITE ALL OF MY JS INTERPRETED BY THE BROWSER

// 1. selector the ul of players
// const list = document.querySelector('ul'); // select with the tag
// const list = document.querySelector("#players"); //select with the id
// const list = document.getElementById("players"); //select the id of players
// this one is more specific/more performant

// 2. Add some players in my list
// element_node.insertAdjacentHTML(position, content)
// list.insertAdjacentHTML('beforeend', "<li>Zakariae</li>")
// list.insertAdjacentHTML('beforeend', "<li>Francesco</li>")


// const list = document.querySelector("#players");
// const element = list.querySelector(".red");
// console.log(element.innerText);

// 3. SELECT MANY ELEMENTS

  // // 1. SELECT ALL OF THEM AND DISPLAY THEM ONE AT A TIME
  //   const countries = document.querySelectorAll("#fifa-wins li")
  //     // countries is a node list
  //   countries.forEach((country) => {
  //     console.log(country.style.color = "red")
  //   });

  // 2. ADD FRANCE to the list of fifa wins
      // grab the element, my element is an ordered list ol
    //   const listWinners = document.getElementById("fifa-wins")
    //   // insert france in the list of fifa-wins
    //   listWinners.insertAdjacentHTML('beforeend', '<li>France (2wins)</li>')
    // // node_element.insertAdjacentHTML(position, content)



// Select the p of my html and hide
// const paragraph = document.querySelector('p')
// paragraph.classList.add('green-color') //WATCH OUT DON'T PUT THE .


// FORM HTML
// grab the element which is the email of the form
// const email = document.querySelector("#email")
// // change the value of this email
// email.value = "hassan@gmail.com";




// i want to be able to select the innertext of my link
// const button = document.getElementById('home')

// console.log('text of my button:', button.innerText);
// console.log('html of my button:', button.innerHTML);
// console.log('value of wagon website', button.attributes.href.value);


// const boris = document.getElementById('user');
// console.log(boris.dataset.uid);
// console.log(boris.dataset.githubNickname);





// PLAYING WITH EVENTS

// I want to be able to have a circle image when I click on the image
  //1.grab the element we want to play with, the image
  // const image = document.querySelector('#romain')
  // console.log(image)

  // //2. create a class in your css file that makes the image circle

  // // 3. perform the event callback

  // // element.addEventListener(event_type, callback_function)

  // image.addEventListener('click', (event) => {
  //   console.log(event); //type of event getting executed, in our case it's a click
  //   console.log(event.currentTarget); //actual element/TARGET i want to be able to modify when the event is performed
  //   event.currentTarget.classList.toggle('circle-shape')
  // })



// I WANT TO BE ABLE TO TOGGLE THE CIRCLE CLASS ON ANY OF MY IMAGE
  // 1. Select all of my images
    const images = document.querySelectorAll('.img-413');
    console.log(images)
  // 2. create the class for circle shape (already done)
  // 3. perform the event callback

    images.forEach((img) => {
      img.addEventListener('click', (event) => {
        console.log('event type', event);
        console.log('current target', event.currentTarget)
        event.currentTarget.classList.toggle("circle-shape")
      })
    })





















































