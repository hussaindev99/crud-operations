"use client"
import React, { useState } from 'react';
import "./Page.css"
export default function Todo() {
  const [array, setArray] = useState([]);
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [userindex, setuserindex] = useState(null);
  const [date, setDate] = useState(null);

  const adduser = (e) => {
    e.preventDefault();
    if (name.length < 3 || lname.length < 3) {
      return;
    }
    const newUser = {
      name: name,
      lname: lname,
      date: date,
    };
    setArray([...array, newUser]);
    setName("");
    setLname("");
  };

  const deleteUser = (index) => {
    const newArray = array.filter((item, ind) => index !== ind);
    setArray(newArray);
  };

  const Edituser = (item, id) => {
    setName(item.name);
    setLname(item.lname);
    setuserindex(id);
  };

  const updatedatauser = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      lname: lname,
      date: date
    };
    var updateuserdata = array.map((item, index) => {
      if (userindex === index) {
        return newUser
      } else {
        return item
      }
    });
    setArray(updateuserdata);
    setName("");
    setLname("");
    setuserindex(null);
  };

  return (
    <div className='App'>
      <div className='tablediv'>
        <form>
          <label htmlFor='fname'>Task</label><br />
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='iputpe' placeholder='Enter Task' /><br />
          <label htmlFor='lname'>Status</label><br />
          <input type='text' value={lname} onChange={(e) => setLname(e.target.value)} placeholder='Enter Status' className='iputpe' /><br />
          <label htmlFor='date'>Dead Line</label><br />
          <input type="datetime-local" placeholder='Enter Deadline' className='iputpe' onChange={(e) => setDate(e.target.value)} /><br />
          {
            userindex !== null ?
              <button onClick={updatedatauser} className='task'>Update Task</button> :
              <button onClick={adduser} className='task'>Add Task</button>
          }
        </form>
      </div>
      <table>
        <thead>
          {
            array.length > 0 ?
              <tr>
                <th className='taskedit'>Task</th>
                <th className='taskedit'>Status</th>
                <th className='taskedit'>Deadline</th>
                <th className='taskedit'>Action</th>
                <th></th>
                <th></th>
              </tr> : ""
          }
        </thead>
        <tbody>
          {array.map((user, index) => (
            <tr key={index}>
              <td className='fname'>{user.name}</td>
              <td className='lname'>{user.lname}</td>
              <td className='lname'> {user.date} </td>
              <td className='editanddelete'>
                <button style={{ margin: "10px 5px" }} onClick={() => Edituser(user, index)} className='editbutton'>Edit</button>
                <button onClick={() => deleteUser(index)} style={{ margin: "10px 5px" }} className='deletebutton'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
