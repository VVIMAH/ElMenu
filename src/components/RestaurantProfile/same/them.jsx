import './them.scoped.css'
import React, {  useState } from 'react'
import NavBarVans from '../navbar_vanessa/NavBar'
import Resmenu from '../Resmenu/resmenu'
import Restinfo from '../Restinfo/restinfo'
import Restype from '../Restype/restype'

function RestaurantProfile() {
  const [formData, setFormData]= useState({
    address: '', category: '', closingHour:'', completeName:'', email:'', openingHour:'',
    ownerEmail:'', ownerNames: '', ownerPhoneNumber:'', phone:''
  })
  const [curForm, setCurForm] = useState(1)

 
  const nextForm = () => {
    // let newFormIndex = theForms.findIndex(
    //   (el) => el === (curForm_notState ? curForm_notState : curForm),
    // )
    // console.log(newFormIndex)
    // let newForm
    // if (newFormIndex >= theForms.length - 1) return
    // newForm = theForms[newFormIndex + 1]
    // setCurForm(newForm)
    // curForm_notState = newForm
    setCurForm(prev=> prev+1)
    if (curForm === 1) {
      document.getElementsByClassName('circles')[1].style.backgroundColor =
        'orange'
      document.getElementsByClassName('circles')[0].style.backgroundColor =
        '#C4C4C4'
    } else if (curForm === 2) {
      document.getElementsByClassName('circles')[0].style.backgroundColor =
        '#C4C4C4'
      document.getElementsByClassName('circles')[1].style.backgroundColor =
        '#C4C4C4'
      document.getElementsByClassName('circles')[2].style.backgroundColor =
        'orange'
    }
  }

  let theForms = [
    <Restinfo changeForm={nextForm} formData={formData} setFormData={setFormData}   />,
    <Restype changeForm={nextForm} formData={formData} setFormData={setFormData} />,
    
    <Resmenu />,
  ]
  return (
    <div className="RestaurantSignup">
      <NavBarVans />
      <div className="BODY">
        <div className="left">
          <h3>
            <strong>1. Create your restaurant profile</strong>
          </h3>
          <div className="all">
            <div className="listin">
              <div className="circles" id="firstchild">
                1
              </div>{' '}
            </div>
            <div className="first">
              <div className="top">Restaurant Information</div>

              <div className="bottom">
                Restaurant name, address, other details
              </div>
            </div>
          </div>
          <div className="all">
            <div className="listin">
              <div className="circles">2</div>{' '}
            </div>
            <div className="first">
              <div className="top">Restaurant Type and Timings</div>

              <div className="bottom">
                Establishment and cuisine type, <br /> opening hours
              </div>
            </div>
          </div>
          <div className="all">
            <div className="listin">
              <div className="circles">3</div>{' '}
            </div>
            <div className="first">
              <div className="top">Create your menu</div>

              <div className="bottom">Menu, Restaurant, Food images</div>
            </div>
          </div>
        </div>
        <div className="middle"></div>
        {curForm===1 && <Restinfo changeForm={nextForm} formData={formData} setFormData={setFormData}   />}
        {curForm===2 && <Restype changeForm={nextForm} formData={formData} setFormData={setFormData} />}
        {curForm===3 && <Resmenu />}
        {/* <Restype /> */}
        {/* <Restinfo /> */}
      </div>
    </div>
  )
}
export default RestaurantProfile
