import React from "react";
import "../leaderboard-css/Leaderboard.css"

function Leaderboard(){
    return(
        <div>
    <header className="wh-header">
        <ul className="wh-horizontal">
            <li className="wh-rank" id="rank"><img src={require("../leaderboard-images/ranking.png")}alt="rank"/></li>
            <li className="wh-status"><img src={require("../leaderboard-images/sort-arrows.png")}  alt="rank"/></li>
            <li className="wh-avatar">Avatar</li>
            <li className="wh-team">Team</li>
            <li className="wh-time">Time</li>
            <li className="wh-ques-solved">Questions Solved</li>
        </ul>
    </header>
    <main>
        <div>
            <ul className="wh-horizontal curr-pos">
                <li className="wh-rank">7</li>
                <li className="wh-status">
                    <span><img src={require("../leaderboard-images/same-pos.png")}  alt="icon"/><p>0</p></span></li>
                <li className="wh-avatar"><img src={require("../leaderboard-images/hacker.png")} alt="icon"/></li>
                <li className="wh-team"><span>
                        <p>Avengers</p>
                        <p>Banner,Thor,Iron man</p>
                    </span></li>
                <li className="wh-time">12:00:00</li>
                <li className="wh-ques-solved">0</li>
            </ul>
        </div>

        <div>
            <ul className="wh-horizontal">
                <li className="wh-rank">1</li>
                <li className="wh-status">
                    <span><img src={require("../leaderboard-images/up-arrow.png")} alt="icon"/><p>+2</p></span></li>
                <li className="wh-avatar"><img src={require("../leaderboard-images/hacker.png")} alt="icon"/></li>
                <li className="wh-team"><span>
                        <p>Avengers</p>
                        <p>Banner,Thor,Iron man</p>
                    </span></li>
                <li className="wh-time">12:00:00</li>
                <li className="wh-ques-solved">13</li>
            </ul>
        </div>

        <div>
            <ul className="wh-horizontal">
                <li className="wh-rank">2</li>
                <li className="wh-status"><span><img src={require("../leaderboard-images/up-arrow.png")} alt="icon"/>
                        <p>+1</p>
                    </span></li>
                <li className="wh-avatar"><img src={require("../leaderboard-images/hacker.png")} alt="icon"/></li>
                <li className="wh-team"><span>
                        <p>Avengers</p>
                        <p>Banner,Thor,Iron man</p>
                    </span></li>
                <li className="wh-time">12:01:00</li>
                <li className="wh-ques-solved">11</li>
            </ul>
        </div>

        <div>
            <ul className="wh-horizontal">
                <li className="wh-rank">3</li>
                <li className="wh-status"><span><img src={require("../leaderboard-images/same-pos.png")} alt="icon"/>
                        <p>0</p>
                    </span></li>
                <li className="wh-avatar"><img src={require("../leaderboard-images/hacker.png")} alt="icon"/></li>
                <li className="wh-team"><span>
                        <p>Avengers</p>
                        <p>Banner,Thor,Iron man</p>
                    </span></li>
                <li className="wh-time">12:03:00</li>
                <li className="wh-ques-solved">9</li>
            </ul>
        </div>

        <div>
            <ul class="wh-horizontal">
                <li className="wh-rank">4</li>
                <li className="wh-status"><span><img src={require("../leaderboard-images/down.png")} alt="icon"/>
                        <p>-1</p>
                    </span></li>
                <li className="wh-avatar"><img src={require("../leaderboard-images/hacker.png")} alt="icon"/></li>
                <li className="wh-team"><span>
                        <p>Avengers</p>
                        <p>Banner,Thor,Iron man</p>
                    </span></li>
                <li className="wh-time">12:06:00</li>
                <li className="wh-ques-solved">6</li>
            </ul>
        </div>

        <div>
            <ul className="wh-horizontal">
                <li className="wh-rank">5</li>
                <li className="wh-status"><span><img src={require("../leaderboard-images/down.png")}  alt="icon"/>
                        <p>-2</p>
                    </span></li>
                <li className="wh-avatar"><img src={require("../leaderboard-images/hacker.png")} alt="icon"/></li>
                <li className="wh-team"><span>
                        <p>Avengers</p>
                        <p>Banner,Thor,Iron man</p>
                    </span></li>
                <li className="wh-time">12:08:00</li>
                <li className="wh-ques-solved">5</li>
            </ul>
        </div>
    </main>
    <div className="wh-circle">

    </div>
</div>
    );
}

export default Leaderboard;