import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className=" video-item">
            <img alt={video.snippet.title}
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
            />
            <div className="ui content">
                <h4 className="ui header">
                    {video.snippet.title}
                </h4>
                <p style={
                    {
                        whiteSpace: "nowrap",
                        overflow: 'hidden',
                        textOverflow: 'elipsis'
                    }}>{video.snippet.description}
                </p>
                </div>
            </div>
    );
};

export default VideoItem;