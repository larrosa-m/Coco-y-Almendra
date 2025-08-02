const products = [
  
//Galletas
    {
    id: '01',
    name: 'Galleta Vaini',
    description: 'Galleta crocante con sabor a vainilla',
    price: 1000,
    stock: 10,
    category: 'Galletas',
    image: 'https://i.postimg.cc/VsM6qdtq/IMG-20250527-WA0059.jpg'
 },
{
    id: '02',
    name: 'Galleta Amalimon',
    description: 'Galleta crocante con sabor a amapolas y limon',
    price: 1000,
    stock: 10,
    category: 'Galletas',
    image: 'https://i.postimg.cc/zXFGQ603/IMG-20250527-WA0062.jpg'
  },
 {   
    id: '03',
    name: 'Galleta Almelate',
    description: 'Galleta crocante con sabor a almendras con chocolate',
    price: 1000,
    stock: 10,
    category: 'Galletas',
    image: 'https://i.postimg.cc/qMT7j4c9/IMG-20250527-WA0061.jpg'
    },
    {   
    id: '04',
    name: 'Galleta Naranela',
    description: 'Galleta crocante con sabor a naranja con canela',
    price: 1000,
    stock: 10,
    category: 'Galletas',
    image: 'https://i.postimg.cc/P5f5nyRy/IMG-20250527-WA0060.jpg'
    },

//Alfajores
    {
    id: '05',
    name: 'Alfajor Dulcecho',
    description: 'Alfajor relleno de dulce de leche cubierto con chocolate',
    price: 1800,
    stock: 10,
    category: 'Alfajores',
    image: 'https://i.postimg.cc/W19bNrRv/IMG-20250528-WA0021.jpg'
    },
    {
    id: '06',
    name: 'Alfajor Maico',
    description: 'Alfajor de maicena relleno de dulce de leche cubierto con coco',
    price: 1800,
    stock: 10,
    category: 'Alfajores',
    image: 'https://i.postimg.cc/02Yzsb2k/file-00000000a420622f8a5b5fad477fe63f-1.png'
    },
    {
    id: '07',
    name: 'Alfajor Pista',
    description: 'Alfajor relleno de pasta de pistacho cubierto con chocolate sabor a pistacho',
    price: 2500,
    stock: 10,
    category: 'Alfajores',
    image: 'https://i.postimg.cc/tRV1BBKV/file-00000000a0a4622f9d0d26d7f2f1f242.png'
    },
    {
    id: '08',
    name: 'Alfajor chocos',
    description: 'Alfajor relleno de pasta de chocolate cubierto con chocolate',
    price: 2000,
    stock: 10,
    category: 'Alfajores',
    image: 'https://i.postimg.cc/BnrL9ydF/file-000000002ff0622fb1b56142bcda94c2-1.png'
    },

//Budines
    {
    id: '09',
    name: 'Budin Vaini',
    description: 'Budin de vainilla cubierto con glaseado de azucar',
    price: 4000,
    stock: 10,
    category: 'Budines',
    image: 'https://i.postimg.cc/BnNtjkKR/file-000000008c5861f5a6a95061bf311d5e.png'
    },
     {
    id: '10',
    name: 'Budin chocos',
    description: 'Budin de chocolate cubierto con glaseado de azucar',
    price: 4500,
    stock: 10,
    category: 'Budines',
    image: 'https://i.postimg.cc/Rhr0rzkJ/file-00000000877461f69e1a93dc276ceac7.png'
    },
   { 
    id: '11',
    name: 'Budin pista',
    description: 'Budin de pistacho cubierto con glaseado de azucar',
    price: 6000,
    stock: 10,
    category: 'Budines',
    image: 'https://i.postimg.cc/1ztXwB0X/file-000000005c5461f9a891a93ccdb2363e.png'
    },
     {
    id: '12',
    name: 'Budin Amalimon',
    description: 'Budin de amapolas y limon cubierto con glaseado de azucar',
    price: 4500,
    stock: 10,
    category: 'Budines',
    image: 'https://i.postimg.cc/YSZrgHqD/IMG-20250528-WA0028.jpg'
    },

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
     