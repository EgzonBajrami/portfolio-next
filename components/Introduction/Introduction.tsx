"use client"
import './Introduction.css'
import Link from 'next/link';
import {usePathname } from "next/navigation"
import Instagram from '../../public/images/instagram';
import Linkedin from '../../public/images/linkedin';
import Github from '../../public/images/github';
export default function  Introduction(){
    const pathname = usePathname();
    console.log(pathname);
    return<>
    <div className="introduction-container">
        <div className="introduction-title">
     
            <h1>Egzon Bajrami</h1>
            <h2>Web Developer at Bord Agency</h2>
             <p>I'm a full stack web developer with focus on user experience</p>  

        </div>

        <ul className="introduction-navigation">
            <li className={pathname == "/#about" ? "active":"not-active"}>
                <span></span>
                <Link href="/#about">About</Link>
            </li>
            <li className={pathname == "/#experience" ? "active":"not-active"}>
                <span></span>
                <Link href="/#experience">Experience</Link>
            </li>
            <li className={pathname == "/#projects" ? "active":"not-active"}>
                <span></span>
                <Link href="/#projects">Projects</Link>
            </li>
        </ul>
        <div className="contact-me">
            
            <Link href="https://www.linkedin.com/in/egzon-bajrami-500445251/">
                <Linkedin />
            </Link>

            <Link href="https://github.com/EgzonBajrami">
                <Github />
            </Link>

            <Link href="https://www.instagram.com/egzon.bajram1/">
                <Instagram />
            </Link>
          

        </div>
    </div>
    </>
}