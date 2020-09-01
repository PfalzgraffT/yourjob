const initChart = () => {
  const chartElement    = document.getElementById('graph1');
  if (chartElement) {
    const userName      = chartElement.dataset.userFullname;
    const recruiterName = chartElement.dataset.companyName;
    const userSkills    = JSON.parse(chartElement.dataset.userSkills);
    const offerSkills   = JSON.parse(chartElement.dataset.offerSkills);
    const ctx           = chartElement.getContext('2d');
    const data = {
        // The data for our dataset
            labels: ['interpersonal_skills', 'rigor', 'independence', 'communication', 'teamwork', 'creativity', 'initiative', 'stress_management', 'perseverance', 'decision_making', 'curiosity', 'adaptability', 'enthusiam', 'flexibility', 'empathy'],
            datasets: [
            {
                label: userName,
                //backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                //borderWidth:
                data: userSkills
            },
            {
                label: recruiterName,
                //backgroundColor: 'rgb(25, 99, 132)',
                borderColor: 'rgb(25, 99, 132)',
                data: offerSkills
            }
          ]
        };

        // Configuration options go here
    const options = {
      responsive: true,
      scale: {
        ticks: {
            beginAtZero: true,
            max: 5,
            min: 0,
            stepSize: 1
        }
      }
    }

    const config = {
      type: 'radar',
      data: data,
      options: options
    }
    const chart = new Chart(ctx, config)
  }
}

export { initChart };
