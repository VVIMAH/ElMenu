import { useState, useEffect } from 'react';
import {
  RadioButtonChecked,
  RadioButtonUnchecked,
  AddCircle,
} from '@mui/icons-material'
import './center.scoped.css'




export default function Center() {
  const [description, setDescription] = useState('')
  const [displayPriority, setDisplayPriority] = useState('')
  const [unitPrice, setUnitPrice] = useState('')
  const [menuCategoryId, setMenuCategoryId] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [displayForm, setDisplayForm] = useState(false)
  /* This can change at any time */
  const token = process.env.M_TOKEN
  let handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch('http://iv-apis.herokuapp.com/nocors', {
        method: 'POST',
        body: JSON.stringify({
          body: {
            description: description,
            displayPriority: displayPriority,
            menuCategoryId: menuCategoryId,
            name: name,
            unitPrice: unitPrice,
          },
          url: 'http://196.223.240.154:8099/supapp/api/menu-items',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }),
      })
      let finalResponse = response.json()
      console.log(finalResponse)
      if (response.status === 201 || response.status === 200) {
        setMessage('Data recorded succesfully!')
      } else {
        setMessage('OOPS! there was an error while recording data')
      }
    } catch (error) {
      console.log(error)
    }
  }

  //  function addForm(){
  //   setItem(<form onSubmit={handleSubmit}>
  //         <input
  //           type="text"
  //           value={name}
  //           placeholder="Name"
  //           onChange={(e) => setName(e.target.value)}
  //         />
  //         <input
  //           type="text"
  //           value={description}
  //           placeholder="descripption"
  //           onChange={(e) => setDescription(e.target.value)}
  //         />
  //         <input
  //           type="text"
  //           value={unitPrice}
  //           placeholder="unitPrice"
  //           onChange={(e) => setUnitPrice(e.target.value)}
  //         />
  //         <input
  //       type="text"
  //       value={menuCategoryId}
  //       placeholder="menuCategoryId"
  //       onChange={(e) => setMenuCategoryId(e.target.value)}
  //     />
  //     <input
  //       type="text"
  //       value={displayPriority}
  //       placeholder="Description"
  //       onChange={(e) => setDisplayPriority(e.target.value)}
  //     />

  //         <button type="submit">Create</button>

  //         <div className="message">{message ? <p>{message}</p> : null}</div>
  //       </form>)
  //  }
  const [menus, setMenus] = useState([])

  const getMenus = async () => {
    const res = await fetch(
      'http://196.223.240.154:8099/supapp/api/menu-items?size=30',
      {
        method: 'GET',
        headers: {
          AccessToken: `Bearer ${token}`,
          Authorization: `Bearer ${token}`,
        },
      },
    )
    const data = await res.json()
    setMenus(data.content)
  }

  useEffect(() => {
    getMenus()
  }, [])

  return (
    <div className="center">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="menu.png" alt="" />
          <h1>Menus</h1>
          <input value="OS: 20000/3477:10" className="shareInput" />
          <div className="shareBOx">
            <button className="btn">Drink</button>
            <button className="btn">Apetizer</button>
            <button className="btn">Starter</button>
            <button className="btn">Desert</button>
          </div>
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <ul className="shareOptions">
            {menus.map((menu, index) => {
              return (
                <li className="shareOption">
                  <img src="pizza.jpg" alt="foodmenu" className="foodImg" />
                  <div className="shareOptionText">
                    <span className="foodTitle">
                      <strong>{menu.name}</strong>
                    </span>
                    <br />
                    <span className="foodDesc">{menu.description}</span>
                    <br />
                    <span className="foodPrice">FRW {menu.unitPrice}</span>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="addItems">
            <h1>ADD Items</h1>

            {displayForm ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  value={description}
                  placeholder="descripption"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type="text"
                  value={unitPrice}
                  placeholder="unitPrice"
                  onChange={(e) => setUnitPrice(e.target.value)}
                />
                <input
                  type="text"
                  value={menuCategoryId}
                  placeholder="menuCategoryId"
                  onChange={(e) => setMenuCategoryId(e.target.value)}
                />
                <input
                  type="text"
                  value={displayPriority}
                  placeholder="Description"
                  onChange={(e) => setDisplayPriority(e.target.value)}
                />

                <button type="submit">Create</button>

                <div className="message">
                  {message ? <p>{message}</p> : null}
                </div>
              </form>
            ) : (
              <></>
            )}

            <AddCircle
              fontSize="large"
              className="addIcon"
              onClick={() => setDisplayForm(true)}
            />
            <div className="item">
              <RadioButtonUnchecked />
              <span className="itemName">HOme PAPAI</span>
            </div>

            <div className="item">
              <RadioButtonUnchecked />
              <span className="itemName">HOme PAPAI</span>
            </div>
            <div className="item">
              <RadioButtonChecked />
              <span className="itemName">HOme papai</span>
            </div>
            <div className="item">
              <RadioButtonUnchecked />
              <span className="itemName">HOme papai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



