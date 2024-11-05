// const name = 'beery';
// const gender = 'male'
// const age = 18
// const haircolor = 'lightblack';
// const hairstyle = 'curley'
// const weight = 50;
// const height = 168;

// const namemira = 'mire';
// const gendermira = 'female'
// const agemira = 22
// const haircolormira = 'lightblack';
// const hairstylemira = 'straight'
// const weightmira = 50;
// const heightmira = 170;

// objact is a collection of named data items, grouped in {}
const mira = {
  name: 'mira',
  gender: 'female',
  age: 22,
  haircolor: 'lightblack',
  hairstyle: 'straight',
  weight: 50,
  height: 170
}
//alert(mira);


//alert(mira.name)
//alert(mira.age)
// alert(`her name is ${mira.name}`)

mira.hobby = `shopping`;

//alert(`her name is ${mira.name} and her hobby is ${mira.hobby}`);

//delete mira.hobby;
//alert(`her name is ${mira.name} and her hobby is ${mira.hobby});

// const yoav = mira;
// alert (`his name is ${yoav.name} and his age is ${yoav.age}`);
// yoav.name = 'yoav';
// alert(`his name is ${yoav.name} and his age is ${yoav.age}`);
// alert(`his name is ${mira.name} and his age is ${mira.age}`);

// alert(mira) // [object object]

alert(mira.name)
alert(mira['name'])

// for in loop , a special loop to iterate objacts
for(const property in mira) {
  document.write(`mira ${property} is: ${mira[property]} <br>`)
}