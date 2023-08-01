import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

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

  // Load event data if id is provided (editing existing event)
  useEffect(() => {
    if (id) {
      axios.get(`${BASE_URL}/events/get_event/${id}`)
        .then((res) => {
          setEvent(res.data);
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
    if (id) {
      // Edit existing event
      axios.put(`${BASE_URL}/events/id/${id}`, event)
        .then(() => {
          navigate(`${BASE_URL}/#events`); // Redirect to events page
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Create new event
      axios.post(`${BASE_URL}/events/create_event`, event)
        .then(() => {
            navigate(`${BASE_URL}/#events`); // Redirect to events page
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
