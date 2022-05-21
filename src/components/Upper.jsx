import React, { Component } from 'react';
import {AiOutlineSearch, AiFillBell} from 'react-icons/ai';
import { BsFillFilePersonFill} from 'react-icons/bs';
class Upper extends Component {
    state = {  } 
    render() { 
        return (
            <div className='upper'>
                <h3>Overview</h3>
                <div className="right">
                    <AiOutlineSearch className='icon search'/>
                    <AiFillBell className='icon bell' />
                    <span>Jacques Kagabo</span>
                    <BsFillFilePersonFill className='icon person'/>
                </div>
            </div>
        );
    }
}
 
export default Upper;