async function downloadCard() {
    try {
        // First ensure image is loaded
        const img = document.querySelector('.photo-frame img');
        await new Promise((resolve, reject) => {
            const newImg = new Image();
            newImg.crossOrigin = "anonymous";
            newImg.onload = () => {
                img.src = newImg.src;
                resolve();
            };
            newImg.onerror = reject;
            newImg.src = img.src;
        });

        // Configure html2canvas
        const canvas = await html2canvas(document.getElementById('card-container'), {
            useCORS: true,
            allowTaint: false,
            scale: 2,
            logging: true,
            backgroundColor: '#ffffff'
        });
        
        // Create download link
        const link = document.createElement('a');
        link.download = 'Christmas-Card.png';
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error generating image:', error);
        alert('Sorry, there was an error generating the image. Please try again.');
    }
} 