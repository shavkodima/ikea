    import { catalog } from './catalog.js';
import {getData} from './getData.js'
    
    const wishlist =['idd100', 'idd005', 'idd010'];

    const carList =[
        {
            id: 'idd015',
            count: 3
        },
        {
            id: 'idd005',
            count: 5
        },
        {
            id: 'idd055',
            count: 50
        }
    ];


export const loadData = () =>{

    if(location.hash){
        getData.item(location.hash.substring(1), (data)=> console.log(data));
    }
    if(location.search){
        // split разбивает строку
        const prop = decodeURI(location.search).split('=')[0].slice(1);
        const value = decodeURI(location.search).split('=')[1];

        if(prop === 'search'){
            console.log(value);
        }else if(prop === 'wishlist'){
           getData.wishList(wishlist, (data) => console.log(data));
        }else{
            getData.category(prop, value, (data)=> console.log(data));
        }
    }
    if(location.pathname.includes('cart')){
        getData.cart(carList, (data)=> console.log(data));
    }
};