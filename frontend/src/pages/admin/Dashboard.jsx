import BarChartAdmin from "../../components/admin/BarChartAdmin";
import ParrentChartAdmin from "../../components/admin/ParrentChartAdmin";
import PieChartAdmin from "../../components/admin/PieChartAdmin";
import AreaChartAdmin from "../../components/admin/AreaChartAdmin";
import CardEarningAdmin from "../../components/admin/CardEarningAdmin";
import AppAdmin from "./AppAdmin";
const Dashboard = () => {
    return (
        <AppAdmin>
            <div className="d-flex flex-column">
                <div className="row">
                    <CardEarningAdmin />
                    <CardEarningAdmin />
                    <CardEarningAdmin />
                    <CardEarningAdmin />
                </div>
                <div className="row">
                    <ParrentChartAdmin title="BarChart">
                        <BarChartAdmin />
                    </ParrentChartAdmin>
                    <ParrentChartAdmin title="AreaChart">
                        <AreaChartAdmin />
                    </ParrentChartAdmin>
                    <ParrentChartAdmin title="PieChart">
                        <PieChartAdmin />
                    </ParrentChartAdmin>
                </div>
            </div>
        </AppAdmin>

    );
}

export default Dashboard;
