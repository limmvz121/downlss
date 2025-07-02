document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const fileUrl = this.getAttribute('href');
        const fileName = this.closest('.file-card').querySelector('.file-name').textContent;
        
        // Animasi loading
        const originalText = this.textContent;
        this.textContent = 'Mempersiapkan download...';
        this.style.opacity = '0.7';
        
        setTimeout(() => {
            // Membuat elemen <a> sementara untuk download
            const downloadLink = document.createElement('a');
            downloadLink.href = fileUrl;
            downloadLink.download = fileName;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            
            // Feedback ke pengguna
            this.textContent = 'Download dimulai!';
            this.style.background = 'linear-gradient(to right, #4cc9f0, #4895ef)';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.opacity = '1';
                this.style.background = 'linear-gradient(to right, var(--primary-color), var(--accent-color))';
            }, 1500);
        }, 1000);
    });
});