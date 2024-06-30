import React from 'react'
import './ExploreService.css'
import { service_list } from '../../assets/assets'
const ExploreService = ({category,setcategory}) => {
  return (
    <div className='explore-service' id='explore-service'>
        <h1>Look through our services</h1>
        <p className='explore-service-text'>Discover the ease of managing your home with ServiNest. We connect you with trusted professionals for every task, ensuring high-quality service and customer satisfaction. Say goodbye to home maintenance stress and hello to a well-kept home.</p>
        <div className="explore-service-list">
            {service_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory(prev=>prev===item.service_name?"All":item.service_name)} key={index} className='explore-service-list-item'>
                        <img className={category===item.service_name?"active":""} src={item.service_image} alt="" />
                        <p>{item.service_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreService