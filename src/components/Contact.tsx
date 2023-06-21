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
  
  interface Hours {
    id: number;
    day: string;
    open: string;
    close: string;
  }

  const [contactInfo, setContactInfo] = useState<Contact[] | null>(null)
  const [hours, setHours] = useState<Hours[] | null>(null)

  useEffect(() => {
    const GetContact = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/contact/get_contact_info`)
        setContactInfo(res.data)
      } catch (error) {
        console.error(error);
      }
    }

    const GetHours = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/hours/get_hours`)
        setHours(res.data)
        console.log(res.data)
      } catch (error) {
        console.error(error);
      }
    }
    
    GetContact()
    GetHours()
  }, [])

  return (
    <div className='divider-2-shadow'>
      <div className='flex flex-col items-center justify-center text-lg font-1-bold mx-auto pt-24 w-full sm:w-2/4 px-4 sm:px-0'>

        {/* contact section*/}
        {contactInfo && hours ? (
          <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-4 sm:gap-x-24">

            <div className='w-full sm:w-auto'>
              {/* Stay In Touch Text */}
              <div data-cy='stayInTouchDiv' className='mx-10 font-shadow text-5xl pb-24 text-custom-blue'>
                <p className="line1">STAY IN</p>
                <p className="line2">TOUCH!</p>
              </div>

              <div cy-data='contactDiv' className='m-4 border-8 border-custom-red px-6 py-10 box-shadow2 rounded-lg'>
                <h1 className='text-3xl pb-4 text-custom-blue'>Contact Us</h1>
                
                {/* divider image */}
                <div className=' mb-8'>
                  <img className="w-44 mx-auto" src="https://i.imgur.com/A14h6P8.png" alt="page divider" />
                </div>
                
                {/* phone */}
                <p className='my-4'><span className="text-custom-red">PHONE:</span> {contactInfo[0].phone}</p>
                
                {/* E-mail */}
                <p className='my-4'><span className="text-custom-red">E-MAIL:</span> {contactInfo[0].email}</p>
                
                {/* address */}
                <p className='my-4'><span className="text-custom-red">ADDRESS:</span> {contactInfo[0].location}</p>
              </div>
            </div>

            <div data-cy='hoursLocationDiv' className='mx-auto  flex flex-col justify-center my-4 border-8 border-custom-red rounded-lg box-shadow2 px-4 sm:px-2 py-10'>
              <div>
                <p className='text-3xl pb-4 text-custom-blue mx-4'>Hours & Location</p>
              </div>
              
              {/* divider image */}
              <div className=' mx-4 mb-8'>
                  <img className="w-72 mx-auto" src="https://i.imgur.com/A14h6P8.png" alt="page divider" />
                </div>

              <div>
                {hours.map((hour) => (
                  <div className='my-6 mx-4'>
                    <p className='font-1-bold text-custom-red text-xl'>{hour.day}</p>
                    <p className='font-1-semibold text-lg'><span>{hour.open}</span> - <span>{hour.close}</span></p>
                  </div>
                ))}
              </div>
              
              {/* Google iframe map */}
              <div className='m-2'>
                <iframe 
                  title="business location"
                  src={`https://www.google.com/maps?q=${contactInfo[0].location}&output=embed`}
                  width="100%"
                  style={{maxWidth: "350px", border:0}}
                  height="250"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  className='box-shadow2 rounded-lg'
                  />
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default Contact
