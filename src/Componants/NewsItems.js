import React, { Component } from 'react'

export default class NewsItems extends Component {


  render() {

    let { title, description, imageUrl, newsUrl } = this.props;
    return (

      <div className="my-5" >
        <div className="card" >
          <img src={!imageUrl ? " " : imageUrl } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
