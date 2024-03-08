import React, { useState, useEffect } from "react";
import News from "./News";
// import Comments from "./Comments";
import Navigation from "./Navigation";
import Stack from "@mui/material/Stack";
import "./Home.css";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&from=2024-02-08&sortBy=publishedAt&apiKey=643b0b0429dc4a55b0eca97f6dc98685");
// https://newsapi.org/v2/top-headlines?country=us&apiKey=643b0b0429dc4a55b0eca97f6dc98685
// https://newsapi.org/v2/top-headlines?s&apiKey=643b0b0429dc4a55b0eca97f6dc98685&q=cricket
// https://newsapi.org/v2/everything?q=bitcoin&from=2024-02-08&sortBy=publishedAt&apiKey=643b0b0429dc4a55b0eca97f6dc98685
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <>
    <Navigation/>
      <div className="container">
        {articles.map((article, index) => (
          <div key={index} className="sec">
            <Stack spacing={2}>
              <News
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                alt={article.title} // Assuming alt is same as title
                url={article.url}
              />
              {/* <Comments /> */}
            </Stack>
          </div>
        ))}
      </div>
    </>
  );
}
