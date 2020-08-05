import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProjectListContainer extends Component {
    render() {
        return (
            <div>
                {
                    this.props.data.map((el, index) => {
                        return (
                            <div className="row" key={index}>
                                <div className="col s12 m6">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                            <span className="card-title">{el.data.title}</span>
                                            <p>{el.data.body}</p>
                                        </div>
                                        <div className="card-action">
                                            <Link to={`/project/${el.id}`}> Link </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
