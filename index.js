// Bài tập 1
document.getElementById("tinhLuong").addEventListener("click", function () {
  //   console.log("Tôi là nút tính lương");
  let tienLuong = 100000;
  let soNgayLam = document.getElementById("soNgayLam").value * 1;
  //   console.log(soNgayLam);
  let tongLuong = tienLuong * soNgayLam;

  let ketQuaTinhLuong = document.getElementById("ketQuaTinhLuong");

  ketQuaTinhLuong.className += " py-3";
  ketQuaTinhLuong.innerHTML = `Tiền lương của nhân viên là: ${tongLuong.toLocaleString(
    "vn-VN",
    {
      style: "currency",
      currency: "VND",
    }
  )} `;
});

// Bài tập 2
document.getElementById("tinhTrungBinh").addEventListener("click", function () {
  //   console.log("Tôi là nút tính trung bình");
  let soThuNhat = document.getElementById("soThuNhat").value * 1;
  let soThuHai = document.getElementById("soThuHai").value * 1;
  let soThuBa = document.getElementById("soThuBa").value * 1;
  let soThuTu = document.getElementById("soThuTu").value * 1;
  let soThuNam = document.getElementById("soThuNam").value * 1;
  //   console.log(soThuNhat, soThuHai, soThuBa, soThuTu, soThuNam);
  let soTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;

  let ketQuaTinhTrungBinh = document.getElementById("ketQuaTinhTrungBinh");
  ketQuaTinhTrungBinh.className += " py-3";
  ketQuaTinhTrungBinh.innerHTML = `Số trung bình là: ${soTrungBinh} `;
});

// Bài tập 3
document.getElementById("quyDoiTien").addEventListener("click", function () {
  let tienUSD = document.getElementById("tienUSD").value * 1;

  let tienVND = tienUSD * 24600;

  let ketQuaQuyDoiTien = document.getElementById("ketQuaQuyDoiTien");

  ketQuaQuyDoiTien.className += " py-3";
  ketQuaQuyDoiTien.innerHTML = `Tiền lương của nhân viên là: ${tienVND.toLocaleString(
    "vn-VN",
    {
      style: "currency",
      currency: "VND",
    }
  )} `;
});

//Bài tập 4
document.getElementById("tinhKichThuoc").addEventListener("click", function () {
  let chieuDai = document.getElementById("chieuDai").value * 1;
  let chieuRong = document.getElementById("chieuRong").value * 1;

  let dienTich = chieuDai * chieuRong;
  let chuVi = (chieuDai + chieuRong) * 2;

  let ketQuaTinhKichThuoc = document.getElementById("ketQuaTinhKichThuoc");
  ketQuaTinhKichThuoc.className += " py-3";
  ketQuaTinhKichThuoc.innerHTML = `Diện tích là: ${dienTich}, Chu vi là: ${chuVi} `;
});

// Bài tập 5
document.getElementById("tinhKySo").addEventListener("click", function () {
  let soCanTinh = document.getElementById("soCanTinh").value * 1;

  let hangChuc = Math.floor(soCanTinh / 10);
  let hangDonVi = soCanTinh % 10;

  let tongKySo = hangChuc + hangDonVi;

  let ketQuaTinhKySo = document.getElementById("ketQuaTinhKySo");
  ketQuaTinhKySo.className += " py-3";
  ketQuaTinhKySo.innerHTML = `Tổng 2 ký số là: ${tongKySo} `;
});
