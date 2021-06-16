import React from 'react';

function DisplayMsg() {
  let currTime = new Date();
  var message = '',
    imgeUrl = '',
    messageStyle = {
      color: '#84afb4'
    };

  currTime = currTime.toLocaleString('en-US', {
    hour: 'numeric',
    hour12: false
  });

  if (currTime >= 1 && currTime <= 11) {
    message = 'Good Morning!!!';
    imgeUrl = 'https://picsum.photos/seed/picsum/200/300';
    messageStyle.color = '#84afb4';
  } else if (currTime > 11 && currTime < 19) {
    message = 'Good Afternoon!!!';
    imgeUrl = 'https://picsum.photos/id/1001/5616/3744';
    messageStyle.color = '#fcd955';
  } else if (currTime >= 19 && currTime <= 24) {
    message = 'Good Night!!!';
    imgeUrl = 'https://picsum.photos/200/300.jpg';
    messageStyle.color = '#120f18';
  }
  return (
    <>
      <h1>
        Hello Yogss, <span style={messageStyle}>{message}</span>
      </h1>
      <img src={imgeUrl} alt="Message Img" width="400" />
    </>
  );
}
export default DisplayMsg;
