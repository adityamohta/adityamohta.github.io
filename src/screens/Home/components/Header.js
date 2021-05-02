import React, {PureComponent} from 'react';
import {DESCRIPTION, EMAIL, FIRST_NAME, GITHUB, LAST_NAME, LINKEDIN, RESUME} from "../../../constants";



export default class Header extends PureComponent {

    render() {

        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <h1 className="mb-0">
                        <span>{FIRST_NAME}</span>&nbsp;
                        <span className="text-primary">{LAST_NAME}</span>
                    </h1>
                    <div className="subheading mb-5">
                        {/*3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·*/}
                        <a href={`mailto:${EMAIL}`} className="text-small">{EMAIL}</a>
                    </div>
                    <p className="lead mb-5">
                        {DESCRIPTION}
                    </p>
                    <div className="social-icons">
                        <a href={LINKEDIN} target="_blank"><i className="fab fa-linkedin-in"/></a>
                        <a href={GITHUB} target="_blank"><i className="fab fa-github"/></a>
                        {/*<a href={RESUME} target="_blank"><span className='social-icons-text'>RESUME</span></a>*/}
                    </div>
                </div>
            </section>
        )
    }
}
