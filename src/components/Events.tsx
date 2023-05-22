import React,{ useState, useEffect } from 'react'
import axios from 'axios'

import {BASE_URL} from "../globals"

const Events: React.FC = () => {
    
    interface Event {
        id: number;
        eventName: string;
        eventDescription: string;
        eventDate: string;
        eventTime: string;
        eventLocation: string;
      }
    
      const [event, setEvent] = useState<Event[] | null>(null)
    
      useEffect(() => {
        const GetEvents = async () => {
          try {
            const res = await axios.get(`${BASE_URL}/events/get_events`)
            setEvent(res.data)
            console.log(res.data)
          } catch (error) {
            console.error(error);
          }
        }
        
        GetEvents()
      }, [])
    return (
        <>
            {event ? (
                <div>
                    <p>{event[0].eventName}</p>
                    <p>{event[0].eventDescription}</p>
                    <p>{event[0].eventDate}</p>
                </div>
           
            ):
            (
                <p>Loading event info...</p>
            )}
        </>
    )
}

export default Events
