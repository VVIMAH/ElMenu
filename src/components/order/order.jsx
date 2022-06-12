/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import logo from './logo.png'
import { AiOutlineHome, AiOutlineMessage, AiFillSetting } from 'react-icons/ai';
import { MdOutlineProductionQuantityLimits, MdNotificationsActive, MdCancel } from 'react-icons/md';
import { GoPrimitiveDot } from 'react-icons/go';
import { useEffect, useState } from 'react';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { ImStatsBars } from 'react-icons/im';
import { BiLogIn, BiSearchAlt } from 'react-icons/bi';
import { TiTickOutline } from 'react-icons/ti';
import './order.scoped.css'
// import { list } from 'postcss';
// import { data } from 'autoprefixer';

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
    const testOrder = {

    }
    const orderArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                "API-Version": "1.0",
                Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxMjEiLCJzdWIiOiIxMjEiLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9XSwidXNlciI6eyJpZCI6MTIxLCJuYW1lIjoic3RyaW5nIHN0cmluZyAwNzg4NjM2NDc4IiwidXNlcm5hbWUiOiI4OTk0MDciLCJtb2JpbGUiOm51bGwsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJhY2NvdW50Tm9uTG9ja2VkIjp0cnVlLCJjcmVkZW50aWFsc05vbkV4cGlyZWQiOnRydWUsImFjY291bnROb25FeHBpcmVkIjp0cnVlLCJlbmFibGVkIjp0cnVlfSwiaWF0IjoxNjU0NTg1ODgyLCJleHAiOjE2NTQ2NzIyODJ9.YwvwQ85qapkMlyDl-rar2pXk5G-1TTSuX68fQHyrUiXRUtXoAKg7wkTT2q-eN_SagMDh3rd4MwULNXF0hW3cRw",


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
        // fetch('http://196.223.240.154:8099/supapp/api/orders?page=0&size=30', options).then((res) => res.json()).then((data) => {
        //     console.log(data.content)

        //     orderF(data.content);
        //     data.content.forEach((e, i) => {
        //         if (image2 <= order.length + 4)
        //             orderImage(data.content[i].orderDetails[0].item.name)

        //     })



        //     // console.log(data.content.id)
        //     // console.log(data.content[0].orderDetails)

        // })

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
            return 'ACTIVE'

        }
        else if (stat === 'DONE') {
            return 'DONE'
        }
        else if (!stat) {
            return (<div><i><MdCancel /></i><i><TiTickOutline /></i></div>)


        }
        else if (stat === 'ORDERING') {
            return 'ORDERING'
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
        <div className="flex flex-row mg-auto items-center  ml-[4.5%] shadow h-[90%] mt-4 w-[90%]">
            <div className="self-start w-[17%] h-[96.7vh] gran   rounded-l-md bg-black"><div className="w-[317px] h-[20%]">
                <img className='mx-auto pt-[3.2rem]' src={logo} alt="" srcset="" />

            </div><div>{
                menu.map((opt, i) => {
                    return (
                        <div className="ml-5 leading-3 tracking-tighter text-[12px] font-bold mt-4 rounded-lg w-[250px] h-[5vh] border-2 mt-[14%]font-Poppins  text-white ]"><span className="inline-block w-[50px] ml-[20px] relative top-[9px]">{icony(icons[i])}</span><h3 className="inline-block w-[100px] relative top-0 ">{opt}</h3> </div>
                    )


                })
            } </div> <div className="w-[280px] h-[31.8vh]  text-sm font-bold border-2 border-[#000 ] font-Poppins text-white "><span className="inline-block w-[50px] ml-[20px] relative top-[25vh]">{<BiLogIn size={30} />}</span><h3 className="inline-block w-[200px] relative top-[24vh] ">log out</h3> </div></div>
            <div className="gran  w-[80%] h-[95vh] mt-4 rounded-r-md">
                <div ><div className='inline-block white  h-[50px] relative top-[20px] border-l-2 border-t-2 border-b-2 left-[22px] bg-white rounded-md'>{icony(<BiSearchAlt size={40} />)}</div> <input type="search" name="search" onChange={searchO} className='inline-block border-t-2 border-b-2 border-r-2 pl-5 w-[200px] h-[50px] relative top-[1px] left-4 rounded-r-md' /> </div>
                <div className='float-right'><div className='rounded-full w-[80px] h-[60px] inline-block relative top-[-60px] right-6'>{icony(<MdNotificationsActive size={40} />)}</div> <div className='border-2 rounded-full w-[80px] h-[80px] inline-block relative top-[-60px] right-9'><img src="#" alt="" srcset="" /></div></div>
                <div className=' h-[50px] relative top-[20px] white '><p className='font-black text-left pl-5 text-xl'>ORDER LIST</p></div>
                <div className='p w-[100%] flex flex-nowrap bg-white'>
                    {
                        orderArr.map((el) => {
                            return (<div className='white w-[100px] h-[70px] rounded-md relative border-2 border-black ml-6 inline-block text-emerald-600 font-bold text-center pt-6 bg-white'>{1}

                            </div>)

                        })

                    }
                </div>
                <div className='w-[100%] h-[74%] overflow-auto  mt-3'>{

                    orderArr.map((el, i) => {
                        // name.push(el.name)
                        // setName(el.name)
                        // console.log(name)

                        //  oName(el.orderDetails[0].item.name)


                        return (<div className='w-[350px] h-[370px] white mt-5 inline-block ml-[70px] mr-5 mb-5 grey shadow text-black'> <div className='w-[100%] h-[25%] white  font-bold text-center pt-6 float-left'> <h6 className='float-left block text-black'>ORDER # {1}</h6> <br />      <div className='block text-slate-400'>{'2004-1-1'}</div></div>
                            <img className="rounded-full  w-[80px] h-[60px] inline-block move1" src={image2[i]} alt="" srcset="" />
                            <div className='white w-[100%]  font-bold relative top-0 border-b h-auto inline-block move'><div className='white w-[100%] h-[50px] font-bold block pt-4 text-black '>Product: {'petit amstel'}</div>   <div>PRICE: <span className='orange'>{20000}</span></div> <div>QTY: {200}</div> <div className=''></div></div>
                            <div className='white w-[100%] h-[19%] text-emerald-600 font-bold inline-block'><div className='w-[100%] h-[40px] orange pl-[60px] pt-1'>{icony(<GoPrimitiveDot size={30} color={'green'} />)}<h4 className='inline-block relative left-[77px] top-[-27px]'>{'ACTIVE'}</h4> </div></div>
                            <div className='white w-[100%] h-[19%] text-emerald-600 font-bold inline-block relative'><div className='w-[70px] h-[40px] bg-indigo-400 inline-block ml-11 rounded-md'></div><div className='w-[70px] h-[40px] bg-indigo-400 float-right inline-block mr-11 rounded-md'></div></div>
                        </div>)

                    })
                }

                </div>
            </div>


        </div>
    )


}

export default Order;
// localStorage.setItem('imageUrl',img.value[0].contentUrl)
//                     imageF = img.value[0].contentUrllocalStorage.setItem('imageUrl',img.value[0].contentUrl)
//                     imageF = img.value[0].contentUrl



