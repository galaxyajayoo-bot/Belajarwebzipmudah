
let chart;

function updateDashboard(){

  const selects = document.querySelectorAll("select");

  let hadir = 0;
  let sakit = 0;
  let izin = 0;
  let alfa = 0;

  selects.forEach(select => {
    if(select.value === "H") hadir++;
    if(select.value === "S") sakit++;
    if(select.value === "I") izin++;
    if(select.value === "A") alfa++;
  });

  document.getElementById("hadirCount").innerText = hadir;
  document.getElementById("sakitCount").innerText = sakit;
  document.getElementById("izinCount").innerText = izin;
  document.getElementById("alfaCount").innerText = alfa;

  updateChart(hadir,sakit,izin,alfa);
}

function updateChart(h,s,i,a){

  const ctx = document.getElementById('attendanceChart');

  if(chart){
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type:'doughnut',
    data:{
      labels:['Hadir','Sakit','Izin','Alfa'],
      datasets:[{
        data:[h,s,i,a]
      }]
    },
    options:{
      responsive:true,
      plugins:{
        legend:{
          labels:{
            color:'white'
          }
        }
      }
    }
  });
}

updateDashboard();
