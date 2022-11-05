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
      <Image width={1600} height={1800} alt="banner image" src="/banner.jpg" />
    </div>
  )
}

const ProjectCard = ({ title, imageSrc }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{imageSrc}</div>
      <Image width={200} height={200} alt="banner image" src={imageSrc} />
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h3 >About</h3>
      <p> Web developer with over 2 years experience and a passion for building responsive
        websites. Strong communication skills, excellent written skills, and the ability to solve complex
        problems. As part of my
        <a href="https://fxsheikh.com" target="_blank"><span className="description">business</span></a>
        developed responsive websites for a
        <a href="barbershop/index.html" target="_blank"> <span className="description">barber shop</span></a> and
        <a href="drivemethere/index.html" target="_blank"><span className="description">hire-car company</span></a>.
        Built a dynamic forum from scratch for the major project of my Diploma of Website Development.
        Aspirations include improving my HTML5, CSS3 and JavaScript skills and in the near future transition
        towards becoming a full stack web developer.
      </p>
    </div>
  )
}

const Contact = () => {
  return (

    <form className="flex flex-col">
      <h1>Contact</h1>
      <input type="text" id="name" name="name" required placeholder="test"></input>
      <input type="text" id="email" name="email" required placeholder="email"></input>
      <input type="text" id="subject" name="subject" required placeholder="subject"></input>
      <input type="text" id="comment" name="comment" required placeholder="comment"></input>
    </form>
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

      {/* <Hero /> */}

      <div className="flex">
        <ProjectCard title="TopRydeBarber" imageSrc="/barber.jpg" />
        <ProjectCard title="DriveMeThere" imageSrc="/drivemethere.jpeg" />
        <ProjectCard title="Web Technologies" imageSrc="/webtech.png" />
        <ProjectCard title="Animalia" imageSrc="/animalia.jpg" />
        <ProjectCard title="Manchester United" imageSrc="/manunited.png" />
        <ProjectCard title="Scorekeeper" imageSrc="/pong.jpeg" />
      </div>

      <About />

      <Contact />
    </>
  );
};

export default Home;


