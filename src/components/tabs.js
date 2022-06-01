import axios from 'axios'

const topics = ["javascript","bootstrap","technology","jquery","node.js"]

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topicsWrap = document.createElement("div");

  topics.forEach((linkText) => {
    const link = document.createElement("div");
    topicsWrap.appendChild(link);
    link.textContent = linkText;
  })

  topicsWrap.classList.add("topics");

  return topicsWrap;
}




const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

//   const element = document.getElementsByClassName(selector)[0];

  
//  const  url_string = "http://localhost:5001/api/topics";
//   fetch(url_string).then((r)=>{r.text().then((d)=>{
//       let topics = ["javascript","bootstrap","technology","jquery","node.js"];
//       console.log(topics);
//       topics_data=tabs(topics);
//       element.appendChild(topics_data);
//   })})
// }

// for (let i = 0; i < topics.length; i++){
//     axios.get('http://localhost:5001/api/topics/')
//     .then (resp => {
//       document.querySelector('.tabs-container').appendChild(Tabs(resp.data))
//     })
  }











export { Tabs, tabsAppender }
