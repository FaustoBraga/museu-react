import { useEffect, useState } from "react";
import { Chart } from 'primereact/chart';

const GraficoPorGenero = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    const buscarVisitantes = () => {
        fetch('http://localhost:8080/visitantes/grafico-por-genero')
        .then(resposta => resposta.json())
        .then(visitantes => {
            
            const data = {
                labels: visitantes.map(vis => vis.genero),
                datasets: [
                    {
                        data: visitantes.map(vis => vis.total),
                        backgroundColor: [
                            '#3fd5ffab', 
                            '#ff3f3fab', 
                            '#a83fffab'
                        ],
                        hoverBackgroundColor: [
                            '#3fd5ff', 
                            '#ff3f3f', 
                            '#a83fff'
                        ]
                    }
                ]
            }
            const options = {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true
                        }
                    }
                }
            };
    
            setChartData(data);
            setChartOptions(options);
        })
    }

    useEffect(() => {
        buscarVisitantes();
    }, []);

    return (
        <>
            <Chart 
                type="pie" 
                data={chartData} 
                options={chartOptions} 
                className="w-full md:w-30rem"
            />
        </>
    );
}

export default GraficoPorGenero;