import Head from "next/head";
import Card from "../components/card";
import Header from "../components/header";
const Fbclone = () => {
  return (
      <div>
           <Head>
        <title>Fcebook</title>
      </Head>
      <Header></Header>
      <main className=" justify-center ">
        <div className="flex justify-center">
          <h3 className="font-bold text-xl p-5">CARDS</h3>
        </div>
        <div className="flex  justify-center flex-wrap items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((res) => {
            return (
              <div key={res}>
                <Card></Card>
              </div>
            );
          })}
        </div>
        <br />
        {/* buttons */}
        <div className="">
          <div className="flex justify-center">
            <h3 className="font-bold text-xl p-5">BUTTONS</h3>
          </div>
          <div className="flex justify-center ">
            <button className="bg-red-500 px-6 py-3  rounded m-2 hover:bg-red-300">
              Filled
            </button>
            <button className="text-red-500 px-6 py-3 border-2 border-red-500 rounded m-2 hover:bg-red-300">
              Outlined
            </button>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}

export default Fbclone