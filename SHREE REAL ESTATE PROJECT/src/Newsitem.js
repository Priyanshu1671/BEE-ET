import { getByTitle } from '@testing-library/dom'
import React, { Component } from 'react'



export class Newsitem extends Component {
    render() {

        let {title ,description,imageurl,newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={imageurl} alt="Card image cap"/>
                    <div className ="card-body">
                    <h5 className ="card-title">{title}...</h5>
                    <p className ="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" className ="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
