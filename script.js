async function downloadCard() {
    try {
        const card = document.getElementById('card-container');
        if (!card) {
            throw new Error('Card container element not found');
        }

        // Wait for image to load
        const img = card.querySelector('img');
        await new Promise((resolve) => {
            if (img.complete) resolve();
            else img.onload = resolve;
        });

        const canvas = await html2canvas(card, {
            useCORS: true,
            allowTaint: true,
            backgroundColor: null,
            scale: 2,
            logging: false,
            onclone: function(clonedDoc) {
                const clonedCard = clonedDoc.getElementById('card-container');
                if (clonedCard) {
                    clonedCard.style.transform = 'none';
                }
            }
        });
        
        // Create blob for better memory handling
        const blob = await new Promise(resolve => {
            canvas.toBlob(resolve, 'image/png');
        });
        
        // Use URL.createObjectURL for better performance
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'Sam-Steven-Sadie-Bean-Christmas-Card-2024.png';
        link.href = url;
        link.click();
        
        // Clean up
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error generating image:', error);
        alert('Sorry, there was an error generating the image. Please try again.');
    }
} 