import React, { useState, useEffect } from 'react'

function Page() {
  const [number, setNumber] = useState(1)
  const [data, setData] = useState([])
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${number}`)
      .then(response => response.json())
      .then(list => {
        const users = list.data
        const total_Pages = list.total_pages

        setTotalPages(total_Pages)
        setData(users)
      })
  }, [number])

  return (
    <div>
      <ul className="user-list">
        {data.map((user) => {
          return <li className="user-item" key={user.id}>
            <img src={user.avatar} alt={user.lastname} />
            <div className="user-name">
              <h3 className="user-firstname">{user.first_name}</h3>
              <h3 className="user-lastname">{user.last_name}</h3>
            </div>
            <p>{user.email}</p>
          </li>
        })}
      </ul>
      <div className="page-btns">
        {number > 1 && <button className="page-btn" onClick={() => setNumber(prevNum => prevNum - 1)}>Prev</button>}
        <button className="page-btn" onClick={() => setNumber(1)}>1</button>
        <button className="page-btn" onClick={() => setNumber(2)}>2</button>
        {number < totalPages && <button className="page-btn" onClick={() => setNumber(prevNum => prevNum + 1)}>Next</button>}
      </div>
    </div >
  )
}

export default Page
