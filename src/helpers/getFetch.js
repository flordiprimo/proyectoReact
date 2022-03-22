const productos = [
    {id: '1', name: 'The Strokes - The New Abnormal', categoria: 'vinilos', price: 5000, foto: '/images/the-strokes-the-new-abnormal.jpeg', stock: 9 },
    {id: '2', name: 'Daft Punk - Discovery', categoria: 'vinilos', price: 5000, foto: '/images/Daft-Punk-Discovery.png', stock: 5 },
    {id: '3', name: 'Unknown Mortal Orchestra - II', categoria: 'cds', price: 5000, foto: '/images/Unknown-Mortal-Orchestra-II.jpeg', stock: 5 },
  ]
  export const getFetch = new Promise((resolve,reject) =>{
    let condition = true
      if (condition) {
          setTimeout(() => {
              resolve(productos)                    
          }, 2000);
      } else {
          reject('404 - not found')        
      }
  })

