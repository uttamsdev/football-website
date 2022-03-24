import React, { useEffect, useState } from "react";
import LatestNews from "../LatestNews/LatestNews";
import Player from "../Player/Player";
import './Players.css'

const Players = () => {
    const [players, setPlayers] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(response => response.json())
        .then(data => setPlayers(data[0].players))
    },[])

    const [news, setNews] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setNews(data[1].latestNews))
    },[])
    return (
        <div>
            <div className="players-layout">
                <div className="players-container">
                {
                    players.map(player => <Player player={player}></Player>)
                }
                </div>
            </div>
            
            <h3 style={{textAlign:'center',color:'black'}}>Latest News</h3>
            <div className="latest-news">
            {
                news.map(news => <LatestNews news={news}></LatestNews>)
            }
            </div>
        </div>
    )
}
export default Players;