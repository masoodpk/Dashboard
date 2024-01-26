/* App.js */
import React, { Component, useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import axios from 'axios';
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Graph() {
    const [data, setData] = useState([]);
    const months = ["Jan", "Feb", "Mar", "Apr", "May"]
    useEffect(() => {
        axios.get("/api/graph")
        .then(res => {
            console.log(res.data);
            setData(res.data?.map(item => ({...item, x: new Date(2001,months.indexOf(item.x))})));
        });
    },[]);
    const options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: ""
        },
        axisY: {
            title: "",
            logarithmic: true
        },
        data: [{
            type: "spline",
            showInLegend: true,
            dataPoints: data
        }]
    }

    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
}

export default Graph;