import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
      let {title,des,imgUrl,newsUrl}=this.props;
    return (
      <div className='my-3'>
          <div className="card my-5" style={{width: "18rem"}}>
            <img src={!imgUrl?"https://image.cnbcfm.com/api/v1/image/107047519-R1TR.JPG?v=1650289126&w=1920&h=1080":imgUrl}className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{des}</p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More...</a>
            </div>
            </div>
            
      </div>
    )
  }
}
