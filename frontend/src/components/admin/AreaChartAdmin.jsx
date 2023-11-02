import { XYPlot, XAxis, YAxis, AreaSeries } from 'react-vis';
const AreaChartAdmin = () => {
    const data = [
        { x: 1, y: 10 },
        { x: 2, y: 5 },
        { x: 3, y: 15 },
        { x: 4, y: 7 },
      ];
    
      return (
        <XYPlot height={250} width={300}>
          <XAxis />
          <YAxis />
          <AreaSeries data={data} />
        </XYPlot>
      );
}

export default AreaChartAdmin;
