document.getElementById('downloadResume').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1oq9nb-ORu68ASGtQtc94qpbPmhBG7XKv';
    link.download = 'Dimple_L_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('response').innerText = "Message Sent Successfully!";
});
