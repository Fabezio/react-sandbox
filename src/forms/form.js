import { useState } from 'react'

function Form () {
  const [inputValue, setInputValue] = useState('')
  const [msg, submitValue] = useState('')
  //   let msg = ''
  const input = (type = 'text', label, val, setVal) => {
    return (
      <input
        type={type}
        placeholder={label}
        value={val}
        onChange={e => setVal(e.target.value)}
      />
    )
  }
  // if (msg.length > 0) {
  //   msg.preventDefault()
  // }
  return (
    <div>
      {/* <form>
        </form> */}
      {/* <input
        type='text'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder='entre un truc'
      /> */}
      {input('date', 'date de naissance?', inputValue, setInputValue)}
      {/*
        {input('number', 'Numero de téléphone: ', inputValue, setInputValue)}
      */}
      <button onClick={() => submitValue(inputValue)}>Envoyer</button>
      <p>{msg}</p>
    </div>
  )
}

export default Form
