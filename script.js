async function downloadCard() {
    try {
        const card = document.getElementById('card-container');
        if (!card) {
            throw new Error('Card container element not found');
        }

        const canvas = await html2canvas(card, {
            useCORS: true,            // Enable CORS
            allowTaint: true,         // Allow cross-origin images
            logging: true,            // For debugging
            scale: 2,                 // For better quality
            backgroundColor: null     // Preserve transparency
        });
        
        // Create blob for better memory handling
        const blob = await new Promise(resolve => {
            canvas.toBlob(resolve, 'image/png');
        });
        
        // Use URL.createObjectURL for better performance
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'christmas-card.png';
        link.href = url;
        link.click();
        
        // Clean up
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error generating image:', error);
        alert('Sorry, there was an error generating the image. Please try again.');
    }
} 