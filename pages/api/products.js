import { TABLE, CHAIR, SOFA } from "@/data/items"

export async function getProducts() {

  const res = await fetch(`https://app-v1-bhlby76vvq-uc.a.run.app/api/product`)
  const data = await res.json()
  return data
}

export async function disenchantProduct(item, setRefresh) {
  //await fetch(`https://app-v1-bhlby76vvq-uc.a.run.app/api/Product/delete/${item}`)
  await fetch('https://app-v1-bhlby76vvq-uc.a.run.app/api/Product/delete/' + item, {
    method: 'DELETE',
    mode: 'cors',
  })
  .then(res => res.text()) 
  .then(res => console.log(res))
  setRefresh();
}

export async function addProduct(item, setRefresh) {
  //await fetch(`https://app-v1-bhlby76vvq-uc.a.run.app/api/Product/delete/${item}`)

  if (item === "Sofa"){
    var product = SOFA;
  } else if (item === "Dining Chair") {
    var product = CHAIR;
    
  } else if (item === "Dining Table") {
    var product = TABLE;
  }

  await fetch('https://app-v1-bhlby76vvq-uc.a.run.app/api/Product', {
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