import React, {PureComponent} from 'react';
import {INTERESTS} from "../../../constants";


export default class Interests extends PureComponent {

    render() {

        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
                <div className="w-100">
                    <h2 className="mb-5">Interests</h2>
                    {
                        INTERESTS.map(
                            (interest, index) => {
                                if (index === interest.length-1)
                                    return <p className='mb-0'>{interest}</p>;
                                return <p>{interest}</p>;
                            }
                        )
                    }
                </div>
            </section>
        )
    }
}
