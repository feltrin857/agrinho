// campo-cidade.js

// Gráfico 1 – Produtos Agrícolas
new Chart(document.getElementById('grafico1'), {
  type: 'pie',
  data: {
    labels: ['Soja', 'Milho', 'Trigo', 'Feijão', 'Café'],
    datasets: [{
      data: [40, 25, 15, 10, 10],
      backgroundColor: ['#4CAF50', '#FF9800', '#F44336', '#9C27B0', '#03A9F4']
    }]
  },
  options: {
    plugins: { legend: { position: 'bottom' } }
  }
});

// Gráfico 2 – Produção Animal
new Chart(document.getElementById('grafico2'), {
  type: 'pie',
  data: {
    labels: ['Frango', 'Suínos', 'Leite'],
    datasets: [{
      data: [50, 30, 20],
      backgroundColor: ['#8BC34A', '#FFC107', '#2196F3']
    }]
  },
  options: {
    plugins: { legend: { position: 'bottom' } }
  }
});

// Gráfico 3 – Composição Econômica
new Chart(document.getElementById('grafico3'), {
  type: 'pie',
  data: {
    labels: ['Agricultura', 'Setor Urbano', 'Agroindústria/Sustentabilidade'],
    datasets: [{
      data: [40, 35, 25],
      backgroundColor: ['#CDDC39', '#FF5722', '#00BCD4']
    }]
  },
  options: {
    plugins: { legend: { position: 'bottom' } }
  }
});