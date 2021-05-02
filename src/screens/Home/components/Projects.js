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
                        Chiku is a personal diary app, available on both <a
                        href="https://play.google.com/store/apps/details?id=app.chiku"
                        target="_blank">Android</a> and <a href="https://apps.apple.com/us/app/chiku/id1477484178"
                                                           target="_blank">iOS</a>, to help users keep track of their
                        day-to-day activities and inspire them along the way to keep making their life better.
                        (chiku.app) <br/>
                    </p>
                    <p>
                        <b>Story</b> <br/>In May 2019, I started looking for a diary app for my daily use. However, I
                        wasn’t satisfied with any of the existing solutions. So I decided to create a journaling app
                        which I would like to use. Spent a few months on its development as a side project and it now
                        has <b>40,000+ happy users</b> worldwide with <b>4.6+</b> rating.
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
                            Website : Ghost CMS
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}
