function updateWelcomeMessage(name) {
    const welcomeElement = document.getElementById('welcomeMessage');
    if (welcomeElement && name) {
        welcomeElement.textContent = `Hi ${name}, Welcome To Website`;
    } else if (welcomeElement) {
        welcomeElement.textContent = `Hi User, Welcome To Website`;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const userName = localStorage.getItem('userName');
    updateWelcomeMessage(userName);
});


const messageForm = document.getElementById('messageForm');
const outputArea = document.getElementById('outputArea');
const outputDetails = document.getElementById('outputDetails');

if (messageForm) {
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!messageForm.checkValidity()) {
            return; 
        }

        const nama = document.getElementById('nama').value;
        const tanggalLahir = document.getElementById('tanggalLahir').value;
        const pesan = document.getElementById('pesan').value;
        const jenisKelaminElement = document.querySelector('input[name="jenisKelamin"]:checked');
        const jenisKelamin = jenisKelaminElement ? jenisKelaminElement.value : 'Tidak dipilih';

        localStorage.setItem('userName', nama);

        updateWelcomeMessage(nama);

        outputDetails.innerHTML = `
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
            <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
            <p><strong>Pesan:</strong> ${pesan}</p>
        `;

        if (outputArea) {
            outputArea.classList.remove('hidden');
        }

        messageForm.reset();
        
        outputArea.scrollIntoView({ behavior: 'smooth' });
    });
}
