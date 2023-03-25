import NavbarItem from "./NavbarItem"

const Navbar = () => {
  return (
    <div className="flex items-center justify-center dark:bg-gray-600 bg-amber-100 lg:text-xl p-4">
      <NavbarItem title='Trending' param='fetchTrending'/>
      <NavbarItem title='Top Rated' param='fetchTopRated'/>
    </div>
  )
}

export default Navbar
