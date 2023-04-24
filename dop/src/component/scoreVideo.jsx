import React from "react";
import { useState, useEffect } from "react";
import Api from "../hoc/Api";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
const ScoreVideo = ({ data }) => {
const [videos, setVideos] = useState(data);
const [local, setLocal] = useState([]);
useEffect(()=>{
  getItemLocal()
},[])
function getItemLocal() {
  const keys = Object.keys(localStorage);
  const items = [];
  keys.forEach((key) => {
    const value = localStorage.getItem(key);
    items.push(value);
  });
  setLocal(items)
}
  const checkSave = (e) => {
    localStorage.setItem(
      e.target.id,
      JSON.stringify({
        check: e.target.checked,
        video: ${e.target.parentElement.innerHTML},
      })
    );
    getItemLocal()
  };
  
  return (
      <div className="wrap">
      <div className="videocont">
        {videos.map((el) => {
          return (
            <div className="block">
              <div
                className="videoBlock"
                key={el.title}
                dangerouslySetInnerHTML={{ __html: el.videos[0].embed }}
              ></div>
              <h4>{el.title}</h4>
              добавить в избранное{" "}
              <input
                type="checkbox"
              yyy
                id={el.title}
                onChange={checkSave}
              />
            </div>
          );
        })} 
      </div>
    
    </div>
  );
};

export default Api(ScoreVideo);