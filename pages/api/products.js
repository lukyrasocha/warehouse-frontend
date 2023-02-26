import { TABLE, CHAIR, SOFA } from "@/data/items"

export async function getProducts() {

  const res = await fetch(`https://warehouse-app-ouh3cj4nwa-ew.a.run.app/api/product`)
  const data = await res.json()
  return data
}

export async function disenchantProduct(item, setRefresh) {
  await fetch('https://warehouse-app-ouh3cj4nwa-ew.a.run.app/api/Product/delete/' + item, {
    method: 'DELETE',
    mode: 'cors',
  })
  .then(res => res.text()) 
  .then(res => console.log(res))
  setRefresh();
}

export async function addProduct(item, setRefresh) {
  if (item === "Sofa"){
    var product = SOFA;
  } else if (item === "Dining Chair") {
    var product = CHAIR;
    
  } else if (item === "Dining Table") {
    var product = TABLE;
  }

  await fetch('https://warehouse-app-ouh3cj4nwa-ew.a.run.app/api/Product', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(product)

  })
  .then(res => res.text()) 
  .then(res => console.log(res))

  setRefresh();
}