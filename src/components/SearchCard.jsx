import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Time from "../loader/Time";
import { Link } from "react-router-dom";

function SearchCard({ video }) {
  console.log(video);
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col mb-8 md:flex-row md:mb-3 md:p-4">
          <div className="relative flex w-full h-48 md:w-80 ">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={video?.thumbnails[0]?.url}
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex flex-col mt-4 ml-4 overflow-hidden md:ml-6 md:mt-0">
            <span className="text-lg font-semibold md:text-2xl line-clamp-2 ">
              {video?.title}
            </span>
            <span className="text-sm empty:hidden line-clamp-1 md:line-clamp-2md:pr-24 md:my-4">
              {video?.descriptionSnippet}
            </span>
            <div className="items-center hidden md:flex">
              <div className="flex items-start mr-3">
                <div className="flex overflow-hidden rounded-full h-9 w-9">
                  <img
                    className="object-cover w-full h-full"
                    src={video?.author?.avatar[0]?.url}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="flex items-center mt-2 text-sm font-semibold">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className=" text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
                  )}
                </span>
                <div className="flex overflow-hidden text-sm font-semibold truncate">
                  <span>{`${abbreviateNumber(
                    video?.stats?.views,
                    2
                  )} views`}</span>
                  <span className="flex text-[24px] leading-none font-bold  relative top-[-10px] mx-1">
                    .
                  </span>
                  <span className="truncate">{video?.publishedTimeText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchCard;