import NewsItem from "./NewsItem";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [results, setresults] = useState([]);
  // const [loading, setloading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const updateNews = async () => {
    const url = `https://newsdata.io/api/1/news?apikey=pub_1131893c21e8997a0c62bfe990aba48d4f59f&q=${props.keywords}&country=${props.country}&language=${props.language}&page=${page}`;
    // setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setresults(parsedData.results);
    console.log(parsedData);
    // setloading(false);
  };
  useEffect(() => {
    return () => {
      updateNews();
      //eslint-disable-next-line
    };
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsdata.io/api/1/news?apikey=pub_1131893c21e8997a0c62bfe990aba48d4f59f&q=${
      props.keywords
    }&country=${props.country}&language=${props.language}&page=${page + 1}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setresults(results.concat(parsedData.results));
    setTotalResults(parsedData.totalResults);
  };
  return (
    <InfiniteScroll
      dataLength={results.length}
      next={fetchMoreData}
      hasMore={results.length !== totalResults}
      // loader={<Spinner />}
    >
      <div className="container">
        <div className="row">
          {results.map((item) => {
            return (
              <div className="col-md-4" key={item.link}>
                <NewsItem
                  image_url={item.image_url}
                  title={item.title?item.title:""}
                  description={item.description?item.description:""}
                  link={item.link}
                  creator={item.creator}
                  pubdate={item.pubDate}
                  source_id={item.source_id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </InfiniteScroll>
  );
};
News.defaultProps = {
  country: "in",
  language: "en,hi",
  keywords: "farming OR farmers OR agriculture",
};
News.propTypes = {
  country: PropTypes.string,
};

export default News;
