
document.addEventListener('DOMContentLoaded', () => {

    let orderCount = 0;
    const allOrderButtons = document.querySelectorAll('.add-to-order-btn');
    const orderCountBadge = document.getElementById('order-count');
    allOrderButtons.forEach((button) => {
        button.addEventListener('click', () => {
            orderCount++;

            orderCountBadge.textContent = orderCount;

            button.textContent = "Added!";
            button.classList.remove('btn-primary');
            button.classList.add('btn-success');
            button.disabled = true;

        });
    
    });


});
