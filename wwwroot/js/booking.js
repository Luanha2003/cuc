document.addEventListener('DOMContentLoaded', function () {
    const quantityInput = document.getElementById('quantity');
    const originSelect = document.getElementById('origin');
    const destinationSelect = document.getElementById('destination');
    const totalPriceSpan = document.getElementById('total-price');
    const submitButton = document.getElementById('submit-booking');
    const errorMessageDiv = document.getElementById('error-message');

    // Dữ liệu về các ga tàu (để tính khoảng cách)
    const stations = [
        "Bến Thành",
        "Nhà hát Thành phố",
        "Ba Son",
        "Công viên Văn Thánh",
        "Tân Cảng",
        "Thảo Điền",
        "An Phú",
        "Rạch Chiếc",
        "Phước Long",
        "Bình Thái",
        "Thủ Đức",
        "Khu công nghệ cao",
        "Suối Tiên",
        "Đại học Quốc gia"
    ];

    function calculatePrice() {
        const quantity = parseInt(quantityInput.value, 10);
        const origin = originSelect.value;
        const destination = destinationSelect.value;

        let total = 0;

        if (quantity > 0 && origin && destination && origin !== destination) {
            const originIndex = stations.indexOf(origin);
            const destinationIndex = stations.indexOf(destination);
            
            // Tính số trạm đi qua
            const stops = Math.abs(destinationIndex - originIndex);

            // Công thức tính giá vé:
            // - Giá mở cửa: 7,000đ
            // - Mỗi 3 trạm tiếp theo: +2,000đ
            let pricePerTicket = 7000;
            if (stops > 2) {
                pricePerTicket += Math.ceil((stops - 2) / 3) * 2000;
            }
            
            total = quantity * pricePerTicket;
        }

        totalPriceSpan.textContent = total.toLocaleString('vi-VN');
    }

    // Gắn sự kiện để tính giá lại khi thay đổi
    quantityInput.addEventListener('input', calculatePrice);
    originSelect.addEventListener('change', calculatePrice);
    destinationSelect.addEventListener('change', calculatePrice);

    // Xử lý nút thanh toán
    submitButton.addEventListener('click', function() {
        const origin = originSelect.value;
        const destination = destinationSelect.value;
        const tripDate = document.getElementById('trip-date').value;

        if (!origin || !destination || !tripDate) {
            errorMessageDiv.textContent = 'Vui lòng điền đầy đủ thông tin: Ga đi, ga đến và ngày đi.';
            errorMessageDiv.style.display = 'block';
        } else if (origin === destination) {
            errorMessageDiv.textContent = 'Ga đi và ga đến không được trùng nhau.';
            errorMessageDiv.style.display = 'block';
        } else {
            errorMessageDiv.style.display = 'none';
            // Logic khi thành công (ví dụ: chuyển trang hoặc hiển thị thông báo)
            alert('Đặt vé thành công! (Đây là giao diện mẫu, chưa có xử lý backend)');
        }
    });

    // Cập nhật lại danh sách ga tàu trong dropdown cho đầy đủ
    stations.forEach(station => {
        originSelect.innerHTML += `<option value="${station}">${station}</option>`;
        destinationSelect.innerHTML += `<option value="${station}">${station}</option>`;
    });
    
    // Xóa các option cũ đi
    originSelect.options[1].remove();
    originSelect.options[1].remove();
    originSelect.options[1].remove();
    originSelect.options[1].remove();
    destinationSelect.options[1].remove();
    destinationSelect.options[1].remove();
    destinationSelect.options[1].remove();
    destinationSelect.options[1].remove();
    
    calculatePrice(); // Tính giá lần đầu
});