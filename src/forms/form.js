import { useState } from 'react'

function Form () {
  const [inputValue, setInputValue] = useState('')
  const [msg, commitValue] = useState('')
  //   let msg = ''
  return (
    <div>
      <form>
        <input
          type='text'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder='entre un truc'
        />
        <button onClick={() => commitValue(inputValue)}>Envoyer</button>
      </form>
      <p>{msg}</p>
    </div>
  )
}

export default Form
