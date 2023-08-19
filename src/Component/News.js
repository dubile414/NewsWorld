import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fa2529d60b344e5790ababb524b7289c&page=${page}&pageSize=${props.pageSize}`

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.country}.json`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
        console.log(totalResults)

    }

    useEffect(() => {
        document.title = ` NewsWorld - ${capitalizeFirstLetter(props.category)} `;
        updateNews();
    }, [])


    // const handlePrevClick = async () => {
    //     setPage(page - 1)
    //     updateNews();
    // }

    // const handleNextClick = async () => {
    //     setPage(page + 1)
    //     updateNews()
    // }

    const fetchMoreData = async () => {
        const url = `https://saurav.tech/NewsAPI/top-headlines/category/${props.category}/${props.country}.json`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        
    };

    return (
        <>
            <h2 className={`text-center   `}  style={{ margin: '35px 0px', marginTop: '90px' ,  color : props.mode==='light'?'black':'white'  }}>Top Headlines - {props.category.charAt(0).toUpperCase() + props.category.slice(1)} </h2>
            {loading && <Spinner />}
            <InfiniteScroll 
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row">
                        {articles.map((element, index) => {
                            return <div className="col-md-4" key={index}>
                                <NewsItem mode = {props.mode} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>

            </InfiniteScroll>
        </>

    )
}




News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News





















//  https:newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fa2529d60b344e5790ababb524b7289c&page=${props.pageSize}



/*

import React, {  useState } from 'react'


import  NewsItem  from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    // document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - NewsWorld`



    const capitalizeFirst = (string) => {
        return string.charAt(0).tpUpperCase + string.slice(1);
    }

   



    // async updateNews(){

    //     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fa2529d60b344e5790ababb524b7289c&page=${props.pageSize}`
    //     this.setState({ loading: true })
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     console.log(parsedData)
    //     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })

    // }

    const componentDidMount = async (props) => {
        props.setProgress(10);
        console.log("cdm")
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fa2529d60b344e5790ababb524b7289c&page=1`
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        console.log(parsedData)
        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)

        props.setProgress(100);
    }

    // const handlePrevClick = async (props) => {
    //     console.log("Previous la dabla")

    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fa2529d60b344e5790ababb524b7289c&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    //     this.setState({ loading: true })
    //     let data = await fetch(url);
    //     let parsedData = await data.json()




    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })

    //     // this.setState({page:this.state.pageSize-1});
    //     // this.updateNews();
    // }

    // const handleNextClick = async (props) => {
    //     console.log("Next la dabla")

    //     if ((this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {

    //     }

    //     else {

    //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fa2529d60b344e5790ababb524b7289c&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    //         this.setState({ loading: true })
    //         let data = await fetch(url);
    //         let parsedData = await data.json()

    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parsedData.articles,
    //             loading: false

    //         })
    //     }


    //     // this.setState({page: this.state.pageSize+1});
    //     // this.updateNews();
    // }

    const fetchMoreData = async (props) => {
        props.page += props.page

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fa2529d60b344e5790ababb524b7289c&page=1`

        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)


        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)

    };



    return (
        <div className="container">
            <h2 className='text-center my-3' > Top Headlines -   </h2>

            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<h4>Loading...</h4>}
            >
                <div className="container">
                    <div className="row " >
                        {articles.map((element, index) => {
                            return <div className="col-md-4 my-3 " key={index}>
                                <NewsItem title={element.title ? element.title.slice(0, 40) : " "} description={element.description ? element.description.slice(0, 80) : " "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>

            {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark my-4" onClick={this.handlePrevClick} > &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark my-4" onClick={this.handleNextClick} >Next &rarr;</button>
                </div> }

                </div >
                )
            
            }

News.defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News

*/

