import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go';


function Status() {
    const icony = (icon) => {
        return icon
    }
    return (
        <div className='white w-[100%] h-[19%] text-black font-bold inline-block'>
            <div className='w-[100%] h-[40px] orange pl-[60px] pt-1'>
                <i>{icony(<GoPrimitiveDot size={30} color={'grey'} />)}</i>
                <h4 className='inline-block relative left-[77px] top-[-27px] font-bold'>{'Inactive'}</h4>
            </div></div>
    )
}
export default Status