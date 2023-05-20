import React, { useState, useEffect, FC } from 'react'
import axios from 'axios'

import { BASE_URL } from '../globals'

import { FaHotdog, FaConciergeBell } from 'react-icons/fa';
import { GiChipsBag, GiCoffeeCup } from 'react-icons/gi';
import { MdLocalDrink} from 'react-icons/md';

// Define interfaces for the data structure
interface Section_Menu_Items {
  id: number;
  sectionId: number;
  itemName: string;
  itemDescription: string;
  price: number;
  image: string;
}

interface Section {
  id: number;
  menuId: number;
  sectionName: string;
  section_menu_items: Section_Menu_Items[];
}

interface Menu {
  id: number;
  menuDescription: string;
  menu_section: Section[];
}

const Menu: FC = () => {
  // State to hold the menu data
  const [menu, setMenu] = useState<Menu[] | null>(null)

  // useEffect to run on component mount
  useEffect(() => {
    // Define async function to get menu data
    const GetMenu = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/menu/get_menu`)
        setMenu(res.data)
        console.log(res.data)
      } catch (error) {
        console.error(error);
      }
    }
    
    // Call function to fetch data
    GetMenu()
  }, [])

  const getIcon = (itemName: string) => {
    let icon;
    let iconSize = 40
    switch (itemName) {
      case 'Hotdogs':
        icon = <FaHotdog size={iconSize}/>;
        break;
      case 'Sides':
        icon = <GiChipsBag size={iconSize}/>;
        break;
      case 'Drinks':
        icon = <MdLocalDrink size={iconSize}/>;
        break;
      case 'Coffee':
        icon = <GiCoffeeCup size={iconSize}/>;
        break;
      case 'Specials Menu':
        icon = <FaConciergeBell size={iconSize}/>;
        break;
      default:
        icon = <FaHotdog size={iconSize}/>;
    }
    return icon;
  }
  

  // Render component
  return (
    <div className='mx-auto menu-background py-2 pb-20'>
      {/* Check if menu data exists before trying to render it */}
      {menu && (
        <div className="border-8 px-16 py-14 px-36 mx-auto mt-20 w-2/3 menu-letter-background" >
          {/* Menu header */}
          <h1 className='text-center font-1-bold text-white text-5xl m-2 pb-32'>{menu[0].menuDescription}</h1>
          
          {/* Loop over menu sections */}
          {menu[0].menu_section.map((section) => (
            <div key={section.id}>
              {/* Display section name */}
              <div className="flex flex-col justify-center items-center text-custom-red">
                <p className="pb-6">{getIcon(section?.sectionName)}</ p>
                <p className='text-center font-1-semibold text-white text-3xl pb-10 ml-2'>{section.sectionName}</p>
              </div>
              
              {/* Container for section menu items */}
              <div className='grid grid-cols-2 gap-56 text-center m-2'>
                {/* Loop over section menu items */}
                {section.section_menu_items.map((item) => (
                  <div key={item.id} className='pb-6'>
                    <img src={item.image} alt="menu item image" className='pb-6'/>
                    <div className='text-white pb-4'>
                      <p className='font-semibold'>{item.itemName}</p>
                      <p className='text-sm'>{item.itemDescription}</p>
                      <p className='font-bold'>{`$${item.price}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Menu