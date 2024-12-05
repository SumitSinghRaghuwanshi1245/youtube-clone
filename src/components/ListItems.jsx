import React from "react";

function ListItems() {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Reverberation",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "1990s",
    "Telugu cinema",
    "Live",
    "Dramedy",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
    "Learn Coding",
  ];
  return (
    <div className="flex px-4 overflow-x-scroll hide-scroll-bar">
      <div className="flex space-x-4 flex-nowrap">
        {categories.map((category) => {
          return (
            <div
              key={category}
              className="flex-none px-4 py-2 mb-4 font-medium text-gray-700 duration-300 bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-xl"
            >
              {category}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListItems;