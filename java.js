const originalList = {
    "myList": [
      {
        "ProductCode": "panel1",
        "Desc": "F120",
        "Type": "P",
        "Qty": 1,
        "Selected": false
      },
      {
        "ProductCode": "panel2",
        "Desc": "F220",
        "Type": "P",
        "Qty": 1,
        "Selected": false
      }
    ]
  }

function appendRow(){
  const row = "<p>" + originalList.myList[1].ProductCode + " " + originalList.myList[1].Desc + " " + 
    " " + originalList.myList[1].Qty + " " + originalList.myList[1].Type + "</p>";
    $(".container").append(row);
    console.log(originalList.myList[1].ProductCode + "\n");
    console.log(originalList.myList[1].Desc);
}