import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image'
import Card from '@/components/Card';
import Table from '@/components/Table';
import { useState, useEffect } from 'react';
import { disenchantProduct } from './api/products';
import { addProduct } from './api/products';
import { getArticles } from './api/articles';

export default function Home({ data }) {

  const [refresh, setRefresh] = useState(false);
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    if (refresh) {
      (async () => {
        const updatedData = await getArticles();
        setNewData(updatedData);
        setRefresh(false);
      })();
    }
  }, [refresh]);

  const handleDisenchant = async (item) => {
    await disenchantProduct(item, () => setRefresh(true));
  };

  const handleBuy= async (item) => {
    await addProduct(item, () => setRefresh(true));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2" data-theme="cupcake">
      <Head>
        <title>Computas Warehouse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <Header/>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <Card name = "Dining Chair" image = "chair.webp" handleDisenchant = { handleDisenchant } handleBuy = { handleBuy }/>
        <Card name = "Sofa" image = "sofa.webp" handleDisenchant = { handleDisenchant } handleBuy = { handleBuy }/>
        <Card name = "Dining Table" image = "table2.jpeg" handleDisenchant = { handleDisenchant } handleBuy = { handleBuy }/>
      </div>
      <Table data={ newData } />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/logo.svg" alt="Computas" width={120} height={80} />
        </a>
      </footer>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const data = await getArticles();
  // Pass data to the page via props
  return { props: { data } }
}
