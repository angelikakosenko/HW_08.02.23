import React from 'react'
import { useSelector } from 'react-redux'
import Days from '../Days';
import Tasks from '../Tasks';
import s from './style.module.css'


export default function ProductList() {

    const days = useSelector(state => state.day);
    // const tasks = useSelector(state => state.day);


  return (
    <div> 
        {days.map(w => <Days key={w.id} {...w}/>) }
        {/* {tasks.map(w => <Tasks key={w.id} {...w}/>) } */}
        
    </div>
  )
}
