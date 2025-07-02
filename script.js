document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        const fileName = this.closest('.file-card').querySelector('.file-name').textContent;
        const fileURL = this.getAttribute('href');
        const originalText = this.textContent;

        this.textContent = 'Mempersiapkan download...';
        this.style.opacity = '0.7';

        setTimeout(() => {
            this.textContent = 'Download dimulai!';
            this.style.background = 'linear-gradient(to right, #4cc9f0, #4895ef)';

            // ✅ Buka file dengan cara paksa download
            const a = document.createElement('a');
            a.href = fileURL;
            a.download = '';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            setTimeout(() => {
                this.textContent = originalText;
                this.style.opacity = '1';
                this.style.background = 'linear-gradient(to right, var(--primary-color), var(--accent-color))';
            }, 1500);
        }, 1000);
    });
});
