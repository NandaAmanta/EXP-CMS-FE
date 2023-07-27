import { useEffect } from "react";
import NavbarMasterData from '../Components/NavbarMasterData/NavbarMasterData';

function MasterDataNavbar() {
  useEffect(() => {
    document.title = "Master Data - Navbar" 
  })

  return (
    <div>
      <NavbarMasterData></NavbarMasterData>
    </div>
  )
}
export default MasterDataNavbar