import React from "react";
import { PeopleProps } from "../types/interface";

class People extends React.Component<PeopleProps, {}> {
    render() {
        const { people } = this.props;

        return (
            <div className="columns is-mobile is-multiline">
                {
                    people.map((person: any) => (
                        <section className="column is-full-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src={person.avatar} alt={person.username} />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media-content">
                                        <p className="title is-4">{person.name}</p>
                                        <p className="subtitle is-6">{person.username}</p>
                                    </div>
                                    <div className="content">
                                        <a href={`${person.profileLink}?ref_src=twsrc%5Etfw`}
                                            className="twitter-follow-button"
                                            data-show-count="false">
                                            Follow {person.username}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))
                }
            </div>
        )
    }
}

export default People;
