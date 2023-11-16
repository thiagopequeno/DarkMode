document.addEventListener('DOMContentLoaded', () => {
    const ckh = document.getElementById('id_check');
    
    ckh.addEventListener('change', () => {
        document.body.classList.toggle('dark');
    });
});

