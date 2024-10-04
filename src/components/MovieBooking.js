import React, { useState } from 'react';

const MovieBooking = () => {


    const movieList = [
        {
            movieName: 'Rocketry: The Nambi Effect',
            ticketRate: '250',
            description: 'Based on the life of Indian Space Research Org scientist Nambi Narayanan, who was framed for being a spy ',
            shows: ['09.00 AM - 12.00 AM', '12.30 PM - 1.30 PM', ' 1.30 PM - 3.30']
        },
        {
            movieName: '3 Idiots',
            ticketRate: '300',
            description: 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories.',
            shows: ['10.00 AM - 12.00 PM', '03.00 PM - 6.00 PM', '05.00 PM - 8.00 PM', '09.00 PM - 11.00 PM']
        },
        {
            movieName: 'Avangers',
            ticketRate: '500',
            description: 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories.',
            shows: ['10.00 AM - 12.00 PM', '03.00 PM - 6.00 PM', '05.00 PM - 8.00 PM', '09.00 PM - 11.00 PM', '10.00 PM - 1.00 AM']
        },
        {
            movieName: 'Dangal',
            ticketRate: '200',
            description: 'wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games.',
            shows: ['04.00 PM - 07.00 PM']
        },
        {
            movieName: 'Drishyam 2',
            ticketRate: '240',
            description: 'an investigation and a family which is threatened by it. Will Georgekutty be able to protect his family this time?',
            shows: ['11.00 AM - 02.00 PM', '02.00 PM - 05.00 PM']
        }
    ]
    let [selectedMovie, setSelectedMovie] = useState({ movieName: '', description: '', ticketRate: '', shows: [] });
    let [selectedShow, setSelectedShow] = useState('');
    let [noOfTickets, setNoOFTickets] = useState('')
    let [totalBill, setTotalBill] = useState('')

    const changeSelectedMovie = (movieObj) => {
        debugger;
        setSelectedShow('')
        setSelectedMovie(prevObj => ({ ...prevObj, movieName: movieObj.movieName, ticketRate: movieObj.ticketRate, shows: movieObj.shows }))
    }

    const changeSelectedShow = (show) => {
        setSelectedShow(show)
    }
    const changeNoOfTickets = (event) => {
        setNoOFTickets(event.target.value)
    }

    const bookTicket = () => {
        const totalBill = selectedMovie.ticketRate * noOfTickets;
        setTotalBill(totalBill)
    }


    return (
        <div className='container'>
            {selectedMovie.movieName} - {selectedShow}
            <div className='row'>
                {
                    movieList.map((movie, index) => {
                        return <div className='col-3 pt-1'>
                            <div className='card' onClick={() => { changeSelectedMovie(movie) }}>
                                <div className={`card-header ${selectedMovie.movieName == movie.movieName ? 'bg-success' : ''}`}>
                                    {movie.movieName}
                                </div>
                                <div className='card-body'>
                                    {movie.description}
                                </div>
                                <div className='card-footer'>
                                    {movie.ticketRate}
                                </div>
                            </div>
                        </div>

                    })
                }
            </div>
            <div className='row pt-1'>
                <div className='col-12 text-left'>
                    {
                        selectedMovie.shows.map((showTiming) => {
                            return <button className={`btn mx-1 ${selectedShow == showTiming ? 'btn-success' : 'btn-secondary'}`} onClick={() => { changeSelectedShow(showTiming) }}>  {showTiming}  </button>
                        })
                    }
                </div>
            </div>
            {
                selectedShow !== '' && <div className='row'>
                    <div className='col-3'>
                        <input type='text' onChange={(event) => { changeNoOfTickets(event) }} className='form-control' />
                    </div>
                    <div className='col-3 text-end'>
                        <button className='btn btn-primary ' onClick={bookTicket}>Book</button>
                    </div>

                    {
                        totalBill != '' && <div className='col-6 text-end'>
                            Selectd Movie : {selectedMovie.movieName} <br />
                            Selectd Show : {selectedShow} <br />
                            Total Bill : {totalBill}
                        </div>
                    }

                </div>
            }


        </div>
    );
};

export default MovieBooking;