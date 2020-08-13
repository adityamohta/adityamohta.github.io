import React, {PureComponent} from 'react';
import {SKILLS, WORKFLOWS} from "../../../constants";


export default class Projects extends PureComponent {

    render() {

        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                <div className="w-100">
                    <h2 className="mb-5">Projects</h2>

                    <div className="subheading mb-0">
                        Chiku - Journal / Diary & Mood Tracker
                    </div>
                    <p className="m-0 p-0 mb-3">
                        <small>
                            {'The #1 Journal App. Available on both android and ios platforms. '}
                            <a href="https://chiku.app/" target="_blank">Click here</a> to check it out.
                        </small>
                    </p>
                    <p>
                        Chiku is your personal assistant to help you keep track of your day-to-day activities and
                        inspire you along the way to keep making your life better. <br/>
                    </p>
                    <p>
                        <b>Story</b> <br/>In May 2019, I started looking for a diary app for my daily use.
                        After trying out many apps I wasn't satisfied with any. Therefore, I finally decided to create an app myself with all the features that I wanted.
                        Spent few months on its development as a side project & decided to publish it and it now has more than <b>10,000 happy users</b> all over the world.
                    </p>
                    <p>
                        Tech Stack:
                    </p>
                    <ul className="fa-ul mb-5">
                        <li>
                            <i className="fa-li fa fa-circle"/>
                            Backend : Django
                        </li>
                        <li>
                            <i className="fa-li fa fa-circle"/>
                            Frontend : React Native (android / ios)
                        </li>
                        <li>
                            <i className="fa-li fa fa-circle"/>
                            Database : PostgreSQL (AWS RDS)
                        </li>
                        <li>
                            <i className="fa-li fa fa-circle"/>
                            Website : Ghost
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}
