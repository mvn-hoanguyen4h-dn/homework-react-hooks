import React, { useState, useRef } from 'react'
import useField from '../../useField'

function Form() {
  const fullname = useField("text")
  const password = useField("password")
  const email = useField("email")
  const nationality = useField("")
  const gender = useField("radio")
  const info = useField("")
  const agree = useField("checkbox")

  const fullnameEl = useRef()
  const emailEl = useRef()
  const passwordEl = useRef()
  const nationEl = useRef()
  const infoEl = useRef()
  const femaleEl = useRef()
  const maleEl = useRef()
  const otherEl = useRef()

  const [list, setList] = useState(JSON.parse(localStorage.getItem('data')) || [])

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      fullname: fullname.value,
      password: password.value,
      email: email.value,
      nationality: nationality.value,
      gender: gender.value,
      info: info.value,
      agree: agree.value
    }

    setList(prevList => {
      const newList = [...prevList, newItem]
      // save to localStorage
      localStorage.setItem("data", JSON.stringify(newList))

      return newList
    })
    console.log(fullnameEl.current.value)
    fullnameEl.current.focus()
  }

  const handleDelete = (index) => {
    if (window.confirm("Are you sure to delete this item ?")) {
      setList(prevList => {
        const newList = [...prevList]
        newList.splice(index, 1)

        localStorage.setItem("data", JSON.stringify(newList))
        return newList
      })
    }

  }

  return (
    <div className="user-form">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <h2>User Information</h2>
        <div className="form-control">
          <label htmlFor="fullname">Fullname</label>
          <input
            {...fullname}
            id="fullname"
            name="fullname"
            ref={fullnameEl}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            {...email}
            id="email"
            name="email"
            ref={emailEl}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            {...password}
            id="password"
            name="password"
            ref={passwordEl}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="nationality">Nationality</label>
          <select
            {...nationality}
            name="nationality"
            id="nationality"
            ref={nationEl}
            required
          >
            <option>Please choose your nationality</option>
            <option value="Vn">Vietnamese</option>
            <option value="Jp">Japanese</option>
            <option value="Kor">Korean</option>
            <option value="Malay">Malaysian</option>
            <option value="Fre">French</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="gender">Gender</label>
          <input
            {...gender}
            name="gender"
            value="female"
            ref={femaleEl}
          /> Female
          <input
            {...gender}
            name="gender"
            value="male"
            ref={maleEl}
          /> Male
          <input
            {...gender}
            name="gender"
            value="other"
            ref={otherEl}
          /> Other
        </div>
        <div className="form-control">
          <label htmlFor="info">Describe yourself</label>
          <textarea
            {...info}
            id="info"
            name="info"
            ref={infoEl}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="agree">Agree with the terms ?</label>
          <input
            {...agree}
            name="agree"
            id="agree"
            checked={agree}
          />
        </div>
        <button className="btn">Submit</button>
      </form>
      <div className="user-data">
        <h1>User Data</h1>
        <table>
          <thead>
            <tr>
              <th>Fullname</th>
              <th>Email</th>
              <th>Password</th>
              <th>Nationality</th>
              <th>Gender</th>
              <th>Information</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{item.fullname}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.nationality}</td>
                <td>{item.gender}</td>
                <td>{item.info}</td>
                <td>
                  <i className="fa-solid fa-trash" onClick={() => handleDelete(index)} ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Form
