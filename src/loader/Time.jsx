import moment from "moment";
import React from "react";

function Time({ time }) {
  const videoTime = moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss");
  return (
    <div>
      <span className="absolute px-2 py-1 text-xs text-white bg-black rounded-md bottom-2 right-2">
        {videoTime}
      </span>
    </div>
  );
}

export default Time;