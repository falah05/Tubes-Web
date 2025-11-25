/* ===============================
   ADMIN BOOKING JS
================================ */

let bookingsData = []; // nanti dari database

// Render ke tabel booking
function renderBookings(data) {
    const tbody = document.getElementById("bookingsTable");
    tbody.innerHTML = "";

    data.forEach((b, index) => {
        tbody.innerHTML += `
        <tr data-status="${b.status}">
            <td class="booking-id">${b.id}</td>
            <td>${b.client}</td>
            <td>${b.service}</td>
            <td>${b.date}</td>
            <td>${b.status}</td>
            <td>
                <button onclick="viewBooking(${b.id})">View</button>
                <button onclick="editBooking(${b.id})">Edit</button>
                <button onclick="deleteBooking(${b.id})">Delete</button>
            </td>
        </tr>
        `;
    });
}


// Filter status booking
function filterBookingStatus(status) {
    const filtered = bookingsData.filter(b => {
        return status === "all" || b.status === status;
    });

    renderBookings(filtered);
}


// Search booking
function searchBooking() {
    const keyword = document.getElementById("bookingSearch").value.toLowerCase();

    const filtered = bookingsData.filter(b => 
        b.client.toLowerCase().includes(keyword)
    );

    renderBookings(filtered);
}


// CRUD dummy
function addBooking() {
    alert("Form tambah booking dibuka");
}

function viewBooking(id) {
    alert("Lihat booking ID: " + id);
}

function editBooking(id) {
    alert("Edit booking ID: " + id);
}

function deleteBooking(id) {
    if (confirm("Yakin hapus booking ini?")) {
        bookingsData = bookingsData.filter(b => b.id !== id);
        renderBookings(bookingsData);
    }
}


function filterStatus(event, status) {
    // Hapus active dari semua tab
    const tabs = document.querySelectorAll('.filter-tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Aktifkan tab yang diklik
    event.target.classList.add('active');

    // Ambil semua baris
    const rows = document.querySelectorAll('#bookingsTable tr');

    rows.forEach(row => {
        if (status === 'all') {
            row.style.display = '';
        } else {
            const statusCell = row.querySelector('.status-badge');
            if (!statusCell) return;

            const rowStatus = statusCell.dataset.status;

            if (rowStatus === status) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    });
}
