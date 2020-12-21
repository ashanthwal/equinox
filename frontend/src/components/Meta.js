import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Equinox | Technologies",
  description: "Reliable & affordable luxury watches",
  keywords: "watches, men's watches, women's watches, best watches",
};

export default Meta;
