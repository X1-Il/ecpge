import React from "react";
import VideoPlayer from "./VideoPlayer";
//import C01 from "assets/Pdf/Sup/Math/Cours/C01.pdf";
// eslint-disable-next-line react/prop-types
const Video = ({ Y, D, S }) => {
  return (
    <div>
      <VideoPlayer Y={Y} D={D} S={S} />
    </div>
  );
};
export default Video;
