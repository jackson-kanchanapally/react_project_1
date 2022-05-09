import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=28a9ea3b0f5a44aab5a5a12800a3e78f";
    let data = await fetch(url);
    let parseD = await data.json();
    this.setState({ articles: parseD.articles });
  }
  render() {
    return (
      <div className="container my-4">
        <center>
          <h1 style={{ fontSize: "40px" }}>NewsEast Breaking</h1>
        </center>
        <div className="container mx-5 my-5">
          <div className="row">
            {this.state.articles.map((e) => {
              return (
                <div className="col-md-3" key={e.url}>
                  <NewsItem
                    title={e.title ? e.title.slice(0, 40) : ""}
                    imgUrl={e.urlToImage}
                    des={e.description ? e.description.slice(0, 90) : ""}
                    newsUrl={e.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
