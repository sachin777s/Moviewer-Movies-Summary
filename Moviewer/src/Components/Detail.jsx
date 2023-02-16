import React from 'react'

export default function Detail({ name, description, date, day, time, urlMore, urlImg, rating }) {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={urlImg} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
            <div className="flex mb-4 bg-slate-400">
              <span className="flex items-center">
                <span className="text-blue-900 ml-3"><strong>{time}</strong></span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s text-red-800"><strong>{day},  {date}</strong></span>
            </div>
            <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} ></p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">Average Rating: {rating}</span>
              <a className="flex cursor-pointer ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" href={urlMore}>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
