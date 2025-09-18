export const products = [
  
]

export const getProducts = () => {
    let error = false    
  return new Promise((resolve, rejet) => {
    setTimeout(() => {
      if (error) {
        rejet('Error al cargar, intente más tarde')
        } else {
        resolve(products)
      }
    }, 2000)
  })
}

export const getOneProduct = (id) => {
return new Promise((resolve) => {
    setTimeout(() => {
        let oneProduct = products.find((prod) => prod.id === id)
        resolve(oneProduct)
    }, 2000)
})
}
     