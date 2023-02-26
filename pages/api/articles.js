
export async function getArticles() {
  const res = await fetch(`https://warehouse-app-ouh3cj4nwa-ew.a.run.app/api/article`)

  const data = await res.json()
  return data
}

