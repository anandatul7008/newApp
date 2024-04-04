import React,{ useEffect, useState } from 'react'
import NewsItems from './NewsItems';
import Spinner from './spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>{
    const[articles,setArticles]=useState([]);
    const[loading,setLoading]=useState(true);
    const[page,setPage]=useState(1);
    const[totalArticles,setTotalArticles]=useState(0);
   // document.title=`${capitalizeFirstLetter(props.category)}- NewsMonkey`
        const capitalizeFirstLetter=(string)=>{
            return string.charAt(0).toUpperCase()+string.slice(1);
        }
    
    const updatedNews=async()=>{
      document.title=`${capitalizeFirstLetter(props.category)}- NewsMonkey`
      props.setProgress(10);
        const apiurl=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let response=await fetch(apiurl);
        props.setProgress(40);
        let data=await response.json();
        props.setProgress(70);
        console.log(data);
        setArticles(data.articles);
        setLoading(false);
        setTotalArticles(data.totalResults);
        
        props.setProgress(100);
    }
    
    useEffect(()=>{
      /* const apiurl=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=20e9faee1b0f499981c1f16531fa61a8&page=${this.state.page}&pageSize=${props.pageSize}`;
        let response=await fetch(apiurl);
        let data=await response.json();
        console.log(data);
        this.setState({articles:data.articles,totalArticles:data.totalResults,loading:false
        });*/
      updatedNews();
    },[]);
    /* const handlePrevClick=async()=>{
       const apiurl=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=20e9faee1b0f499981c1f16531fa61a8&page=${this.state.page}&pageSize=${props.pageSize}`;
        this.setState({loading:true});
        let response=await fetch(apiurl);
        let data=await response.json();
        console.log(data);
        this.setState({articles:data.articles,page:this.state.page-1,loading:false
        });
        setPage(page-1)
        updatedNews();
    }*/
    /*const handleNextClick=async()=>{
        
        const apiurl=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=20e9faee1b0f499981c1f16531fa61a8&page=${this.state.page}&pageSize=${props.pageSize}`;
        this.setState({loading:true});
        let response=await fetch(apiurl);
        let data=await response.json();
        console.log(data);
        this.setState({articles:data.articles,page:this.state.page+1,loading:false
        });
        setPage(page+1);
        updatedNews();

    }*/
    const fetchMoreData = async() => {
        setPage(page+1);
        const apiurl=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let response=await fetch(apiurl);
        let data=await response.json();
        console.log(data);
        setArticles(articles.concat(data.articles));
        setLoading(false);
        setTotalArticles(data.totalResults);
      
  };
 
    
    return (
      <>
        
        <div className="container ">
        <h2 style={{marginTop:"4rem"}}>NewsMonkey {props.category === "general" ? "Top" : props.category} Headlines</h2>
        </div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalArticles && !loading}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
        {articles.map((element)=>{
            return <div className="col-md-3" key={element.url}>
                <NewsItems  title={element.title?element.title.slice(0,35):""} description={element.description?element.description.slice(0,60):" "} imageUrl={element.urlToImage?element.urlToImage:"https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"} newsUrl={element.url}
                author={element.author?element.author:"Unknown"} date={element.publishedAt}/></div>
        })}
           
           
        </div>
        </div>
        </InfiniteScroll>
        {/*
        <div class="d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
        <p><b>Page-{this.state.page} of {Math.ceil(this.state.totalArticles/props.pageSize)}</b></p>
        <button type="button" disabled={this.state.page===Math.ceil(this.state.totalArticles/props.pageSize)}class="btn btn-dark" onClick={this.handleNextClick}>Next</button>
        </div>
    */}
        
        
        
      
      </>
    )
  
}

export default News;
