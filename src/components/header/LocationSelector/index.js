import React from 'react';

const LocationSelector = ({values, title}) => {
    const setValue = (id) => {

    }
    return (
            <li>
                <a >{title}</a>
                <ul>
                    {
                        values.map((value, index)=>{
                            return (
                                <li key={index}>
                                <a onClick={()=>setValue(value.id)}
                                href="javascript:;">{value.name}</a>
                            </li>
                            )
                        })
                    }
               
                </ul>
            </li>


    )
}

export default LocationSelector;