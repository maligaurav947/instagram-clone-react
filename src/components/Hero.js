import React from "react";
import Post from "./Post";
import Sidecontact from "./Sidecontact";
import Stories from "./Stories";
export default function Hero() {
  return (
    <section className="main-hero">
      <Stories />
      <div className="div-post">
        <Post
          profileimg="https://avatars.githubusercontent.com/u/86152880?v=4"
          profileid="@mailgaurav947"
          postimg="https://cdn.pixabay.com/photo/2022/07/04/17/16/dove-7301617__340.jpg"
        />
        <Post
          profileimg="https://avatars.githubusercontent.com/u/86152880?v=4"
          profileid="@artnick"
          postimg="https://cdn.pixabay.com/photo/2022/06/19/11/07/bird-7271620__340.jpg"
        />
        <Post
          profileimg="https://avatars.githubusercontent.com/u/86152880?v=4"
          profileid="@mahajan_jaydeep"
          postimg="https://cdn.pixabay.com/photo/2022/07/06/18/34/mountains-7305769__340.jpg"
        />
        <Post
          profileimg="https://avatars.githubusercontent.com/u/86152880?v=4"
          profileid="@ronakDes"
          postimg="https://cdn.pixabay.com/photo/2022/06/09/10/13/beach-7252178__340.jpg"
        />
      </div>
      <Sidecontact />
    </section>
  );
}
