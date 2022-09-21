const ctx = document.getElementById('myChart');

fetch('./data.json')
  .then((response) =>
    response.json())
  .then((json) => {

    const day = [];
    const data = [];

    for (let i = 0; i < json.length; i++) {
      day[i] = json[i].day;
    }

    for (let i = 0; i < json.length; i++) {
      data[i] = json[i].amount;
    }

    console.log(data);

    //BAR
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: day,
        datasets: [{
          label: '',
          data: data,
          backgroundColor: [
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)'
          ],
          borderWidth: 0,
          borderRadius: {
            bottomRight: 4,
            bottomLeft: 4,
            topLeft: 4,
            topRight: 4,
          }
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false,
          }
        },
        scales: {
          y: {
            display: false,
            grid: {
              display: false,
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  });


