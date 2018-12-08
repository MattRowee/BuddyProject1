var ConnorObject = {
    firstName: "Connor",
    lastName: "FitzGerald",
    favoriteFoods: ["Pizza", "Beef jerky"],
    firstJob: "telemarketing",
    dreamJob: "astronaut",
    greatestFear: "the whole goddamn ocean",
    hometown: "Sissonville, WV",
    secretTalents: ["making situations awkward", "surfing"],
    wouldSkyDive: true,
    petInfo: {
        type: "cat",
        name: "Oscar"
    }
}

var htmlstring = `
    <h1 class= "partnername">${ConnorObject.firstName}  ${ConnorObject.lastName}</h1>
    <ul class= "foodlist"> Hombre's Favorite Foods Include:
        
        <li class= "fooditem1">${ConnorObject.favoriteFoods[0]}
        <li class= "fooditem2">${ConnorObject.favoriteFoods[1]}
    <p class= "firstjob">First Job: ${ConnorObject.firstJob}</p>
    <p class= "dreamjob">Dream Job: ${ConnorObject.dreamJob}</p>
    <p class= "fears">Greatest Fear: ${ConnorObject.greatestFear}</p>
    <p class= "homet">Hometown: ${ConnorObject.hometown}</p>
    <p class= "talents">Secret Talents: ${ConnorObject.secretTalents[0]} and ${ConnorObject.secretTalents[1]}</p>
    <p class= "skydive">Would this dude straight up just jump out of a plane? ${ConnorObject.wouldSkyDive}
    <p class= "pets"> Connor is the guardian of a ${ConnorObject.petInfo.type} named ${ConnorObject.petInfo.name}
    `
document.querySelector("#personal-website").innerHTML= htmlstring
