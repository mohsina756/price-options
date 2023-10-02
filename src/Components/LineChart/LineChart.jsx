import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const mathMarksData =[
        {id: 1, name: 'Alim', math: 78 },
        {id: 2, name: 'Alis', math: 92 },
        {id: 3, name: 'Alid', math: 80 },
        {id: 4, name: 'Alif', math: 70 },
        {id: 5, name: 'Alig', math: 66 },
        {id: 6, name: 'Alih', math: 67 },
        {id: 7, name: 'Alij', math: 77 },
        {id: 8, name: 'Alin', math: 89 },
        {id: 9, name: 'Aliv', math: 83 },
        {id: 10, name: 'Ali', math: 90 }
    ]

    return (
        <div>
            <LChart width={500} height={400} data={mathMarksData}>
                <XAxis dataKey='name'/>
                <YAxis dataKey='math'/>
             <Line dataKey="math" stroke='red'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;