import React, {PureComponent} from 'react';
import {EXPERIENCE} from "../../../constants";


export default class Experience extends PureComponent {

    render() {

        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                <div className="w-100">
                    <h2 className="mb-5">Experience</h2>
                    {
                        EXPERIENCE.map(
                            (obj, index) => (
                                <div key={index}
                                     className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div className="resume-content">
                                        <h3 className="mb-0">{obj.title}</h3>
                                        <div className="subheading mb-3">{obj.company}</div>
                                        <p>{obj.description}</p>
                                    </div>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">{obj.date}</span>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>

            </section>
        )
    }
}
