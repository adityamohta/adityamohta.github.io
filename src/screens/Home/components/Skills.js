import React, {PureComponent} from 'react';
import {SKILLS, WORKFLOWS} from "../../../constants";


export default class Skills extends PureComponent {

    render() {

        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                <div className="w-100">
                    <h2 className="mb-5">Skills</h2>

                    <div className="subheading mb-2">Programming Languages &amp; Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item">
                            <i className="fab fa-python"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-js-square"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-react"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-html5"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-css3-alt"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-sass"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-node-js"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-npm"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-aws"/>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-git"/>
                        </li>
                    </ul>
                    <ul className="fa-ul mb-5">
                        {
                            SKILLS.map(
                                (skill, index) => (
                                    <li key={index}>
                                        <i className="fa-li fa fa-check"/>
                                        {skill}
                                    </li>
                                )
                            )
                        }
                    </ul>

                    {/*<div className="subheading mb-3">Workflow</div>*/}
                    {/*<ul className="fa-ul mb-0">*/}
                    {/*    {*/}
                    {/*        WORKFLOWS.map(*/}
                    {/*            (workflow, index) => (*/}
                    {/*                <li key={index}>*/}
                    {/*                    <i className="fa-li fa fa-check"/>*/}
                    {/*                    {workflow}*/}
                    {/*                </li>*/}
                    {/*            )*/}
                    {/*        )*/}
                    {/*    }*/}
                    {/*</ul>*/}
                </div>
            </section>
        )
    }
}
