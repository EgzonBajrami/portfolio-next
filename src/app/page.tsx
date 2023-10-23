
import AboutMe from '../../components/AboutMe/AboutMe'
import Introduction from '../../components/Introduction/Introduction'
import WorkExperience from '../../components/WorkExperience/WorkExperience'
import LightCursor from '../../components/LightCursor/LightCursor'
import './page.css'
import Projects from '../../components/Projects/Projects'
import ReachOut from '../../components/ReachOut/ReachOut'

export default function Home() {
  const datasToSend = [
    {
      currentWork:"Talenko Agency",
      position:"Web Developer",
      yearStarted:"2023",
      yearEnd:"Present",
      textDescription:"In my current position, I play an integral role in the development and upkeep of web projects. I engage in active collaboration with a team of professionals, collectively crafting efficient and scalable solutions. I harness the capabilities of React and Next.js to construct robust front-end interfaces, ensuring seamless user experiences. As part of my responsibilities, I proficiently utilize PHP and WordPress to create dynamic web solutions, facilitating the development of interactive web applications that seamlessly communicate with databases and external services.",
      stack:['React', 'NextJs', 'NodeJs', 'Javascript', 'PhP', 'Bootstrap', 'SCSS', 'Wordpress', 'Woocommerce']
    },{
    currentWork:"Bord Agency",
    position:"Junior Web Developer",
    yearStarted:"2023",
    yearEnd:"2023",
    textDescription:"In my previous role, I actively contributed to the development and maintenance of web projects. I collaborated with a team of professionals to design and implement efficient and scalable solutions. Leveraging the power of React and Next.js, I created robust front-end interfaces that provided seamless user experiences. As part of my responsibilities, I also worked with Node.js to develop server-side logic, build APIs, and handle data management. This allowed me to create interactive web applications that communicated with databases and external services.",
    stack:['React', 'NextJs', 'NodeJs', 'Javascript', 'PhP', 'Bootstrap', 'SCSS', 'Wordpress', 'jQuery']
  },{
    currentWork:"Freelance Web Developer",
    position:"Freelance Web Developer",
    yearStarted:"2022",
    yearEnd:"Present",
    textDescription:"As a Freelance Web Developer, I have been working independently, offering my expertise to clients on various projects. With a passion for crafting unique digital experiences, I specialize in developing custom websites and web applications that are tailored to meet the specific needs of each client.",
    stack:['React', 'NextJs', 'NodeJs', 'Javascript', 'Typescript', 'Bootstrap', 'SCSS', 'Wordpress', 'PhP']
  }]
  return (
   
    <section className="introduction">
       <LightCursor />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 introduction-sticky">
            <Introduction />
          </div>
          <div className="col-12 col-lg-6">
            <AboutMe />
            <WorkExperience data={datasToSend} />
            <Projects />
            <ReachOut />
          </div>
        </div>
      </div>
      
    </section>
  )
}
