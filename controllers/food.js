function $(e) {
  return document.querySelector(e);
}

var arrFood = [];

$("#btnAddFood").onclick = () => {
  let id = $("#maMonAn").value;
  let name = $("#tenMonAn").value;
  let price = $("#giaTien").value;
  let link = $("#linkAnh").value;

  let food = new Food(id, name, price, link);

  arrFood.push(food);

  renderTableStu(arrFood);
};

function renderTableStu(arr) {
  var content = "";
  for (let index = 0; index < arr.length; index++) {
    var tr = `
        <tr class='border-top'>
            <td>${arr[index]._id}</td>
            <td>${arr[index]._name}</td>
            <td>${arr[index]._price}</td>
            <td>
                <img
                    src="${arr[index]._link}"
                    style="width: 100px; height: 100px"
                    alt = "food img"
                />
            </td>
            <td>
                <button class="btn btn-danger" onclick="deleteFood('${arr[index]._id}')">
                Xoá
                </button>
            </td>
        </tr>`;
    content += tr;
  }
  let tblDanhMucMonAn = $("#tblDanhMucMonAn");

  tblDanhMucMonAn.innerHTML = content;
}

function deleteFood(id) {
  for (let index = 0; index < arrFood.length; index++) {
    if (id === arrFood[index]._id) {
      arrFood.splice(index, 1);
      break;
    }
  }
  renderTableStu(arrFood);
}
