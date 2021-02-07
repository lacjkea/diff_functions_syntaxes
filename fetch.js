// ONE SLIDE TO RULE THEM ALL
fetch("SOME-API-ENDPOINT")
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    //We have the data
    console.log(data);
  })
  .catch((e) => {
    //Woops, something went wrong
    console.error("An error occured:", e.message);
  });

//   FETCH - ES6
fetch("https://somesite.com/api/...")
  .then((e) => e.json())
  .then(buildIt);

function buildIt(data) {
  console.log(data);
}

const ninjas = [
  {
    name: "Cole",
    power: "earth",
  },
  {
    name: "Zane",
    power: "ice",
  },
];

//For each ninja, call the function doYourThing
ninjas.forEach(doYourThing);

/* The ninjas are passed to the function as
  'nin' one at a time */
function doYourThing(nin) {
  console.log(`${nin.name} has a special power: ${nin.power}`);
}
