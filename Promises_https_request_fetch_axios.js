function adddb() {
  return new Promise((resolve, reject) => {
    let net = Math.floor(Math.random() * 10 + 1);
    if (net > 4) {
      resolve("success : fast net");
    } else {
      reject("Failure : week net");
    }
  });
}

// Promise chaining
adddb()
  .then((resolve) => {
    console.log(resolve);
    console.log("mesg 1 add :");
    return adddb();
  })
  .then((resolve) => {
    console.log(resolve);
    console.log("mesg 2 add :");
    return adddb();
  })
  .then((resolve) => {
    console.log(resolve);
    console.log("mesg 3 add :");
  })
  .catch((reject) => {
    console.log(reject);
    console.log("mesg 1 not add :");
  });

let h1 = document.querySelector("h1");

function change(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve();
    }, delay);
  });
}

async function show() {
  await change("red", 3000);
  console.log("changed");
  await change("blue", 2000);
  console.log("changed");
  await change("green", 1000);
  console.log("changed");
}
show();

async function hello() {
  return "hello";
}
hello();
let jsondata = '{"1": sk , "id":234,"role":"SDE-1"}';
let obgjs = JSON.parse(jsondata);

let newjson = JSON.stringify(obgjs);

// sending https request
let url = "https://catfact.ninja/fact";
async function getres() {
  let res = await fetch(url);
  let data = await res.json();
  let heading = document.querySelector("h1");
  heading.innerText = data.fact;
}
async function barr() {
  while (true) {
    await getres();
    await new Promise((reslove) => {
      console.log(reslove);
      setTimeout(reslove, 2000);
    });
  }
}
barr();

// axios keyword
let url11 = "https://catfact.ninja/fact";
async function getres() {
  let res = await axios.get(url11);
  console.log(res);
let heading = document.querySelector("h1");
heading.innerText = res.data.fact;
}
async function barr() {
while (true) {
await getres();
  await new Promise((reslove) => {
    console.log(reslove);
    setTimeout(reslove, 1000);
  });
}
}
barr();

// headers
const url1 = "https://icanhazdadjoke.com/";
async function some() {
  try {
    let hesd = { headers: { Accept: "application/json" } };
    let res = await axios.get(url1, hesd);
    let heading = document.querySelector("h1");
    console.log(res.data);
    heading.innerText = res.data.joke;
  } catch (e) {
    console.log(e);
  }
}
some();


let url2 = "http://universities.hipolabs.com/search?name=india";
let ul = document.querySelector("#list");

async function colleges() {
  try {
    let biglist = await axios.get(url2);
    let list = biglist.data;
    console.log(list);
    for (col of list) {
      let li = document.createElement("li");
      let cont = col.country;
      console.log(cont);
      if (cont == "India") {
        li.innerText = col.name;
        let p = document.createElement("p");
        p.innerText = col.country;
        ul.appendChild(li);
        li.appendChild(p);
      }
    }
  } catch (e) {
    console.log("error.", e);
  }
}
colleges();
