import React from "react";

export default class VideoItem extends React.Component {
  videoDataPassToApp = video => {
    this.props.onVideoSelect(video);
  };
  render() {
    const video = this.props.video;
    return (
      <div onClick={() => this.videoDataPassToApp(video)} className="item">
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}
