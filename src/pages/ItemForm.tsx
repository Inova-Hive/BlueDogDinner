import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

// global imports
import { BASE_URL } from '../globals'

interface FormState {
  id: number | undefined;
  itemName: string;
  itemDescription: string;
  price: string;
  image: string;
  sectionId: number | undefined;
}

const ItemForm: React.FC = () => {
    //routed-dom imports
    let navigate = useNavigate()
    const { sectionId, itemId } = useParams<Record<string, string>>();
  
    const sectionIdInt = sectionId ? parseInt(sectionId) : undefined;
    const itemIdInt = itemId ? parseInt(itemId) : undefined;
  
    const initialState: FormState = {
      id: itemIdInt,
      itemName: '',
      itemDescription: '',
      price: '',
      image: '',
      sectionId: sectionIdInt
    };
  

    const [formState, setFormState] = useState<FormState>(initialState)

    //if item already exists find it
    useEffect(() => {
        const getItem = async () => {
          try {
            const res = await axios.get(`${BASE_URL}/menu/item/${sectionId}/${itemId}/get_item`)
            setFormState(res.data[0])
            console.log(res.data[0])
          } catch (error) {
            console.error('Error fetching item:', error)
          }
        }
        if (itemIdInt && sectionIdInt) {
          getItem()
        }
      }, [sectionId, itemId, sectionIdInt, itemIdInt])

    //assigns the form inputs to the appropriate keys.
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [event.currentTarget.id]: event.currentTarget.value })
      }

    //if-else statement that distinguishes between a post-review axios call vs put-review axios call
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault()
      try {
        if (itemIdInt === undefined) {
          await axios.post(`${BASE_URL}/menu/item/add_item`, formState)
        } else {
          await axios.put(`${BASE_URL}/menu/item/${sectionIdInt}/${itemIdInt}/edit_item`, formState)
        }
        navigate(`/menu`)
      } catch (error) {
        console.error('Error submitting form:', error)
      }
    }

    return (
        <div className="flex justify-center mt-10">
          <form 
            onSubmit={handleSubmit} 
            className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemName">
                Item Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="itemName"
                type="text"
                value={formState.itemName}
                onChange={handleChange}
                placeholder='Item Name'
                />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemDescription">
                Item Description
              </label>
              <textarea 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none" 
                id="itemDescription" 
                value={formState.itemDescription} 
                onChange={handleChange} 
                placeholder="Item Description"
                maxLength={200} 
                rows={4}
                />

            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                Price
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="price" 
                type="number" 
                value={formState.price} 
                onChange={handleChange} 
                placeholder="Price"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Image URL
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="image" 
                type="text" 
                value={formState.image} 
                onChange={handleChange} 
                placeholder="Image URL"
              />
            </div>
            <div className="flex items-center justify-between">
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )
}

export default ItemForm
