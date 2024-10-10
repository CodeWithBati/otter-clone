import Middle from '@/components/home/middle/Middle'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Otter.ai Clone</title>
        <meta name="description" content="Otter.ai Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
     <Middle />

    </div>
  )
}
