// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <div className="widgets row gy-4 mb-5">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="charts row gy-4">
        <Featured />
        <div className="col-lg-7">
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
      </div>
      <div className="listContainer mt-5">
        <div className="listTitle">Latest Transactions</div>
        <Table />
      </div>
    </div>
  );
};

export default Home;
