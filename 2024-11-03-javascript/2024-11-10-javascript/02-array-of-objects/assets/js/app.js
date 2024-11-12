const mira = {
  name: 'mira',
  age : 22, 
  gender : 'female',
  city : 'petach tiqwa'

}
const yoav = {
  name: 'yoav',
  age : 22, 
  gender : 'male',
  city : 'herzliya'

}
const beery = {
  name: 'beery',
  age : 18, 
  gender : 'male',
  city : 'holon'
}

const osher = {
  name: 'osher',
  age : 22, 
  gender : 'male',
  city : 'givat shmuel'
}

const grades = [100, 96, 55]
const animals = ['dog', 'cat', 'fish']
const friends = [mira, yoav, beery, osher]

for(const friend of friends){
  console.log(`properties of ${friend.name}`)
  for(const property in friend)
      console.log(`${property} valua is ${friend[property]}`)
}

// הפעולה הורידה את יואב מהחברים שלי והציגה את מירה בארי ואושר
// friends.splice(1,1);

// for(const friend of friends) {
//     console.log(`${friend.name} is my friend`)

// }

console.log(`i have ${friend.name} friends`)

friends.splice(1,1)

console.log(`i have ${friends.length} friends`)

const musicBands = [{
  name: 'nirvana',
  style: 'rock'
},{
  name: 'betels',
  style: 'rock'
},{
  name:'mashina',
  style: 'israeli'
}
]

console.log(`there are ${musicBands.length} bands in my collection`);