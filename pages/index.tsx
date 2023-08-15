import Head from "next/head";
import MainTable from "../components/Table/MainTable";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Curamatic</title>
        <meta
          name="description"
          content="Lawyers are looking for colleagues to hold their briefs. Set your profile, your appearance feels and starting holding briefs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/laploy-logo.png" />
      </Head>

      <div className="max-w-[1512px] mx-auto w-full flex  bg-white h-full min-h-screen overflow-x-hidden">
        <div className="w-2/12"></div>
        <div className="w-10/12">
      <MainTable />
        </div>
       
      
      </div>
    </>
  );
}
