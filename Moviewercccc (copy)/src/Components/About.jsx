import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
        <div className="bg-white py-24">  
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-5/12">
                <img src="https://cdn.pixabay.com/photo/2017/07/13/23/11/cinema-2502213_960_720.jpg" alt='' loading="lazy" width="" height=""/>
              </div>
              <div className="md:7/12 lg:w-6/12">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">"Moviewer: Enjoy and Entertenment Movies for You"</h2>
                <p className="mt-6 text-gray-600">Moviewer is a great website for movie reviews! It's easy to navigate and provides comprehensive reviews and ratings for a wide variety of films. The site also features user reviews, so you can get a better sense of what people think about a movie before seeing it. Moviewer also offers trailers and other movie-related content to enhance your viewing experience. Whether you're looking for the perfect movie to watch or just want to stay up-to-date on the latest releases, Moviewer is a valuable resource.</p>
                <p className="mt-4 text-gray-600">Moviewer is an amazing website that provides movie summaries from a variety of different genres. Whether you're looking for an action-packed blockbuster or a thought-provoking drama, Moviewer has you covered. The summaries are written in an easy-to-understand way, allowing even the most novice of movie-goers to understand the plot. Moviewer also includes ratings from both critics and users, so you can get an idea of what others think about a movie before you watch it. With Moviewer, you'll never be bored – so check it out today!</p>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default About;