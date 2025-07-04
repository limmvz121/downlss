document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const fileURL = this.getAttribute('href');
        const fileName = this.closest('.file-card').querySelector('.file-name').textContent;

        this.textContent = 'Mempersiapkan download...';
        this.style.opacity = '0.7';

        setTimeout(() => {
            this.textContent = 'Download dimulai!';
            this.style.background = 'linear-gradient(to right, #4cc9f0, #4895ef)';

            const link = document.createElement('a');
            link.href = fileURL;
            link.download = '';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setTimeout(() => {
                this.textContent = 'Download Sekarang';
                this.style.opacity = '1';
                this.style.background = 'linear-gradient(to right, var(--primary-color), var(--accent-color))';
            }, 1500);
        }, 1000);
    });
});
