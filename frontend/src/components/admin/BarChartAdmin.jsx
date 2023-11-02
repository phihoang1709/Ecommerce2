import { XYPlot, VerticalBarSeries, XAxis, YAxis } from 'react-vis';

const BarChartAdmin = () => {
    const data = [
        { x: 1, y: 10 },
        { x: 2, y: 5 },
        { x: 3, y: 15 },
        { x: 4, y: 7 },
      ];
    
      return (
        <XYPlot className="col-sm" height={250} width={300}>
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={data} />
        </XYPlot>
      );
}

export default BarChartAdmin;
