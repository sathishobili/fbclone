import Head from 'next/head' 
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fcebook</title>
     </Head>

      <Header></Header>
      
      <main className="flex justify-center h-10">
        
        {/* <div className="flex text-center justify-center"> */}
          <p className="font-serif font-bold flex text-center justify-center">Coming soon .. Sathish Obili </p>
        {/* </div> */}
        {/* <p className="font-serif font-bold flex text-center justify-center">Coming soon .. Sathish Obili </p> */}
        {/* left Side bar */}
        {/* center */}
        {/* right side */}
      
      </main>

      <footer >
       
      </footer>
    </div>
  )
}
