const showVat = (event) => {
    event.preventDefault()
    const price = +document.getElementById('price').value
    const vat = getVat(price)
    console.log(`the vat for ${price} is ${vat}`)
}

const getVat = (price) => {
    if(!price) throw new Error('price is required')
    price = +price
    if(typeof price !== 'number') throw new Error('price must be a number')
    if(price < 0) throw new Error('price must be a positive number')
    return  price * 0.17
}