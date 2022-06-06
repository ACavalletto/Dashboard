import MenuItems from './sidebar/MenuItems'
const Sidebar = () => {
  return (
    <div id="sideBar">
        <MenuItems item="Dashboard"/>
        <MenuItems item="Widget"/>
        <MenuItems item="Reviews"/>
        <MenuItems item="Customers"/>
        <MenuItems item="Online Analysis"/>
        <MenuItems item="Settings"/>
    </div>
  )
}

export default Sidebar