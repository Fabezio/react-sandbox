import './footer.css'
function Footer () {
  const year = new Date().getFullYear()
  return <footer>centre de tests @ {year}</footer>
}

export default Footer
