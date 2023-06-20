import React, { useState, useEffect, useCallback, FC } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// global imports
import { BASE_URL } from '../globals';

// icons imports
import { FaHotdog, FaConciergeBell } from 'react-icons/fa';
import { GiChipsBag, GiCoffeeCup } from 'react-icons/gi';
import { MdLocalDrink } from 'react-icons/md';

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

interface MenuProps {
  authenticated: boolean;
}

const Menu: FC<MenuProps> = ({ authenticated }) => {
  const [menu, setMenu] = useState<Menu[] | null>(null);
  const [specialItem, setSpecialItem] = useState<Section_Menu_Items | null>(null);

  const GetMenu = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/menu/get_menu`);
      setMenu(res.data);

      const specialsMenu = res.data[0].menu_section.find((section: Section) => section.sectionName === 'Specials Menu');
      if (specialsMenu && specialsMenu.section_menu_items.length > 0) {
        setSpecialItem(specialsMenu.section_menu_items[0]);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    GetMenu();
  }, [GetMenu]);

  const deleteItem = async (itemId: number) => {
    try {
      await axios.delete(`${BASE_URL}/menu/delete_item/${itemId}`);
      GetMenu();
    } catch (error) {
      console.error(error);
    }
  };

  const getIcon = (itemName: string) => {
    let icon;
    let iconSize = 40;
    switch (itemName) {
      case 'Hotdogs':
        icon = <FaHotdog size={iconSize} />;
        break;
      case 'Sides':
        icon = <GiChipsBag size={iconSize} />;
        break;
      case 'Drinks':
        icon = <MdLocalDrink size={iconSize} />;
        break;
      case 'Coffee':
        icon = <GiCoffeeCup size={iconSize} />;
        break;
      case 'Specials Menu':
        icon = <FaConciergeBell size={iconSize} />;
        break;
      default:
        icon = <FaHotdog size={iconSize} />;
    }
    return icon;
  };

  return (
    <div className='mx-auto menu-background py-2 pb-20'>
      {menu && (
        <div className="border-8 px-4 sm:px-16 py-8 sm:py-14 lg:px-36 mx-4 sm:mx-auto mt-10 w-full sm:w-2/3 menu-letter-background">
          <h1 className='text-center font-1-bold text-white text-3xl sm:text-5xl m-2 pb-10 sm:pb-32'>{menu[0].menuDescription}</h1>

          {menu[0].menu_section.map((section: Section) => (
            <div key={section.id}>
              <div className="flex flex-col justify-center items-center text-custom-red">
                <p className="pb-4">{getIcon(section?.sectionName)}</p>
                <p className='text-center font-1-semibold text-white text-2xl sm:text-3xl pb-6 ml-2'>{section.sectionName}</p>
              </div>

              {section.sectionName === "Specials Menu" ? (
                <div className="flex flex-col justify-center items-center">
                  <select 
                    className="form-select mb-4"
                    value={specialItem ? specialItem.id : ""}
                    onChange={e => {
                      const selectedItem = section.section_menu_items.find(item => item.id === parseInt(e.target.value));
                      if (selectedItem) setSpecialItem(selectedItem);
                    }}
                  >
                    
                    {section.section_menu_items.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.itemName}
                      </option>
                    ))}
                  </select>

                  {specialItem && specialItem.image && (
                    <div className="pb-4 text-center">
                      <img src={specialItem.image} alt="menu item image" className='mx-auto w-full sm:w-3/4 pb-4 rounded'/>
                      <div className='text-white pb-2'>
                        <p className='font-semibold'>{specialItem.itemName}</p>
                        <p className='text-sm'>{specialItem.itemDescription}</p>
                        <p className='font-bold'>{`$${specialItem.price}`}</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 lg:gap-20 text-center m-2'>
                  {section.section_menu_items.map((item) => (
                    <div key={item.id} className='pb-4'>
                      {item.image && <img src={item.image} alt="menu item image" className='pb-4 rounded'/>}
                      <div className='text-white pb-2'>
                        <p className='font-semibold'>{item.itemName}</p>
                        <p className='text-sm pt-2'>{item.itemDescription}</p>
                        <p className='font-bold'>{`$${item.price}`}</p>
                        {authenticated && (
                          <div className="text-sm flex justify-center items-center space-x-2 sm:space-x-3 mt-2">
                            <Link 
                              to={`/item/${section.id}/${item.id}/edit_item`} 
                              state={{
                                image: item.image,
                                itemName: item.itemName,
                                itemDescription: item.itemDescription,
                                price: item.price,
                              }}
                            >
                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded">
                                Edit
                              </button>
                            </Link>
                            <div className="border-r border-gray-500 h-4 sm:h-5 mx-2"></div>
                            <button onClick={() => deleteItem(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded">
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {authenticated && (
                <Link to={`/item/add`} className='flex justify-center text-center mb-12'>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded mt-2">
                    Add Item
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Menu;
