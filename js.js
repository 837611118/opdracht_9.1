document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    var openBtn = document.getElementById('openModalBtn');
    var closeBtn = document.getElementById('closeModalBtn');
    var verifyBtn = document.getElementById('verifyAgeBtn');
    var ageInput = document.getElementById('ageInput');

    openBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    verifyBtn.addEventListener('click', function () {
        var age = parseInt(ageInput.value);

        if (!isNaN(age) && age >= 18) {
            window.location.href = 'https://youtube.com/shorts/2JP6uEZ0pwQ?si=ZGC2r-52awELN0hn';
        } else {
            document.body.innerHTML = '<div style="color:red; text-align:center; padding: 50px;">Helaas, je bent te jong.</div>';
        }
    });
});
