const inventory = [
    ["Onion", "Carrot", "Tomato", "Cucumber"],
    ["Apple", "Banana", "Peach", "Grapes", "Orange"],
     ["Wheat", "Flour"]
    
]
// let minLength = inventory [0] [0].length
let shortest = ''

let minLength = Infinity

// let max = 0

for(const category of inventory){
    for(const product of category){
        // task 1' print all the matrix 
        console.log(product)

        //task 2, calc the shortest
        if(product.length < minLength){
        minLength = product.length
        shortest=[product]
       
        }else if(product.length === minLength){
            shortest.push(product)
        }
    }
}

console.log(`shortest product is  ${shortest} with ${minLength} characters`)