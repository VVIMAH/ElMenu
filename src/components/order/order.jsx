/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import logo from './logo.png'
import avatar from './avatar.png'
import { AiOutlineHome, AiOutlineMessage, AiFillSetting } from 'react-icons/ai';
import { MdOutlineProductionQuantityLimits, MdNotificationsActive, MdCancel } from 'react-icons/md';
import { GoPrimitiveDot } from 'react-icons/go';
import { useEffect, useState } from 'react';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { ImStatsBars } from 'react-icons/im';
import { BiLogIn, BiSearchAlt } from 'react-icons/bi';
import { TiTickOutline } from 'react-icons/ti';
import './order.scoped.css'
import OrderLoder from './orderLoder';
import Status from './status';
// import { list } from 'postcss';
// import { data } from 'autoprefixer';
import Done from './done';

function Order() {
    // const [oname, setName] = useState('')
    const menu = ['HOME', 'ORDER HISTORY', 'MESSAGES', 'STATISTICS', 'PRODUCTS', 'SETTINGS'];
    const icons = [<AiOutlineHome size={30} />, <BsArrowCounterclockwise size={30} />, <AiOutlineMessage size={30} />, <ImStatsBars size={30} />, <MdOutlineProductionQuantityLimits size={30} />, <AiFillSetting size={30} />, <GoPrimitiveDot size={30} color={'green'} />]
    const icony = (icon) => {
        return icon
    }
    const [order, orderF] = useState([])
    // let i;
    let image1 = []
    const [loader, setLoader] = useState(false)
    const testOrder = {

    }
    let orderArr;
    // setTimeout(() => {
    //     orderArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // }, 10000)
    // if (orderArr?.length === 0) {
    //     setLoader(true)
    // }
    // else {
    //     setLoader(false)
    // }

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                "API-Version": "1.0",
                Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODYiLCJzdWIiOiIxODYiLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9XSwidXNlciI6eyJpZCI6MTg2LCJuYW1lIjoiUnVrdW5kbyBIb25vcmUgMDc4ODYyNjM0NyIsInVzZXJuYW1lIjoiODE4MzUzIiwibW9iaWxlIjpudWxsLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9XSwiYWNjb3VudE5vbkV4cGlyZWQiOnRydWUsImFjY291bnROb25Mb2NrZWQiOnRydWUsImNyZWRlbnRpYWxzTm9uRXhwaXJlZCI6dHJ1ZSwiZW5hYmxlZCI6dHJ1ZX0sImlhdCI6MTY1NTA2MjM5MCwiZXhwIjoxNjU1MTQ4NzkwfQ.XveHHLyNKScHEVO_J3U54awZENjo8KL61DhqNazIUCo970wT4bm_lzhOm4hDKtq-iYwE2SBorAfzrns9RDc6hw",


            }

        }
        fetch('http://iv-apis.herokuapp.com/nocors', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                url: 'http://196.223.240.154:8099/supapp/api/orders?page=0&size=10',
                ...options
            })
        }).then(res => res.json()).then(response => {
            /* The actual response is in data.data */
            let data = response.data
            console.log(data, response)

            orderF(data.content);
            data.content.forEach((e, i) => {
                if (image2 <= order.length + 4)
                    orderImage(data.content[i].orderDetails[0].item.name)

            })

        })
        fetch('http://196.223.240.154:8099/supapp/api/orders?page=0&size=30', options).then((res) => res.json()).then((data) => {
            console.log(data.content)

            orderF(data.content);
            data.content.forEach((e, i) => {
                if (image2 <= order.length + 4)
                    orderImage(data.content[i].orderDetails[0].item.name)

            })



            console.log(data.content.id)
            console.log(data.content[0].orderDetails)

        })

    }, [])


    console.log(order)
    const [search, getSearch] = useState(0)

    function searchO(e) {
        getSearch(e.target.value)
        console.log(search)
    }



    console.log(image1)


    function status(stat) {
        if (stat === 'ACTIVE') {
            return (<div className='white w-[100%] h-[19%] text-emerald-600 font-bold inline-block'><div className='w-[100%] h-[40px] orange pl-[60px] pt-1'> <i className='animate-ping'>{icony(<GoPrimitiveDot size={30} color={'green'} />)}</i><h4 className='inline-block relative left-[77px] top-[-27px] font-bold'>{stat}</h4> </div></div>)

        }
        else {
            return (<Status />)
        }

    }


    // const [name,nameGet]=useState(null)
    // let name = []
    useEffect(() => {
        orderImage()
    }, [])
    async function orderImage(name) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'google-image-search1.p.rapidapi.com',
                'X-RapidAPI-Key': 'bd899b491emsh82df4a83723bd31p17b7fcjsncfd3b2667caf'
            }
        };

        fetch(`https://google-image-search1.p.rapidapi.com/?keyword=${name}&max=10`, options).then(res => res.json())
            .then(image => {
                image1.push(image[0].image.url)
                let images = JSON.stringify(image1)
                localStorage.setItem("images", images)
                console.log(image1)
            })
            .catch(err => console.error(err));
        // }

    }
    let image2 = JSON.parse(localStorage.getItem("images"))
    console.log(image2)
    //  orderImage('tree')

    //   useEffect(()=>{
    //     fetch(`http://196.223.240.154:8099/supapp/api/orders/${search}`,{
    //         method:'GET',
    //         headers:{
    //             Authorization:'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI4MCIsInN1YiI6IjgwIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifV0sInVzZXIiOnsiaWQiOjgwLCJuYW1lIjoiZ2FrdWJhIGVkbW9uZCAwNzg4ODY2NjEyIiwidXNlcm5hbWUiOiI3MzUzMDEiLCJtb2JpbGUiOm51bGwsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJhY2NvdW50Tm9uRXhwaXJlZCI6dHJ1ZSwiYWNjb3VudE5vbkxvY2tlZCI6dHJ1ZSwiY3JlZGVudGlhbHNOb25FeHBpcmVkIjp0cnVlLCJlbmFibGVkIjp0cnVlfSwiaWF0IjoxNjUzMDQyMzE3LCJleHAiOjE2NTMxMjg3MTd9.FPmtVQPchhzw75tq-I47Yz_CW5DFfBoMhzEad82PKSwl4dnAQXvoohF_bQVfqtRcUIxOX9DLHLSE1C44XULDlw',
    //            
    //         }}).then((res)=>res.json()).then((data)=>{
    //             console.log("got the search")
    //             if(!data){
    //                 console.log("Not found")
    //             } 


    //         })
    //   },[search])
    //   const[image,getImage]=useState(null)
    //   const [oname,oName]=useState()
    //   useEffect(()=>{

    //     if(!oname){

    //     }

    //   },[oname])
    //   let imageF=localStorage.getItem("imageUrl")
    //   console.log(typeof imageF)




    // const{,ordersF}=useState()
    // const orders=[1,2,3,4,5,6,7,8,9,10]


    return (
        <div className="flex flex-row mg-auto items-center  ml-[4.5%] shadow h-[90%] mt-4 w-[90%] overflow-hidden">
            <div className="self-start w-[17%] h-[96.7vh] gran   rounded-l-md bg-black"><div className="w-[317px] h-[20%]">
                <img className='mx-auto pt-[3.2rem]' src={logo} alt="" srcset="" />

            </div><div>{
                menu.map((opt, i) => {
                    return (
                        <div className="ml-5 leading-3 tracking-tighter text-[12.5px] font-bold mt-4 rounded-lg w-[250px] h-[5vh] hover:text-white   text-slate-400 ]"><span className="inline-block w-[50px] ml-[20px] relative top-[9px]">{icony(icons[i])}</span><h3 className="inline-block w-[100px] relative top-0 ">{opt}</h3> </div>
                    )


                })
            } </div> <div className="w-[280px] h-[31.8vh]  text-sm font-bold  text-white "><span className="inline-block w-[50px] ml-[20px] relative top-[25vh]">{<BiLogIn size={30} />}</span><h3 className="inline-block w-[200px] relative top-[24vh] ">log out</h3> </div></div>
            <div className="gran  w-[80%] h-[95vh] mt-4 rounded-r-md ">
                <div className='ml-11' ><div className='inline-block white  h-[50px] relative top-[21px] border-l-2 border-t-2 border-b-2 left-[22px] bg-white rounded-md'>{icony(<BiSearchAlt size={40} />)}</div> <input type="search" name="search" onChange={searchO} className='inline-block border-t-2 border-b-2 border-r-2 pl-5 w-[200px] h-[50px] relative top-[1px] left-4 rounded-r-md' /> </div>
                <div className='float-right'><div className='rounded-full w-[80px] h-[60px] inline-block relative top-[-60px] right-6'>{icony(<MdNotificationsActive size={40} />)}</div> <div className='border-2 rounded-full w-[80px] h-[80px] inline-block relative top-[-60px] right-9'><img src={avatar} alt="" srcset="" /></div></div>
                <div className=' h-[50px] relative top-[20px] white ml-11'><p className='font-black text-left pl-5 text-xl'>ORDER LIST</p></div>
                <div className='p w-[100%] flex flex-nowrap bg-white'>
                    {
                        order.map((el) => {
                            return (<div className='white w-[100px] h-[70px] rounded-md relative border-2 border-orange ml-8 inline-block text-black font-bold text-center pt-3 bg-white border-orange-300 text-[30px] hover:bg-orange-200 hover:border-none hover:text-white'> <h1>{el.orderDetails[0].item.id}</h1>

                            </div>)

                        })

                    }
                </div>
                {
                    loader ? <OrderLoder /> : <div className='w-[100%] h-[74%] overflow-auto  mt-3 overflow-x-hidden'>{

                        order.map((el, i) => {
                            // name.push(el.name)
                            // setName(el.name)
                            // console.log(name)

                            //  oName(el.orderDetails[0].item.name)
                            let cd = new Date(el.orderDetails[0].item.createdAt)
                            console.log(cd)
                            let year = cd.getFullYear()
                            console.log(year)
                            let mon = cd.getMonth()
                            let day = cd.getDate()
                            let date = `${year}-${mon}-${day}`
                            let done1 = false
                            const doneC = () => {
                                return done1 = true


                            }



                            return (



                                <div className='w-[350px] h-[370px] white mt-5 inline-block ml-[70px] mr-5 mb-5 grey shadow text-black rounded-lg'> <div className='w-[100%] h-[25%] white  font-bold text-center pt-6 float-left'> <h6 className='float-left block orange'>ORDER # {el.orderDetails[0].item.name}</h6> <br />      <div className='block text-slate-400'>{date}</div></div>
                                    {
                                        done1 ? <Done /> : <div>
                                            <img className="rounded-full  w-[80px] h-[60px] inline-block move1" src={image2[i]} alt="" srcset="" />
                                            <div className='white w-[100%]  font-bold relative top-0 border-b h-auto inline-block move'><div className='white w-[100%] h-[50px] font-bold block pt-4 text-black '>Product: {el.orderDetails[0].item.createdAT}</div>   <div>PRICE: <span className='orange'>{el.orderDetails[0].item.unitPrice}</span></div> <div>QTY: {el.orderDetails[0].quantity}</div> <div className=''></div></div>
                                            {status(el.orderDetails[0].item.status)}

                                            <div className='white w-[100%] h-[19%] text-emerald-600 font-bold inline-block relative'><div className='w-[70px] h-[40px]  inline-block ml-11 rounded-md  border-2 border-orange-300 pl-3 hover:bg-orange-200 hover:border-none hover:text-white text-orange-400'>{icony(<MdCancel size={35} c />)}</div><button type='button' onClick={doneC} className='w-[70px] h-[40px]  float-right inline-block mr-11 rounded-md border-2 border-orange-300 pl-3border-orange-300 pl-3 hover:bg-orange-200 hover:border-none hover:text-white text-orange-400'>{icony(<TiTickOutline size={35} />)}</button></div>
                                        </div>
                                    }

                                </div>)




                        })
                    }

                    </div>
                }

            </div>


        </div>
    )


}

export default Order;
// localStorage.setItem('imageUrl',img.value[0].contentUrl)
//                     imageF = img.value[0].contentUrllocalStorage.setItem('imageUrl',img.value[0].contentUrl)
//                     imageF = img.value[0].contentUrl



