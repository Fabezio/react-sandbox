import './navbar.css'
import links from '../data/links'
function Navbar () {
  const thisLink = links.map(({ label, url }, i) => {
    // const {}
    return (
      <span>
        <a className='links' href='#' key={i}>
          {label}
        </a>
        {i < links.length - 1 && ' | '}
      </span>
    )
  })
  return (
    <nav>
      <ul>{thisLink}</ul>
      <span>this is the navbar</span>
    </nav>
  )
}
export default Navbar
