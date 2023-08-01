import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { format, parse } from 'date-fns';

import { BASE_URL } from "../globals";

type Params = {
  [key: string]: string | undefined;
  id?: string;
};

const EventInfo: React.FC = () => {
  const { id } = useParams<Params>();
  const navigate = useNavigate();

  const [event, setEvent] = useState({
    eventName: '',
    eventDescription: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
  });

  useEffect(() => {
    if (id) {
      axios.get(`${BASE_URL}/events/get_event/${id}`)
        .then((res) => {
          const data = res.data;
          // Update the format string to 'yyyy-MM-dd'
          const date = format(new Date(data.eventDate), 'yyyy-MM-dd');
          setEvent({
            ...data,
            eventDate: date,
            eventTime: data.eventTime,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Format the date as yyyy/MM/dd
    const dateToSend = event.eventDate;
  
    // eventTime is already in 24-hour format
    const timeToSend = event.eventTime;
  
    const eventToSend = {
      ...event,
      eventDate: dateToSend,
      eventTime: timeToSend,
    };
  
    if (id) {
      axios.put(`${BASE_URL}/events/id/${id}`, eventToSend)
        .then(() => {
          navigate('/');
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios.post(`${BASE_URL}/events/create_event`, eventToSend)
        .then(() => {
          navigate('/');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">
        {id ? 'Edit Event' : 'Add Event'}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventName">
            Event Name
          </label>
          <input
            type="text"
            name="eventName"
            value={event.eventName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventDescription">
            Event Description
          </label>
          <input
            type="text"
            name="eventDescription"
            value={event.eventDescription}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventDate">
            Event Date
          </label>
          <input
            type="date"
            name="eventDate"
            value={event.eventDate}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventTime">
            Event Time
          </label>
          <input
            type="time"
            name="eventTime"
            value={event.eventTime}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventLocation">
            Event Location
          </label>
          <input
            type="text"
            name="eventLocation"
            value={event.eventLocation}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {id ? 'Update Event' : 'Add Event'}
        </button>
      </form>
    </div>
  );
};

export default EventInfo;
