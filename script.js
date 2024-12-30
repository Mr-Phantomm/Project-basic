document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const newEntry = {
        name,
        email,
        phone
    };

    let entries = JSON.parse(localStorage.getItem('formEntries')) || [];
    entries.push(newEntry);

    localStorage.setItem('formEntries', JSON.stringify(entries));
    alert('Application submitted and stored in local storage!');
});
