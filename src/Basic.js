import React, { useState, useEffect } from "react";

import axios from "axios";

const dataUrl =
  "https://serverless-functions-course.netlify.app/api/2-basic-api";

const Basic = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(dataUrl);
      setProducts(data);
    } catch (error) {
      console.log("ERROR IN FETCHING DATA");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section className="section section-center">
        <div className="title">
          <h2>Basic setup</h2>
          <div className="title-underline"></div>
        </div>
        <div className="products">
          {products.map((product) => {
            const {
              id,
              image: { url },
              price,
              name,
            } = product;

            return (
              <article className="product" key={id}>
                <img src={url} alt={name} />
                <div className="info">
                  <h5>{name}</h5>
                  <h5 className="price">{price}$</h5>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Basic;
