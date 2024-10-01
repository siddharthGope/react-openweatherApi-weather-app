import React from "react";

const List = () => {
  return (
    <div className="list">
      <div className="row">
        <h2 className="text-white title">List</h2>
        <div className="col">
          <div className="row__posters">
            {/* {list.map((item) => ( */}
            <img
              className="row__poster row__posterLarge"
              src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
              alt=""
            />
            <img
              className="row__poster row__posterLarge"
              src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
              alt=""
            />
            <img
              className="row__poster row__posterLarge"
              src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
              alt=""
            />
            <img
              className="row__poster row__posterLarge"
              src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
              alt=""
            />
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
