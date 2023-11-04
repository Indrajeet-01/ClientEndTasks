import React from 'react';
import './home.css'

const toursData = [
  {
    date: 'JUL 16',
    location: 'DETROIT, MI',
    venue: 'DTE ENERGY MUSIC THEATRE',
    ticketLink: 'ticket-link-1',
  },
  {
    date: 'JUL 19',
    location: 'TORONTO, ON',
    venue: 'BUDWEISER STAGE',
    ticketLink: 'ticket-link-2',
  },
  {
    date: 'JUL 22',
    location: 'BRISTOW, VA',
    venue: 'JIGGY LUBE LIVE',
    ticketLink: 'ticket-link-3',
  },
  {
    date: 'JUL 29',
    location: 'PHOENIX, AZ',
    venue: 'AK-CHIN PAVILION',
    ticketLink: 'ticket-link-4',
  },
  {
    date: 'AUG 2',
    location: 'LAS VEGAS, NV',
    venue: 'T-MOBILE ARENA',
    ticketLink: 'ticket-link-5',
  },
  {
    date: 'AUG 7',
    location: 'CONCORD, CA',
    venue: 'CONCORD PAVILION',
    ticketLink: 'ticket-link-6',
  },
];

const HomePage = () => {
  return (
    <div>
      <h1>Get our Latest Album</h1>
      <div className="play-button">
        <i className="fa fa-play-circle"></i>
      </div>
      <h2>TOURS</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Venue</th>
            <th>Buy Tickets</th>
          </tr>
        </thead>
        <tbody>
          {toursData.map((tour, index) => (
            <tr key={index}>
              <td>{tour.date}</td>
              <td>{tour.location}</td>
              <td>{tour.venue}</td>
              <td>
                <a href={tour.ticketLink} target="_blank" rel="noopener noreferrer">
                  BUY TICKETS
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
