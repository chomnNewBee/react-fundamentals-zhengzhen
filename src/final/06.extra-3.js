// Controlled Forms
// 💯 Control the input value
// http://localhost:3000/isolated/final/06.extra-3.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')
  const [nickName, SetNickName] = React.useState("")

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username,nickName)
  }

  function handleChange(event) {
    setUsername(event.target.value.toLowerCase())
  }
  const handleNickNameFunc = (event) => {
    SetNickName(event.target.value.toUpperCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
        <label>NickName</label>
        <input
          id="NickName"
          type="text"
          onChange={handleNickNameFunc}
          value={nickName}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (username,nickname) => alert(`You entered: ${username}====${nickname}`)
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}

export default App
