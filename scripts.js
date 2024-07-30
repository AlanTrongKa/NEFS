// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const reports = [
        { id: 1, name: 'Báo biểu A', date: '2024-07-20', creator: 'Nguyễn Văn A' },
        { id: 2, name: 'Báo biểu B', date: '2024-07-19', creator: 'Trần Thị B' },
        { id: 3, name: 'Báo biểu C', date: '2024-07-18', creator: 'Lê Văn C' }
    ];

    const tableBody = document.querySelector('#reportTable tbody');
    reports.forEach((report, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${report.name}</td>
            <td>${report.date}</td>
            <td>${report.creator}</td>
        `;
        tableBody.appendChild(row);
    });
});
