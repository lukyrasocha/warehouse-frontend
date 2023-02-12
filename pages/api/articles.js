
export async function getArticles() {
  //const res = await fetch(`https://app-v1-bhlby76vvq-uc.a.run.app/api/article`)
  const res = await fetch('http://127.0.0.1:8080/api/article')

  const data = await res.json()
  return data
}

