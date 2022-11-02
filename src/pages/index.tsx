import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-red-400">
      <Link href="#Projects">Projects</Link>
      <Link href="https://fxsheikh.com/">My Business</Link>
      <Link href="#about">About</Link>
      <Link href="#contact">Contact</Link>
    </div>
  )
}

const Hero = () => {
  return (
    <div>
      <Image width={1600} height={1800} alt="banner image" src="/banner.jpg"></Image>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Faizan - Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <Hero />

    </>
  );
};

export default Home;


