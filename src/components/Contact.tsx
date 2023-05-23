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
    <div className='contact text-lg font-1-bold'>
      {contactInfo ? (
        <div className="flex justify-center items-center gap-24 mt-24">
          <div className='m-4 border-8 border-custom-red px-6 py-10 box-shadow1'>
            <h1 className='text-2xl pb-4 text-custom-red'>Contact Us</h1>
            <div className=' mb-8'>
              <img className="w-40" src="https://i.imgur.com/Ke1QQlL.png" alt="page divider" />
            </div>
            <p><span className="text-custom-red">PHONE:</span> {contactInfo[0].phone}</p>
            <p><span className="text-custom-red">E-MAIL:</span> {contactInfo[0].email}</p>
            <p><span className="text-custom-red">ADDRESS:</span> {contactInfo[0].location}</p>
          </div>
          
          <div className='m-4 box-shadow2'>
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
    </div>
  )
}

export default Contact
