const MenuItems = ({ item, icon, active}) =>{
  return (
    <a className={active} href="#">{icon}{item}</a>
  )
}

export default MenuItems