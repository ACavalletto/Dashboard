import MenuItems from './sidebar/MenuItems'
const Sidebar = () => {
  return (
    <div className="sideBar">
      <MenuItems item="Dashboard" icon={<i class="fa-solid fa-chart-line"></i>} active="active" />
      <MenuItems item="Widget" icon={<i class="fa-brands fa-android"></i>} />
      <MenuItems item="Reviews" icon={ <i class="fa-solid fa-note-sticky"></i>}/>
      <MenuItems item="Customers" icon={ <i class="fa-solid fa-address-book"></i>}/>
      <MenuItems item="Online Analysis" icon={ <i class="fa-solid fa-wifi"></i>}/>
      <MenuItems item="Settings" icon={ <i class="fa-solid fa-gear"></i>}/>
    </div>
  )
}

export default Sidebar