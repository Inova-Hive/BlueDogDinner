import React,{ useState, useEffect } from 'react'
import axios from 'axios'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {BASE_URL} from "../globals"

const Events: React.FC = () => {
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
    
    const [events, setEvents] = useState<Event[] | null>(null)
    
    useEffect(() => {
        const GetEvents = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/events/get_events`)
                setEvents(res.data)
                console.log(res.data)
            } catch (error) {
                console.error(error);
            }
        }
        
        GetEvents()
    }, [])

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
                    style={{border:0}}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                    className='box-shadow2 rounded-lg mx-auto mt-10'
                    />
                </div>
            ))}
            {/* This is the extra invisible element */}
            <div className="carousel-item border-8 border-custom-red py-10 px-6 invisible"></div>
            </Carousel>
          ) : (
            <p className="text-center">Loading event info...</p>
          )}
        </div>
      );
    };
    
    export default Events;