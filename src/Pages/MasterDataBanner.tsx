import { useEffect } from "react";
import BannerMasterData from '../Components/BannerMasterData/BannerMasterData';

function MasterDataBanner() {
  useEffect(() => {
    document.title = "Master Data - Banner" 
  })

  return (
    <div>
      <BannerMasterData></BannerMasterData>
    </div>
  )
}
export default MasterDataBanner