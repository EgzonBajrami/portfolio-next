import './Projects.css'

import ebrealestate from '../../public/images/ebrealestate.webp'

import ecommerce from '../../public/images/ecommerce.webp'
import pizza from '../../public/images/pizza.webp'
import argess from '../../public/images/argess.webp'
import mesimiplus from '../../public/images/MesimiPlus.webp'
import Image from 'next/image';
import Link from 'next/link';
export default function Projects(){
    const projectData = [{
        title:"EB Real Estate",
        image:ebrealestate,
        textDescription:"Website designed for a real estate company. While making use of Next.js SSR and SSG to make the website much more SEO friendly than your average React App!",
        stack:["NextJs Backend", "Bootstrap", "Typescript"],
        siteUrl:"https://www.eb-patundshmeri.com/",
    },{
        title:"E-Commerce",
        image:ecommerce,
        textDescription:"Simple e-commerce web app made with React and Express. Contains ratings for each product and you can drop your own rating.",
        stack:["React", "ExpressJs", "MongoDB", "MaterialUi"],
        siteUrl:"https://reliable-manatee-d8cd77.netlify.app/"
    },{
        title:"Pizza Restaurant",
        image:pizza,
        textDescription:"Pizza Restaurant website where you can order online and pay online. In this project I tested several things, such as Typewriter and Stripe (backend).",
        stack:["React", "NodeJs","Bootstrap","MongoDB"],
        siteUrl:"https://spontaneous-cuchufli-3dea6d.netlify.app/"
    },{
        title:"Argess Monitoring Enterprise",
        image:argess,
        textDescription:"This is a landing page for Argess Monitoring Enterprise, designed with the purpose of highlighting the services that the company offers. Currently under development!",
        stack:["NextJs Full Stack", "Javascript", "Bootstrap", "CSS"],
        siteUrl:"https://next-argess.vercel.app/"
    },{
        title:"Mësimi Plus",
        image:mesimiplus,
        textDescription:"Landing page for a course that helps develop children. Key features are optimized fully for SEO, optimized for faster load speed and better user experience. Also connected to a google forms to send post requests there. Still in development!",
        stack:["Javascript", "HTML", "CSS", "Bootstrap"],
        siteUrl:"https://mesimi-plus.netlify.app/"
    }]
    return<>
        <section id="projects" className="projects-holder">
            <div className="projects-mobile about-mobile">Projects</div>
            {projectData && projectData.map((elem, index:number)=>{
                return(<Link className="remove-decoration" href={elem.siteUrl} target="_blank" key={index}>
                <div className="projects-wrapper">
                    <div className="image-holder">
                        <Image src={elem.image} alt={elem.title} width={elem.image.width} height={elem.image.height} />
                    </div>
                    <div className="project-description">
                        <div className="project-title">
                            <p>{elem.title}</p>
                        </div>
                        <div className="project-text">
                            <p>{elem.textDescription}</p>
                        </div>
                        <div className="stack-holder">
                        {elem.stack.map((tech: string, index: number) => (
                                 <div key={index + "" + tech}>{tech}</div>
                         ))}
                        </div>
                    </div>
                </div>
                </Link>)
            })}
        </section>
    </>
}