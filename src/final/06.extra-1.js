// Basic Forms
// 💯 using refs
// http://localhost:3000/isolated/final/06.extra-1.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef()
  const pwdRef = React.useRef()

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(usernameInputRef.current.value,pwdRef.current.value)

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={usernameInputRef} />
        <label>PASSWORD:</label>
        <input id="pwd" type="text" ref={pwdRef} />

      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (username,pwd) => {
    alert(`You entered: ${username}===${pwd}`)
  }
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
