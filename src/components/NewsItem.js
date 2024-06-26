import React from "react";

const NewsItem =(props)=>{
  
    let { title, description, newsUrl , ImageUrl , author , date } = props;
    // if (ImageUrl){
    //   console.log("yes")
    // }
    // else{
    //   console.log("no")
    // }
  
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text" >
              <small className="text-muted"> By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small>
            </p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Read more..
            </a>
          </div>
        </div>
      </div>
    );
  }
export default NewsItem;
