// Generate barcode when page loads
document.addEventListener('DOMContentLoaded', function() {
    generateBarcode();
});

function generateBarcode() {
    const canvas = document.getElementById('barcodeCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#000';
    const barcode = '66030281';
    let x = 10;

    // Generate random barcode pattern
    for (let i = 0; i < 60; i++) {
        const width = Math.random() > 0.5 ? 2 : 4;
        if (Math.random() > 0.3) {
            ctx.fillRect(x, 0, width, 50);
        }
        x += width + 2;
    }
}
