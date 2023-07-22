import CardList from '../Components/CardList/CardList';
import { useEffect } from "react";


function Dashboard() {
  useEffect(() => {
    document.title = "CMS EXP - Dashboard" 
  })
  return (
    <>
      <CardList />
    </>
  )
}
export default Dashboard