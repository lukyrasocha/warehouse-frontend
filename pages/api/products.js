// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function getProducts() {

  const res = await fetch(`https://app-v1-bhlby76vvq-uc.a.run.app/api/product`)
  const data = await res.json()
  return data
}