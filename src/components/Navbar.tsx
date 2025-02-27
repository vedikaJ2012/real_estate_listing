import { useNavigate } from "react-router-dom"

type MenuIconProps ={
  title:string,
  path:string,
  navigate:(path:string)=>void
}

const menus = [
  {
    title:'Home',
    path:"/"
  },
  {
    title:'About',
    path:"/about"
  },
  {
    title:'Contacts',
    path:"/contacts"
  }
]

const MenuIcon = ({title,path,navigate}:MenuIconProps)=>{
  return(
    <div 
      className="p-4 px-8 cursor-pointer text-white hover:bg-blue-500"
      onClick={()=>{
        navigate(path)
      }}
    >
      {title}
    </div>
  )
}


const Navbar = () => {

  const navigate = useNavigate()
  return (
    <div className="flex bg-blue-900 justify-between">
      <div className="flex">
        {menus.map((menu)=>(
          <div>
            <MenuIcon 
              title={menu.title}
              path={menu.path}
              navigate={navigate}
            />
          </div>
        ))}
      </div>
      <div>
        search bar
      </div>
    </div>
  )
}

export default Navbar