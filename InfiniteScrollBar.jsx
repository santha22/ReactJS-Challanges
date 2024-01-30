import React, { useState, useEffect } from "react";

import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?page=${page}`
      );
      const inCommingData = await response.json();
      setData((prev) => [...prev, ...inCommingData]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="App">
      <section className="landing">
        <div className="row container">
          <h1 className="landing-head">Infinite Scroll</h1>
          {data &&
            data.map((item) => (
              <div key={item.id}>
                <h3 className="heading">Title: {item.title}</h3>
              </div>
            ))}
        </div>

        {loading && <p className="loading">Loading....</p>}
      </section>
    </div>
  );
}
