import React from 'react'
import Project from '../layouts/Project'
import { projects, section3Title } from '../../profile'

const Works = () => {
    return (
        <div>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <div>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                    </div>
                </div>
                <div className="row">
                {projects && projects.map((x) => 
                <Project id={x.id} url={x.url} name={x.name} skills={x.skills} repo={x.repo}/>
                )}
                </div>
            </div>
        </div>
    )
}

export default Works