import React, { Component } from 'react';
import DB from '../firebase/firebase';
import { Link } from 'react-router-dom';

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projArr: [],
            render: false
        }
    }
    componentDidMount() {
        let arr = [];
        DB.collection('approvedPosts').orderBy("createdAt", "desc").onSnapshot(async snapshot => {
            let changes = snapshot.docChanges();
            await changes.forEach((change) => {
                arr.push({ data: change.doc.data(), id: change.doc.id })
            });
            this.setState({
                projArr: arr,
                render: true
            })
        })
    }
    render() {

        return (
            <div className="projectPage">

                {this.state.render ? this.state.projArr.map((el, index) => {
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
                }) : <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-blue">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div><div className="gap-patch">
                                <div className="circle"></div>
                            </div><div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>

                        <div className="spinner-layer spinner-red">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div><div className="gap-patch">
                                <div className="circle"></div>
                            </div><div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>

                        <div className="spinner-layer spinner-yellow">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div><div className="gap-patch">
                                <div className="circle"></div>
                            </div><div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>

                        <div className="spinner-layer spinner-green">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div><div className="gap-patch">
                                <div className="circle"></div>
                            </div><div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                }

            </div >
        )
    }
}
