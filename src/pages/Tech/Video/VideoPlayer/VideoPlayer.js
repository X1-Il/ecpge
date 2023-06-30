import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({ Y, D, S }) => {
  let src = "";

  if (Y) {
    src = `https://www.youtube.com/embed/${Y}`;
  } else if (D) {
    src = `https://drive.google.com/file/d/${D}/preview`;
  } else if (S) {
    src = `https://taalimma-my.sharepoint.com/${S}`;
  }

  return <iframe src={src} width="1200" height="630" allowFullScreen></iframe>;
};

VideoPlayer.propTypes = {
  Y: PropTypes.string.isRequired,
  D: PropTypes.string.isRequired,
  S: PropTypes.string.isRequired,
};

export default VideoPlayer;
