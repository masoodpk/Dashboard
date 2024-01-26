import React, { useState, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import axios from 'axios';
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function PieChart() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("/api/pie-chart")
            .then(res => {
                console.log(res.data);
                setData(res.data?.map(item => ({ ...item, y: item.value })));
            });
    }, []);
    const options = {
        type: "pie",
        animationEnabled: true,
        exportFileName: "New Year Resolutions",
        title: {
            text: ""
        },
        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            indexLabelPlacement: "inside",
            dataPoints: data
        }]
    }
    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
}
export default PieChart;