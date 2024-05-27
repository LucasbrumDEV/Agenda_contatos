
    document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    var table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var nameCell = newRow.insertCell(0);
    var phoneCell = newRow.insertCell(1);

    nameCell.textContent = name;
    phoneCell.textContent = phone;

    document.getElementById('contactForm').reset();
    });
