import React from 'react'
import s from './style.module.css'
import { useDispatch } from "react-redux"
import Select from 'react-select/';

export default function AddProduct() {
      
    const dispatch = useDispatch();

    const submit = e => {
        e.preventDefault()
        const {day, priority, descr} = e.target;


        dispatch({type: "ADD_DAY", payload: {
          id: Date.now(), 
          day: day.value, 
          priority: priority.value, 
          descr: descr.value
        }});
        dispatch({type: "ADD_TASK", payload: {
          id: Date.now(), 
          day: day.value, 
          priority: priority.value, 
          descr: descr.value
         }});
        // dispatch(taskAction(task.value))
        day.value = '';
        priority.value = '';
        descr.value = '';
    }


    const optionsDay = [
      {value: 'Mo', label: 'Monday'},
      {value: 'Tu', label: 'Tuesday'},
      {value: 'We', label: 'Wednesday'},
      {value: 'Th', label: 'Thursday'},
      {value: 'Fr', label: 'Friday'},
      {value: 'Sa', label: 'Saturday'},
      {value: 'Su', label: 'Sunday'}
    ];

    const optionsPriority = [
      {value: 'importand', label: 'importand'},
      {value: 'notImportand', label: 'notImportand'}
    ];



  return (
    <form onSubmit={submit} className={s.form}>
      <div className={s.inputBlock}>
      <div className={s.selectBlock}>
        <Select options={optionsDay} name='day'/>
        <Select options={optionsPriority} name='priority'/>

      </div>
        <input type="text" placeholder='discount' name='descr' required/>
      </div>
        <button>Добавить</button>
    </form>
  )
}
