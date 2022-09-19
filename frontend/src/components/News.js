import NewsItem from "./NewsItem";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
const News = (props) => {
  const [results, setresults] = useState([]);
  const [load, setload] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const updateNews = async () => {
    const url = `https://newsdata.io/api/1/news?apikey=${props.apikey}&q=${props.keywords}&country=${props.country}&language=${props.language}&page=${page}`;
    setload(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setresults(parsedData.results);
    setTotalResults(parsedData.totalResults);
    setload(false);
  };
  useEffect(() => {
    return () => {
      updateNews();
    };
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsdata.io/api/1/news?apikey=${props.apikey}&q=${
      props.keywords
    }&country=${props.country}&language=${props.language}&page=${page + 1}`;
    setload(true);
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData =await data.json()
    setresults(results.concat(parsedData.results),()=>{console.log(results)});
    setTotalResults(parsedData.totalResults);
    setload(false);
  };
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "1.2rem",
          marginBottom: "1.4rem",
        }}
      >
        Top Headlines
      </h1>
      {<Loading load/>}
      <InfiniteScroll
        dataLength={results.length}
        next={fetchMoreData}
        hasMore={results.length !== totalResults && load}
        loader={<Loading load/>}
      >
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4 ">
            {results.map((item, i) => {
              return (
                <div className="col" key={i}>
                  <NewsItem
                    image_url={item.image_url}
                    title={item.title ? item.title : ""}
                    description={item.description ? item.description : ""}
                    link={item.link}
                    creator={item.creator}
                    source_id={item.source_id}
                    pubDate={item.pubDate}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  language: "en,hi",
  keywords: "agriculture OR farming OR farmers",
};
News.propTypes = {
  country: PropTypes.string,
  apikey: PropTypes.string,
};

export default News;
