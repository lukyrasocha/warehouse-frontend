import Head from 'next/head';
import Products from '../components/Products';
import Image from 'next/image'
import { getProducts } from './api/products';


export default function Home({ data }) {
  console.log(data);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Computas Warehouse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Computas Warehouse
        </h1>

        <p className="mt-3 text-2xl">
          Disenchant a product and update all your articles!
        </p>
      <Products data={ data }/>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/logo.svg" alt="Computas" width={120} height={16} />
        </a>
      </footer>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const data = await getProducts();
  // Pass data to the page via props
  return { props: { data } }
}
