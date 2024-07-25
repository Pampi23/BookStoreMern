import React from "react";

function Cards({ item }) {
  return (
    <>
      <div>
        <div className="card bg-base-100 w-92 shadow-xl mt-12 mx-2 my-10 p-2 hover:scale-105 duration-200">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
              
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline px-6 py-4">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white px-6 py-4">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
