import CardList from '../Components/CardList/CardList';
import Chart from "../Components/Chart/Chart";


function Dashboard() {
  useEffect(() => {
    document.title = "CMS EXP - Dashboard" 
  })
  return (
    <>
      <CardList />
      <Chart />
    </>
  )
}
export default Dashboard