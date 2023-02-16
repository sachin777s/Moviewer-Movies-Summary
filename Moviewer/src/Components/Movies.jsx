import React from 'react';
import Detail from './Detail';
import MovieCard from './MovieCard';

class Movies extends React.Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            //Data for a particular movie sumamary
            selectData: {
                name: null,
                date: null,
                day: null,
                time: null,
                content: null,
                urlMore: null,
                imgUrl: null,
                rating: null
            },
            //By default Summary
            summaryStatus: 0

        }
    }

    //To fetch data from API

    dataFetcher = async () => {
        const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const parsedData = await response.json();
        this.setState({
            articles: this.state.articles.concat(parsedData)
        })
        console.log(parsedData[0].show.image.original)
    }


    componentDidMount() {
        this.dataFetcher();
    };


//To select data of a particular movie

    dataSelector = (i) => {
        this.setState({
            selectData: {
                name: this.state.articles[i].show.name,
                date: this.state.articles[i].show.premiered,
                day: this.state.articles[i].show.schedule.days[0],
                time: this.state.articles[i].show.schedule.time,
                content: this.state.articles[i].show.summary,
                urlMore: this.state.articles[i].show.url,
                urlImg: this.state.articles[i].show.image ? this.state.articles[i].show.image.original : '',
                rating: this.state.articles[i].show.rating.average
            },
            summaryStatus: 1
        })
    }

    render() {
        return (
            <div className='pt-16 px-2 flex justify-center items-center' style={{ height: '98vh', width: '100vw' }}>
                <div className='overflow-y-scroll' style={{ height: '100%', width: '40%' }}>
                    {
                        this.state.articles.map((elem, index) => {
                            return <div key={index}>
                                <MovieCard
                                    date={elem.show.premiered}
                                    name={elem.show.name}
                                    description={elem.show.summary.slice(0, 120) + "....."}
                                    imageUrl={elem.show.image ? elem.show.image.original : ''}
                                    select={() => this.dataSelector(index)}
                                />
                            </div>
                        })
                    }
                </div>

                <div style={{ width: '60%' }}>
                   { this.state.summaryStatus === 1?<Detail name={this.state.selectData.name}
                        time={this.state.selectData.time}
                        date={this.state.selectData.date}
                        day={this.state.selectData.day}
                        urlImg={this.state.selectData.urlImg}
                        urlMore={this.state.selectData.urlMore}
                        description={this.state.selectData.content}
                        rating={this.state.selectData.rating}
                    /> :
                    <div className='text-center'>
                        <h1 className='text-4xl text-red-900'>Welcome To <b className='text-red-600'> Moviewer</b></h1>
                    </div>
                }
                </div>
            </div>
        )
    }
}

export default Movies;
