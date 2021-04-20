import './section.css'
import Form from '../forms/form'
function Section () {
  const p = str => <p>{str}</p>
  const li = str => <li key={str}>{str}</li>
  const ul = ls => <ul>{ls}</ul>
  // const mks = (mk, str) => Object.toHTML(`<${mk}>{str}</${mk}>`)
  const list = 'Moi je suis une liste'.split(' ')
  const el = list.map(word => li(word))
  return (
    <div>
      {/* {mks('h2', 'markup test')} */}
      <Form />
      {/* {p('un paragraphe')}
      {p('un autre paragraphe')}
      {ul(el)}
      {p(list.join('_') + '_avec_des_tirets')} */}
    </div>
  )
}

export default Section
