const totalProducts = document.querySelector(".checkout-container main .card .card-title span");
const totalPrice = document.querySelector(".checkout-container main .card .card-text span");
const deleteBtn = document.querySelector(".checkout-container main .card .delete-btn");
const purchaseBtn = document.querySelector(".checkout-container main .card .purchase-btn");

// get Quantity of Products & Total Price from local storage
totalProducts.textContent = localStorage.getItem('numProd') ? localStorage.getItem('numProd') : 0;
totalPrice.textContent = localStorage.getItem('totalPrice') ? localStorage.getItem('totalPrice') : 0;

// Handle Delete Button
deleteBtn.addEventListener('click', async() => {
    await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(async(res) => {
        if (res.isConfirmed) {
            localStorage.removeItem('numProd');
            localStorage.removeItem('totalPrice');
            await Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            window.location.reload();
        }
    });
});

// Handle Purchase Button
purchaseBtn.addEventListener('click', async() => {
    localStorage.removeItem('numProd');
    localStorage.removeItem('totalPrice');
    await Swal.fire({
        title: "Good Choice!",
        text: "Products are on their way to you!",
        icon: "success"
    });
    window.location.reload();
});