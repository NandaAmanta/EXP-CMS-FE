import { Route, Routes } from "react-router-dom"
import Dashboard from '../Pages/Dashboard';
import MasterDataNavbar from '../Pages/MasterDataNavbar';
import MasterDataBanner from '../Pages/MasterDataBanner';
import MasterDataFooter from '../Pages/MasterDataFooter';
import CreateWebsite from '../Pages/CreateWebsite';
import Settings from '../Pages/Settings';
import Login from "../Pages/Login";


const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/master-data/navbar" element={<MasterDataNavbar />} />
      <Route path="/master-data/banner" element={<MasterDataBanner />} />
      <Route path="/master-data/footer" element={<MasterDataFooter />} />
      <Route path="/create-website" element={<CreateWebsite />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default Routing;