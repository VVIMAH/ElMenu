/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './order.scoped.css'

function OrderLoder() {
    const orderArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        // <div>

        //     {
        //         orderArr.map((el) => {
        //             return (<div className=' w-[100px] h-[70px] rounded-md relative border-2 border-orange ml-8 inline-block text-black font-bold text-center pt-3 '>

        //             </div>)

        //         })

        //     }



        <div className='w-[100%] h-[74%] overflow-auto  mt-3 overflow-x-hidden animate-pulse '>{

            orderArr.map((el, i) => {
                return (<div className='w-[350px] h-[370px] white mt-5 inline-block ml-[70px] mr-5 mb-5 grey shadow text-black rounded-lg'> <div className='w-[100%] h-[25%] white  font-bold text-center pt-6 float-left bg-slate-300'><br />      <div className='block text-slate-400 bg-slate-300'></div></div>
                    <div className="rounded-full  w-[80px] h-[80px] inline-block bg-slate-300 relative top-2 left-2"></div>
                    <div className='white w-[100%]  font-bold relative top-0  h-auto inline-block move'><div className='white w-[60%] h-[50px] font-bold block pt-4 text-black bg-slate-400 '></div>   <div><span className='bg-slate-3000'></span></div> <div></div> <div className=''></div></div>
                    <div className='white w-[100%] h-[19%] text-emerald-600 font-bold inline-block'><div className='w-[100%] h-[40px] orange pl-[60px] pt-1'></div></div>
                    <div className='white w-[100%] h-[19%] text-emerald-600 font-bold inline-block relative'><div className='w-[70px] h-[40px]  inline-block ml-11 rounded-md  border-2 pl-3 h  text-orange-400 bg-slate-300'></div><div className='w-[70px] h-[40px]  float-right inline-block mr-11 rounded-md border-2  pl-3border-orange-300 pl-3  text-orange-400 bg-slate-300'></div></div>
                </div>)

            })
        }

        </div>
        // </div>

    )


}

export default OrderLoder;



