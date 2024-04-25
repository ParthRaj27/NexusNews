import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  Cfl = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0,
    };
    document.title = `${this.Cfl(this.props.category)} - NexusNews`;
  }
  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=430364c2ab074442b2b59db54dca3789&page=1&pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ articles: parsedData.articles , totalResults: parsedData.totalResults ,  loading : false});
    this.updateNews();
  }

  // handlePrevClick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=430364c2ab074442b2b59db54dca3789&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading:true})
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parsedData.articles,
  //   //   loading : false
  //   // });
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews();
  // };

  // handleNextClick = async () => {
  //   // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/5)))//the logic of when user click on next and next page is not avilable then it will not run it already written in button code as diabled but still written by harry
  //   // {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=430364c2ab074442b2b59db54dca3789&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading:true})
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // this.setState({
  //   //   page: this.state.page + 1,
  //   //   articles: parsedData.articles ,
  //   //   loading : false
  //   // });}
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "90px" }}>
          NexusNews - Top Headlines from {this.Cfl(this.props.category)}{" "}
          category
        </h1>
        {this.state.loading &&  <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {/* {!this.state.loading && this.state.articles && this.state.articles.map((element) => ( */}
              {this.state.articles &&
                this.state.articles.map((element) => (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      ImageUrl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                ))}
            </div>
          </div>
        </InfiniteScroll>
        <div className="container d-flex justify-content-between my-2">
          {/* this buttons helps to fetch more news but we used infinte scroll thats why the logic of the buttons and functions are commented */}
          {/* <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 5)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button> */}
        </div>
      </>
    );
  }
}
