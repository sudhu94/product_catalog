import * as actionTypes from '../actions/actionTypes';
import mobile from '../../assets/Images/mobile.jpeg';
import ac from '../../assets/Images/ac.jpg';
import tv from '../../assets/Images/tv.jpg';
import fridge from '../../assets/Images/fridge.jpeg';
import washing_machine from '../../assets/Images/washing_machine.jpeg';
import bat from '../../assets/Images/bat.jpg';
import hockey from '../../assets/Images/hockey.jpeg';
import screen from '../../assets/Images/screen.jpg';
import gas_stoove from '../../assets/Images/gas_chula.jpg';
import laptop from '../../assets/Images/laptop.jpeg';
import induction from '../../assets/Images/induction.jpeg';
import fan from '../../assets/Images/fan.jpg';


const initialState = [
    {
        id: 1,
        image: fridge,
        title: 'Fridge',
        description: 'SAMSUNG 198 L Direct Cool Single Door 5 Star Refrigerator.',
        price: 12000,
        button: 'ADD',
        count: 1
    },
    {
        id: 2,
        image: washing_machine,
        title: 'Washing Machime',
        description: 'Whirlpool 6 kg 5 Star,Turbo Scrub Technology Semi Automatic.',
        price: 8000,
        button: 'ADD',
        count: 1
    },
    {
        id: 3,
        image: tv,
        title: 'TV',
        description: 'SAMSUNG 32 cm (80 inch) HD Ready LED Smart TV  (UA32T4450)',
        price: 10000,
        button: 'ADD',
        count: 1
    },
    {
        id: 4,
        image: ac,
        title: 'AC',
        description: 'Panasonic 1 Ton 5 Star Split Inverter AC with Wi-fi Connect',
        price: 32500,
        button: 'ADD',
        count: 1
    },
    {
        id: 5,
        image: mobile,
        title: 'Mobile',
        description: 'APPLE iPhone 12 (Black, 64 GB), All Screen OLED Display',
        price: 39999,
        button: 'ADD',
        count: 1
    },
    {
        id: 6,
        image: gas_stoove,
        title: 'Gas Stove',
        description: 'Prestige Vogue PHTV 03 Glass Automatic Hob  (2 Burners)',
        price: 2000,
        button: 'ADD',
        count: 1
    },
    {
        id: 7,
        image: screen,
        title: 'Curtains',
        description: 'Home Sizzler 153 cm (5 ft) Polyester Window Curtain',
        price: 350,
        button: 'ADD',
        count: 1
    },
    {
        id: 8,
        image: bat,
        title: 'Bat',
        description: 'CEAT POPLAR WILLOW CRICKET BAT, Poplar Willow Cricket Bat',
        price: 899,
        button: 'ADD',
        count: 1
    },
    {
        id: 9,
        image: hockey,
        title: 'Hockey',
        description: 'SNS MADMAN 1000 Composite Hockey Stick - 37.5 inch  (Yellow)',
        price: 999,
        button: 'ADD',
        count: 1
    },
    {
        id: 10,
        image: laptop,
        title: 'Laptop',
        description: 'DELL G15 Core i5 10th Gen, inspiron 5510 Gaming Laptop',
        price: 59899,
        button: 'ADD',
        count: 1
    },
    {
        id: 11,
        image: induction,
        title: 'Induction',
        description: 'Prestige PIC 6.1V3 Induction Cooktop  (Black, Touch Panel)',
        price: 2999,
        button: 'ADD',
        count: 1
    },
    {
        id: 12,
        image: fan,
        title: 'Fan',
        description: 'Candes STAR 1200 mm Ultra High Speed 3 Blade Ceiling Fan',
        price: 1499,
        button: 'ADD',
        count: 1
    }


]

const items = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INIT_ITEMS:
            return {
                    ...state
            }
        default:
            return state;
    }
}

export default items;