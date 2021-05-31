function $(e) {
  return document.querySelector(e);
}

var arrMonAn = [
  { maMonAn: 1, tenMonAn: "Nước lẩu haidilao", giaTien: 100 },
  { maMonAn: 2, tenMonAn: "Mì cay thành đô", giaTien: 200 },
  { maMonAn: 3, tenMonAn: "Mực bạch ngọc", giaTien: 300 },
];

var showMenu = () => {
  let content = "";
  for (const food of arrMonAn) {
    let row = `
        <div class="row mt-3">
            <div class="col-3">${food.maMonAn}</div>
            <div class="col-3">${food.tenMonAn}</div>
            <div class="col-3">${food.giaTien}</div>
            <div class="col-3">
                <button
                    class="bg-danger text-white btn"
                    onclick = "addFood('${food.maMonAn}')">
                +
                </button>
                <button
                    class="bg-danger text-white btn"
                    onclick = "removeFood('${food.maMonAn}')">
                    -
                    </button>
            </div>
        </div>`;
    content += row;
  }
  $("#menu").innerHTML = content;
};

showMenu();

var arrBill = [];

for (let i = 0; i < arrMonAn.length; i++) {
  let food = arrMonAn[i];
  let bill = new Bill(food.maMonAn, food.tenMonAn, food.giaTien);
  arrBill.push(bill);
}

function addFood(id) {
  var i = 0;
  for (i = 0; i < arrBill.length; i++) {
    if (parseInt(id) === arrBill[i]._id) {
      arrBill[i]._quantity++;
      break;
    }
  }
  renderBill(arrBill);
}
function removeFood(id) {
  var i = 0;
  for (i = 0; i < arrBill.length; i++) {
    if (parseInt(id) === arrBill[i]._id && arrBill[i]._quantity > 0) {
      arrBill[i]._quantity--;
      break;
    }
  }
  renderBill(arrBill);
}
function renderBill(arrBill) {
  let total = 0;

  var content = "";

  for (const food of arrBill) {
    if (food._quantity > 0) {
      let tr = `
            <tr>
                <td>${food._id}</td>
                <td>${food._name}</td>
                <td>${food._quantity}</td>
                <td>${food._total()}</td>
            </tr>`;
      content += tr;
      total += food._total();
    }
  }

  $("#tblHoaDon").innerHTML = content;
  $("#totalMoney").innerHTML = total;
}
