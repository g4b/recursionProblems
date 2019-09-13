function chooseFn(){
  var value = parseInt(document.getElementById("fnSelector").value);
  var input = document.getElementById("input").value;
  switch (value){
    case 1:
      document.getElementById("output").innerHTML = triangle(parseInt(input));
      break;
    case 2:
      document.getElementById("output").innerHTML = fibonacci(parseInt(input));
      break;
    case 3:
      document.getElementById("output").innerHTML = countHi(input);
      break;
    case 4:
      document.getElementById("output").innerHTML = array6(stringToNumArray(input), 0);
      break;
    case 5:
      document.getElementById("output").innerHTML = noX(input);
      break;
    case 6:
      document.getElementById("output").innerHTML = separateN(input);
      break;
    case 7:
      document.getElementById("output").innerHTML = changeXY(input);
      break;
    case 8:
      document.getElementById("output").innerHTML = array220(stringToNumArray(input), 0);
      break;
    default:
      document.getElementById("output").innerHTML = "what";
  }
}

function triangle(rows){
  if (rows == 0){
    return 0;
  }
  return rows + triangle(rows - 1);
}

function fibonacci(n){
    if (n == 0 || n == 1){
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function countHi(str){
  if (str.length < 2){
    return 0;
  }
  if (str.substring(0, 2) == "hi"){
    return 1 + countHi(str.substring(2));
  } else {
    return countHi(str.substring(1));
  }
}

function array6(nums, i){
  if (i < nums.length){
    if (nums[i] == 6){
      return true;
    }
    return array6(nums, i + 1);
  }
  return false;
}

function noX(str){
  if (str.length == 1){
    if (str == "x"){
      return str;
    }
    return "";
  }
  if (str[0] == 'x'){
    return noX(str.substring(1));
  }
  return str[0].toString() + noX(str.substring(1));
}

function powerN(base, n){
  if (base == 0){
    return 0;
  } else if (base == 1 || n == 0){
    return 1;
  } else {
    return base * powerN(base, n - 1);
  }
}

function changeXY(str){
  if (str == ""){
    return str;
  } else {
    if (str[0] == "x"){
      return "y" + changeXY(str.substring(1));;
    } else if (str[0] == "y"){
      return "x" + changeXY(str.substring(1));
    } else {
      return str[0] + changeXY(str.substring(1));
    }
  }
}

function array220(nums, i){
  if (nums.length < 2){
    return false;
  }
  if (i + 1 < nums.length){
    if(nums[i+ 1] == 10 * nums[i]){
      return true;
    }
    return array220(nums, i + 1);
  }
  return false;
}

function stringToNumArray(str){
  var newArr = str.split(",");
  for (var i = 0; i < newArr.length; i++){
    newArr[i] = parseInt(newArr[i]);
  }
  return newArr;
}

function separateN(str){
  var arr = str.split(",");
  var base = parseInt(arr[0]);
  var n = parseInt(arr[1]);
  var final = powerN(base, n).toString();
  return final;
}
