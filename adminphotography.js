/* ===============================
   ADMIN PHOTOGRAPHY JS
================================ */

let photographersData = []; // nanti diisi dari database / API

// Render data ke tabel
function renderPhotographers(data) {
    const tbody = document.getElementById("photographersTable");
    tbody.innerHTML = "";

    data.forEach((p, index) => {
        tbody.innerHTML += `
        <tr data-theme="${p.theme}" data-status="${p.status}">
            <td>${index + 1}</td>
            <td>${p.name}</td>
            <td>${p.theme}</td>
            <td>${p.status}</td>
            <td>
                <button onclick="editPhotographer(${p.id})">Edit</button>
                <button onclick="deletePhotographer(${p.id})">Delete</button>
            </td>
        </tr>
        `;
    });
}


// Filter berdasarkan status
function filterPhotoStatus(status) {
    const filtered = photographersData.filter(p => {
        return status === "all" || p.status === status;
    });

    renderPhotographers(filtered);
}

// Filter berdasarkan tema
function filterPhotoTheme(theme) {
    const filtered = photographersData.filter(p => {
        return theme === "all" || p.theme === theme;
    });

    renderPhotographers(filtered);
}


// Search photographer
function searchPhotographer() {
    const keyword = document.getElementById("photoSearch").value.toLowerCase();

    const filtered = photographersData.filter(p => 
        p.name.toLowerCase().includes(keyword)
    );

    renderPhotographers(filtered);
}


// CRUD dummy
function addPhotographer() {
    alert("Form tambah photographer dibuka");
}

function editPhotographer(id) {
    alert("Edit photographer ID: " + id);
}

function deletePhotographer(id) {
    if (confirm("Yakin hapus photographer?")) {
        photographersData = photographersData.filter(p => p.id !== id);
        renderPhotographers(photographersData);
    }
}


// LOAD DATA (dummy data dulu)
document.addEventListener("DOMContentLoaded", () => {
    photographersData = [
        { id: 1, name: "Andi", theme: "wedding", status: "available" },
        { id: 2, name: "Budi", theme: "fashion", status: "on-assignment" },
        { id: 3, name: "Citra", theme: "product", status: "off-duty" }
    ];

    renderPhotographers(photographersData);
});
document.addEventListener("DOMContentLoaded", () => {
    console.log("Admin Photography Loaded");
});

function filterCategory(event, category) {
    const tabs = document.querySelectorAll('.filter-tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Aktifkan tab yang diklik
    event.target.classList.add('active');

    // Ambil semua card
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const type = card.dataset.category;

        if (category === 'all' || type === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function editPhotographer(id) {
    alert("Edit photographer " + id);
}

function deletePhotographer(id) {
    if (confirm("Delete photographer " + id + "?")) {
        alert("Deleted photographer " + id);
    }
}
function filterStatus(event, status) {
  const tabs = document.querySelectorAll(".filter-tab");
  const rows = document.querySelectorAll("tbody tr");

  // hapus active dari semua tab
  tabs.forEach(tab => tab.classList.remove("active"));

  // tambah active ke tab yang diklik
  event.currentTarget.classList.add("active");

  // filter table
  rows.forEach(row => {
    const rowStatus = row.querySelector(".status").innerText.toLowerCase();

    if (status === "all" || rowStatus === status) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}
