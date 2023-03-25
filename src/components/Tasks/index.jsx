import React from 'react'
import { useDispatch } from 'react-redux'
import s from './style.module.css'

export default function Tasks({id, priority, descr}) {
    const dispatch = useDispatch();
    const priorityStyle = priority === 'notImportand' ? 'priorityStyle' : 'notPriorityStyle';
  return (
    <div className={s.globalTask}>
        <div className={priorityStyle}>
            <div>{descr}</div>
            <button onClick={() => dispatch({type: 'DELETE_TASK', payload: id})}>x</button>
        </div>
    </div>
  )
}
