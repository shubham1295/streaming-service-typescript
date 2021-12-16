import React from 'react';

const Player = (props: { streamUrl: string }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>{props.streamUrl}</h3>
      <iframe
        title='Movie'
        src={props.streamUrl}
        width='800'
        height='600'
        allowFullScreen
        allow='autoplay'
        scrolling='no'
        frameBorder='0'
      ></iframe>
    </div>
  );
};

export default Player;
