document.addEventListener('DOMContentLoaded', function() {
    // Determine context for charts
    const usersCtx = document.getElementById('activeUsersChart');
    const salesCtx = document.getElementById('salesOverviewChart');

    if (usersCtx) {
        new Chart(usersCtx, {
            type: 'bar',
            data: {
                labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: "Active Users",
                    data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
                    backgroundColor: '#fff',
                    borderRadius: 4,
                    borderSkipped: false,
                    barThickness: 8,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        grid: { display: true, drawBorder: false, color: 'rgba(255, 255, 255, 0.2)', borderDash: [5, 5] },
                        ticks: { color: '#fff', padding: 10, font: { size: 12, family: "Inter" } }
                    },
                    x: {
                        grid: { display: false, drawBorder: false },
                        ticks: { display: false } // Hidden on X axis as per reference
                    }
                }
            }
        });
    }

    if (salesCtx) {
        new Chart(salesCtx, {
            type: 'line',
            data: {
                labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: "Mobile Apps",
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 0,
                    borderColor: '#cb0c9f',
                    backgroundColor: 'rgba(203, 12, 159, 0.2)',
                    fill: true,
                    data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                },
                {
                    label: "Websites",
                    tension: 0.4,
                    borderWidth: 3,
                    pointRadius: 0,
                    borderColor: '#344767',
                    backgroundColor: 'transparent',
                    fill: false,
                    data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        grid: { display: true, drawBorder: false, color: 'rgba(255, 255, 255, 0.1)', borderDash: [5, 5] },
                        ticks: { color: '#a0aec0', padding: 10, font: { size: 12, family: "Inter" } }
                    },
                    x: {
                        grid: { display: false, drawBorder: false },
                        ticks: { color: '#a0aec0', padding: 10, font: { size: 12, family: "Inter" } }
                    }
                }
            }
        });
    }
});
