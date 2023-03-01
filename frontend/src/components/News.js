import NewsItem from "./NewsItem";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import axios from "axios";
const News = (props) => {
  const [results, setresults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [images, setImages] = React.useState([]);
  let i = 0;
  React.useEffect(() => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: "News" },
        headers: {
          Authorization: `Client-ID ${props.apikey}`,
        },
      })
      .then((response) => {
        setImages(response.data.results);
      });
  }, [props.apikey]);
  const updateNews = async () => {
    const url = "https://quickcrop.onrender.com/news?page=" + page;
    let response = await axios.get(url);
    let parsedData = response.data;
    let filteredData = parsedData.results.filter((item) => {
      let count = 0;
      let description = item.description;
      if (description === null) {
        return null;
      }
      description = description.toLowerCase();
      let words = [
        "agriculture",
        "farming",
        "farmer",
        "farmers",
        "crop",
        "crops",
        "farmland",
        "farmlands",
        "farm",
        "farms",
        "agricultural",
        "agriculture",
        "agriculturalist",
      ];
      for (let j = 0; j < words.length; j++) {
        if (description.includes(words[j]) === true) {
          let re = new RegExp(words[j], "g");
          let matches = description.match(re);
          count += matches.length;
        }
      }
      if (item.language === "hindi") {
        return item;
      }
      if (count >= 1) {
        return item;
      } else {
        return null;
      }
    }); //end of filter
    setresults(filteredData);
    setPage(parsedData.nextPage);
    setTotalResults(parsedData.totalResults);
  };
  useEffect(() => {
    // return () => {
      updateNews();
    // };
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = "https://quickcrop.onrender.com/news?page=" + page;
    let response = await axios.get(url);
    let parsedData = response.data;
    let filteredData = parsedData.results.filter((item) => {
      let count = 0;
      let description = item.description;
      if (description === null) {
        return null;
      }
      description = description.toLowerCase();
      let words = [
        "agriculture",
        "farming",
        "farmer",
        "farmers",
        "crop",
        "crops",
        "farmland",
        "farmlands",
        "farm",
        "farms",
        "agricultural",
        "agriculture",
        "agriculturalist",
      ];
      for (let j = 0; j < words.length; j++) {
        if (description.includes(words[j]) === true) {
          let re = new RegExp(words[j], "g");
          let matches = description.match(re);
          count += matches.length;
        }
      }
      if (item.language === "hindi") {
        return item;
      }
      if (count >= 1) {
        return item;
      } else {
        return null;
      }
    }); //end of filter
    setresults(results.concat(filteredData));
    setPage(parsedData.nextPage);
    setTotalResults(parsedData.totalResults);
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
      <InfiniteScroll
        dataLength={results.length}
        next={fetchMoreData}
        hasMore={results.length !== totalResults - 5}
        loader={<Loading />}
      >
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4 ">
            {results.map((item) => {
              return (
                <div className="col" key={item.link}>
                  <NewsItem
                    image_url={
                      item.image_url ? item.image_url : images[i++].urls.small
                    }
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
