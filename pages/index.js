import Head from 'next/head'
import { Upload } from '../components/Upload';
export default function Home() {
  return (
  <div>
    <Head>
      <title>Next Crash</title>
      <meta name="keywords" content="web development, programming"/>
    </Head>
    <h1>
      Welcome to Next Upload 
    </h1>
    <Upload />;
  </div>
    )
}
