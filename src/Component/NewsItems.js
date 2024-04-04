import React from 'react'

const NewsItems=(props)=>{
    
  
    let {title,description,imageUrl,newsUrl,author,date}=props;
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
  <img src={imageUrl} className="img-fluid img-thumbnail" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <b><p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p></b>
    <a href={newsUrl} className="btn btn-sm btn-primary" target='blank'>Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItems
