import './Projects.css'
import conadKosova from '../../public/images/conadkosova.webp'
import ebrealestate from '../../public/images/ebrealestate.webp'
import nhc from '../../public/images/nhc.webp'
import ecommerce from '../../public/images/ecommerce.webp'
import pizza from '../../public/images/pizza.webp'
import argess from '../../public/images/argess.webp'
import Image from 'next/image';
import Link from 'next/link';
export default function Projects(){
    const projectData = [{
        title:"Conad Kosova",
        image:conadKosova,
        textDescription:"A website designed with the purpose of posting the translated products from Italian to Albanian for the store Conad Kosova. It contains a short description about the store and their products and their sales.",
        stack:["React", "NodeJs", "Bootstrap", "CoreUi" ],
        siteUrl:"https://conadkosova.com/"
    },{
        title:"EB Real Estate",
        image:ebrealestate,
        textDescription:"Website designed for a real estate company. Main purpose of it is to post their properties, apartments or houses that they have contracted. Currently under re-design.",
        stack:["NextJs", "Headless Wordpress CMS", "Bootstrap", "Typescript"],
        siteUrl:"https://www.eb-patundshmeri.com/",
    },{
        title:"New Health Care",
        image:nhc,
        textDescription:"New Health Care, a website designed for the single purpose of an advertisement of their health care system.",
        stack:["React", "Bootstrap", "CSS", "HTML5"],
        siteUrl:"https://www.nhc-ks.com/"
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
    }]
    return<>
        <section id="projects" className="projects-holder">
            {projectData && projectData.map((elem, index:number)=>{
                return(<Link className="remove-decoration" href={elem.siteUrl} key={index}>
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