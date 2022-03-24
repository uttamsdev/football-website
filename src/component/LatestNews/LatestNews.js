import React from "react";
import './LatestNews.css'

const LatestNews = (props) => {
    const {img, title, description, date} = props.news;
    return (
        <div className="news">
            <img src={img} alt=""></img>
            <h2>{title}</h2>
            <h3>{date}</h3>
            <p>{description}</p>

        </div>
    )
}
export default LatestNews;