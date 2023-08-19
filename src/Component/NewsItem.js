import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
        <div className='container d-flex flex-row '   >
            <div className={`my-2 card p-2 border border-${props.mode=='dark'?'info':'dark'} bg-${props.mode==='dark'?'dark':'white'} text-${props.mode==='light'?'black':'white'}  `} style={{ width: '18rem' }} >
                <img src={!imageUrl ? "https://images.indianexpress.com/2022/08/Cody-Simpson.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{!description ? "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, obcaecati." : description}...</p>
                    <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    <div className="my-3 card-footer">
                        <small >By {author} on {new Date(date).toGMTString()} </small>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NewsItem


