import React, {useEffect , useState , useCallback} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {
  // static defaultprops = {
  //   country:'in'

  // }
  // News.propType = {
  //   category: PropTypes.string,
  // };
  // articles = [];
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  // const [totalPage, setTotalPage] = useState(0)
  // const [totalresults, settotalresults] = useState(0)
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const{setProgress } = props

  const updatenews = useCallback(async () => {
    setProgress(0);
    setLoading(true);
    try {
    // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&pageSize=9`;
    const url = "https://mocki.io/v1/f1d88289-7db3-40b9-aa41-eaff946ebaabd"
    let data = await fetch(url);
    let parsedata = await data.json();

    setArticles(parsedata.articles);
    setLoading(false);
    // settotalresults(parsedata.totalResults);
    // console.log(totalresults)
    // props.setProgress(100);
    setProgress(100)
  }
    catch (error) {
      setError(error.message);
      // setLoading(false);
      setHasMore(false);
      // props.setProgress(100);
    }
    finally {
      setLoading(false);
    }
  },[ setProgress]);

  useEffect(() => {
   
    updatenews();
  }, [updatenews ]);
   
  

//   const updatenews = async ()=>{ 
//     props.setProgress(0);
//     setLoading(true)
//     // this.setState({ loading: true });
//     // console.log(props.category);

//     const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&pageSize=9`;
//     props.setProgress(30);
//     let data = await fetch(url);
   
//     props.setProgress(50);
//     let parsedata = await data.json();
//     props.setProgress(70);
//     // console.log(parsedata.totalResults)
//     // this.setState({ totalPage: parsedata.totalResults / 9 , totalresults:parsedata.totalResults });
//     // console.log(this.state.totalresults);
//     setArticles(parsedata.articles)
//     setLoading(false)
//     settotalresults(parsedata.totalResults)
//     // this.setState({ articles: parsedata.articles, loading: false , totalresults:parsedata.totalResults });
//     props.setProgress(100); };
    
    
//     // else {
//     //   setArticles({no})

//     // }
  





  
  



// // eslint-disable-next-line react-hooks/exhaustive-deps
// useEffect(() => {
//   updatenews();
// }, []); 

  // handelNextBtn = async () => {
  //   // this.setState({ loading: true });
  //   // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //   //   props.category
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
  //   //   props.category
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
 const fetchMoreData = async() =>{
    // console.log("i am called");
    
    // console.log(props.category);
    // setLoading(true)
    // console.log(loading)
    try {
    // const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=9`;
    const url = "https://mocki.io/v1/f1d88289-7db3-40b9-aa41-eaff946ebaab"
    let data = await fetch(url);
    let parsedata = await data.json();
    // console.log(parsedata.articles)
    setLoading(true)
    setPage(page+1)
    setArticles(articles.concat(parsedata.articles))
    setLoading(false)
    }
    catch (error) {
      setError(error.message);
      setHasMore(false);
      // setLoading(false);
    }
    finally {
      setLoading(false);
      await new Promise(resolve => setTimeout(resolve, 2000)); 
    }
    // this.setState({page:this.state.page+1 , loading:true}) ;

    // this.setState({
    //   articles: this.state.articles.concat(parsedata.articles),
       
    //   loading: false,
    // });
  
  }

    return (

       <div className="container my-3">
        <h2 className="text-center " style ={{marginTop:'90px'}} > Latest Headlines of News-hub</h2>
        {/* {this.state.loading && <Spinner />} */}
        {error && <div className="alert alert-danger">{error} </div>}
        {loading && <Spinner />}
        <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    // inverse={true} //
    // hasMore={articles.length !== totalresults}
    hasMore={hasMore}
    
    loader={<Spinner/>}
    // scrollableTarget="scrollableDiv" 
  > 
      <div className="row container">
          {articles.map((element) => {
            // console.log(element.title);
            return (
              <div className="col-md-4" key={element.title}>
                <NewsItem
                  title={element.title}
                  // description={element.description}
                  // ImageUrl={element.urlToImage}
                  // newsurl={element.url}
                  // author={element.author}
                  // date={element.publishedAt}
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
export default News;
