import React from 'react';
import { NavLink } from 'react-router-dom';

import d from './Dialogs.module.css';

const Items = (props) =>{
    return(
        <div className={d.items+''+d.active}>
        <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>   
       </div> 
    )
}
const Messages =(props) =>{
    return(
        <div className={d.message}>
          {props.msg} 
        </div> 
    )
}

const Dialogs = (props) => {
    
    let dialogElements = props.dialogsDt.dialogsData.map(d=> <Items name={d.name} id={d.id} />);
    let messagesElements = props.dialogsDt.messagesData.map(m=> <Messages msg={m.msge} />);
    return (
        <div>
            <div className={d.dialog}>
                <div className={d.dialogItems}>
                    {dialogElements}
                    
                     
                </div>
                <div className={d.messages}>
                    {messagesElements}
                    
                    
                </div >
            </div>

        </div>
    )





}
export default Dialogs;