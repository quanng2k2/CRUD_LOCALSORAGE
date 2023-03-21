let listProduct = [];

function addProduct() {

  let stt = document.getElementById("sttProduct").value;
  let name = document.getElementById("nameProduct").value;
  let price = document.getElementById("priceProduct").value;
  let objectProduct = {
    stt: stt,
    name: name,
    price: price,
  }
  let objectFlag = localStorage.getItem("flag")
  if (objectFlag != null) {
    listProduct.splice(objectFlag,1,objectProduct)
    renderProduct() ;
    localStorage.removeItem("flag") ;
    return;
  }
  listProduct.push(objectProduct);
  renderProduct();

}

function renderProduct() {
  let result = `
    <tr>
    <td>stt</td>
    <td>Tên Sản Phẩm</td>
    <td>Giá Sản Phẩm</td>
    <td>
        <button>xóa</button>
        <button>Sửa</button>
    </td>
</tr>
    `;
  for (i = 0; i < listProduct.length; i++) {
    result += `
        <tr>
        <td>${i + 1}</td>
        <td>${listProduct[i].name}</td>
        <td>${listProduct[i].price}</td>
        <td>
            <button onclick = "hanldeDelete(${i})">xóa</button>
            <button onclick = "handleEdit(${i})">Sửa</button>
        </td>
    </tr>
        `;
  }
  document.getElementById("tableProduct").innerHTML = result;
}

function hanldeDelete(id) {
  listProduct.splice(id, 1);
  renderProduct();
}

function handleEdit(id) {
  document.getElementById("nameProduct").value = listProduct[id].name;
  document.getElementById("priceProduct").value = listProduct[id].price;
  localStorage.setItem("flag", id);
}
