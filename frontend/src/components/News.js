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
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: "Breaking News", per_page: 30 },
        headers: {
          Authorization: `Client-ID ${props.apikey}`,
        },
      })
      .then((response) => {
        setImages(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);
  const updateNews = async () => {
    const url = "/news?page=" + page;
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
      if (item.language === "hindi" || count >= 1) {
        return item;
      } else {
        return null;
      }
    });
    setresults(filteredData);
    setPage(parsedData.nextPage);
    setTotalResults(parsedData.totalResults);
  };
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = "/news?page=" + page;
    let data = await axios.get(url).then((response) => {
      return response.data;
    });
    let parsedData = await data.results;
    let filteredData = parsedData.filter((item) => {
      let count = 0;
      if (item.description === null) {
        return null;
      }
      let description = item.description;
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
      if (item.language === "hindi" || count >= 1) {
        return item;
      } else {
        return null;
      }
    });
    setresults(results.concat(filteredData));
    setPage(data.nextPage);
    setTotalResults(data.totalResults);
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
            {results.map((item, index) => {
              if (item.image_url !== null) {
              } else if (images[index] !== null) {
                // item.image_url = images[index].urls.small;
              }
              return (
                <div className="col" key={item.link}>
                  <NewsItem
                    image_url={item.image_url}
                    title={item.title ? item.title : ""}
                    des
                    cription={item.description ? item.description : ""}
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
