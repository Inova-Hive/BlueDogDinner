import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { BASE_URL } from "../globals";

interface EventProps {
  authenticated: boolean;
}

const Events: React.FC<EventProps> = ({ authenticated }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  interface Event {
    id: number;
    eventName: string;
    eventDescription: string;
    eventDate: string;
    eventTime: string;
    eventLocation: string;
  }

  const [events, setEvents] = useState<Event[] | null>(null);

  const getEvents = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/events/get_events`);
      setEvents(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const deleteEvent = async (eventId: number) => {
    try {
      await axios.delete(`${BASE_URL}/events/delete/id/${eventId}`);
      getEvents();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div data-cy='eventsDiv' className="mb-24 pt-36 ">
      <p className='text-center font-1-semibold text-7xl text-custom-blue'>Events</p>
      {events ? (
        <Carousel
          responsive={responsive}
          centerMode
          slidesToSlide={1}
          infinite={false}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {events.map((event) => (
            <div key={event.id} data-cy='liveCarousel' className="carousel-item border-8 border-custom-blue bg-slate-900 py-10 px-8 ">
              <p className="text-2xl text-center font-1-bold text-custom-red pb-8">{event.eventName}</p>
              <p className="text-lg font-1-semibold text-white text-center mb-10">{event.eventDescription}</p>
              <p className="text-md font-1-semibold text-white my-2"><span className='text-lg font-1-bold text-custom-red'>TIME:</span> {event.eventTime}</p>
              <p className="text-md font-1-semibold text-white my-2"><span className='text-lg font-1-bold text-custom-red'>DATE:</span> {event.eventDate}</p>
              <p className="text-md font-1-semibold text-white my-2"><span className='text-lg font-1-bold text-custom-red'>LOCATION:</span> {event.eventLocation}</p>
            
              <iframe
                title="event location"
                src={`https://www.google.com/maps?q=${event.eventLocation}&output=embed`}
                width="220"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                className='box-shadow2 rounded-lg mx-auto mt-10'
              />
              {authenticated && (
                <div className="text-sm flex justify-center items-center space-x-2 sm:space-x-3 mt-2">
                  <Link 
                    to={`/event/${event.id}/edit_event`} 
                  >
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded">
                      Edit
                    </button>
                  </Link>
                  <div className="border-r border-gray-500 h-4 sm:h-5 mx-2"></div>
                  <button onClick={() => deleteEvent(event.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded">
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
          {/* This is the extra invisible element */}
          <div className="carousel-item border-8 border-custom-red py-10 px-6 invisible"></div>
        </Carousel>
      ) : (
        <p className="text-center">Loading event info...</p>
      )}
      {authenticated && (
        <Link to={`/event/add`} className='flex justify-center text-center mb-12'>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded mt-2">
            Add Event
          </button>
        </Link>
      )}
    </div>
  );
};

export default Events;
