import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widget = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widget__article">
        <div className="widget__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widget__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widget">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("HDFC merger is now Official", "Top news - 130,671 readers")}
      {newsArticle("GPQ latest to buy stake in Adani Group", "Trending")}
      {newsArticle(
        "Nifty records new high on back of FII investment",
        "Market Track"
      )}
      {newsArticle("Byju's is my life's work", "-Raveendran Byju")}
    </div>
  );
};

export default Widget;
