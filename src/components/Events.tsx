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
        <div className='mb-24'>
            {event ? (
                <div className="flex flex-col items-center justify-center border-8 w-2/4 border-custom-red py-10 px-6 mx-auto m-4 mt-24 font-1-semibold">
                    <p className="text-lg text-custom-red text-xl pb-6">{event[0].eventName}</p>
                    <p className="text-lg text-center mb-6">{event[0].eventDescription}</p>
                    <p className="text-lg text-custom-blue">{event[0].eventDate}</p>
                </div>
            ): (
                <p className="text-center">Loading event info...</p>
            )}
        </div>
    )
}

export default Events
