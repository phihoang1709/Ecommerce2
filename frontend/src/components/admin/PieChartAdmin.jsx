import { RadialChart } from 'react-vis';
const PieChartAdmin = () => {
    const data = [
        { angle: 45, label: 'Slice 1' },
        { angle: 30, label: 'Slice 2' },
        { angle: 25, label: 'Slice 3' },
      ];
    
      return (
        <RadialChart
          data={data}
          width={300}
          height={250}
          labelsStyle={{ fontSize: 12 }}
          showLabels
        />
      );
}

export default PieChartAdmin;
