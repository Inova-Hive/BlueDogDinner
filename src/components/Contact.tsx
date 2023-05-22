import React,{ useState, useEffect } from 'react'
import axios from 'axios'

import {BASE_URL} from "../globals"

const Contact: React.FC = () => {

  interface Contact {
    id: number;
    phone: string;
    email: string;
    location: string;
  }

  const [contactInfo, setContactInfo] = useState<Contact[] | null>(null)

  useEffect(() => {
    const GetContact = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/contact/get_contact_info`)
        setContactInfo(res.data)
        console.log(res.data)
      } catch (error) {
        console.error(error);
      }
    }
    
    GetContact()
  }, [])

  return (
    <>
      {contactInfo ? (
        <div className="flex justify-center gap-24 mt-24">
          <div className='m-4 border-8 border-custom-red p-4 '>
            <h1>Contact</h1>
            <p>{contactInfo[0].phone}</p>
            <p>{contactInfo[0].email}</p>
            <p>{contactInfo[0].location}</p>
          </div>
          
          <div className='m-4'>
            <iframe 
              src={`https://www.google.com/maps?q=${contactInfo[0].location}&output=embed`}
              width="350"
              height="250"
              style={{border:0}}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              />
          </div>
          
        </div>
      ) : (
        <p>Loading contact info...</p>
      )}
    </>
  )
}

export default Contact
