import React, { useContext,  useState,useEffect } from 'react'
import './ServiceItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const ServiceItem = ({ id, name, price, description, image }) => {
    
    const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext);
    const [itemCount, setItemCount] = useState(cartItems[id] || 0);
    //const [selectedValue, setSelectedValue] = useState('Select');
    //const [itemCount, setItemCount] = useState(cartItems[id] || 0);
    useEffect(() => {
        setItemCount(cartItems[id] || 0);
    }, [cartItems, id]);
    
    const handleChange = (event) => {
        const selectedOption = event.target.value;
        //setSelectedValue(selectedOption);
        if (selectedOption === 'Select') {
            setItemCount(0);
            removeFromCart(id);
        }else {
            const newCount=itemCount===0?1:itemCount+1;
            setItemCount(newCount); // Update local itemCount with selected value
            addToCart(id, newCount); // Update cartItems in context with selected value
        }
    };
    const handleAddToCart = () => {
        const newCount=itemCount+1;
        setItemCount(newCount);
        addToCart(id, newCount);
    };
    const handleRemoveFromCart = () => {
        if (itemCount > 0) {
            const newCount = itemCount - 1;
            setItemCount(newCount);
            if (newCount === 0) {
                removeFromCart(id);
            } else {
                addToCart(id, newCount);
            }
        }
        
    };
    return (
        <div className='service-item'>
            <div className="service-item-container">
                <img className='service-item-image' src={url+"/images/"+image} alt="" />
                {
                    itemCount===0
                        ? <img className='add' onClick={handleAddToCart} src={assets.plus} alt="" />
                        : <div className='service-item-counter'>
                            <p>{itemCount}</p>
                            <select onChange={handleChange} >
                                <option value="Select">Select</option>
                                <option value="10.00">10.00</option>
                                <option value="11.00">11.00</option>
                                <option value="12.00">12.00</option>
                                <option value="13.00">13.00</option>
                                <option value="14.00">14.00</option>
                                <option value="15.00">15.00</option>
                                <option value="16.00">16.00</option>
                                <option value="17.00">17.00</option>
                                <option value="18.00">18.00</option>
                                <option value="19.00">19.00</option>
                                <option value="20.00">20.00</option>
                            </select>
                        </div>
                }
            </div>
            <div className="service-item-info">
                <div className="service-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.stars_img} alt="" />
                </div>
                <p className="service-item-description">{description}</p>
                <p className="service-item-price">₹{price}</p>
            </div>
        </div>
    )
}

export default ServiceItem