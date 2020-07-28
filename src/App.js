import React, {useState, useEffect} from 'react';
import Chart from 'react-google-charts';
import './style.css';
function App() {
  const title = 'Quantidade de cadastros do primeiro semestre';
  const animation = {duration: 1000, asing: 'out', startup: true};
  const [dadosChart, setDadosChart] = useState([
    ['Mês', 'Quantidade'],
    ['Janeiro', 30],
    ['Fereveiro', 12],
    ['Março', 85],
    ['Abril', 40],
    ['Maio', 18],
  ]);

  useEffect(() =>{
    function alterarDados(){
      const novosDados = dadosChart.map(line => {
        // Pega os dados da linha na Posição 1
        if(Number.isInteger(line[1])){
          // Gera um número aleatório * 100.
          line[1] = Math.floor(Math.random() * 101);
        }
        return line;
      });
      setDadosChart(novosDados); 
    }
    // Faz o Grafico ser atualizado a cada 5 segundos
    const intervalId = setInterval(() => alterarDados(), 5000);
    
    // Limpa a atualização para não gerar um Loop Infinito
    return () => {
      clearInterval(intervalId);
    }
  }, [dadosChart]);
  return (
    <>
      <h1>Dashboard</h1>
      <div className="graphic">
        <div>
          <Chart 
            width={'400px'}
            height={'300px'}
            chartType={'PieChart'}
            data={dadosChart}
            options={{title: title}}
          />
          <Chart 
            width={'400px'}
            height={'300px'}
            chartType={'PieChart'}
            data={dadosChart}
            options={{
              title: title,
              is3D: true
            }}
          />   
          <Chart 
            width={'400px'}
            height={'300px'}
            chartType={'PieChart'}
            data={dadosChart}
            options={{
              title: title,
              pieHole: 0.4
            }}
          />
        </div>
        <div>
          <Chart 
            width={'400px'}
            height={'300px'}
            chartType={'BarChart'}
            data={dadosChart}
            options={{
              title: title,
              chartArea: {width: '50%'},
              hAxis: { title: 'quantidade'},
              vAxis: { title: 'Mês'},
              animation: animation,
            }}
          />
          <Chart 
            width={'400px'}
            height={'300px'}
            chartType={'LineChart'}
            data={dadosChart}
            options={{
              title: title,
              chartArea: {width: '50%'},
              hAxis: { title: 'Mês'},
              vAxis: { title: 'quantidade'},
              animation: animation,
            }}
          />
          <Chart 
            width={'400px'}
            height={'300px'}
            chartType={'AreaChart'}
            data={dadosChart}
            options={{
              title: title,
              chartArea: {width: '50%'},
              hAxis: { title: 'Mês'},
              vAxis: { title: 'quantidade'},
              animation: animation,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
