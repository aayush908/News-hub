import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  // static defaultprops = {
  //   country:'in'

  // }
  static propType = {
    category: PropTypes.string,
  };
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalPage: 0,
      totalresults :0
    };
  }

  // async updatenews(){
  //   this.setState({ loading: true });

  //   const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //     this.props.category
  //   }&apiKey=54ba028cba704322b8b743b1fa4c6f3d&page=${
  //     this.state.page + 1
  //   }&pageSize=9`;
  //   let data = await fetch(url);
  //   let parsedata = await data.json();
  //   // console.log(parsedata.articles)
  //   this.setState({
      
  //     articles: parsedata.articles, 
  //     loading: false,
  //   });
  // }
  async componentDidMount() {
    this.props.setProgress(0);
    this.setState({ loading: true });
    // console.log(this.props.category);

    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=9`;
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedata = await data.json();
    this.props.setProgress(70);
    // console.log(parsedata.totalResults)
    // this.setState({ totalPage: parsedata.totalResults / 9 , totalresults:parsedata.totalResults });
    // console.log(this.state.totalresults);
    this.setState({ articles: parsedata.articles, loading: false , totalresults:parsedata.totalResults });
    this.props.setProgress(100);
  }

  // handelNextBtn = async () => {
  //   // this.setState({ loading: true });
  //   // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //   //   this.props.category
  //   // }&apiKey=54ba028cba704322b8b743b1fa4c6f3d&page=${
  //   //   this.state.page + 1
  //   // }&pageSize=9`;
  //   // let data = await fetch(url);
  //   // let parsedata = await data.json();
  //   // // console.log(parsedata.articles)
  //   // this.setState({
  //   //   page: this.state.page + 1,
  //   //   articles: parsedata.articles,
  //   //   loading: false,
  //   // });
  //   this.setState({page:this.state.page + 1});
  //   this.updatenews();
  // };

  // hadlePreBtn = async () => {
  //   // this.setState({ loading: true });
  //   // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //   //   this.props.category
  //   // }&apiKey=54ba028cba704322b8b743b1fa4c6f3d&page=${
  //   //   this.state.page - 1
  //   // }&pageSize=9`;
  //   // let data = await fetch(url);
  //   // let parsedata = await data.json();
  //   // // console.log(parsedata.articles)
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parsedata.articles,
  //   //   loading: false,
  //   // });
  //   this.setState({page:this.state.page -1});
  //   this.updatenews();
  // };
fetchMoreData = async() =>{
    // console.log("i am called");
    
    // console.log(this.props.category);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=9`;
    let data = await fetch(url);
    let parsedata = await data.json();
    // console.log(parsedata.articles)
    
    this.setState({page:this.state.page+1 , loading:true}) ;

    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
       
      loading: false,
    });
  
  }
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center"> Latest Headlines of News-hub</h2>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    // inverse={true} //
    hasMore={this.state.articles.length !== this.state.totalresults}
    loader={<Spinner/>}
    // scrollableTarget="scrollableDiv" 
  > 
        <div className="row container">
          {this.state.articles.map((element) => {
            // console.log(element.title);
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  ImageUrl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between my-2 mx-2">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-danger"
            onClick={this.hadlePreBtn}
          >
        
            &larr; PREVIOUS
          </button>
          <button
            disabled={this.state.page >= this.state.totalPage}
            type="button"
            className="btn btn-dark"
            onClick={this.handelNextBtn}
          >
            NEXT &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}
