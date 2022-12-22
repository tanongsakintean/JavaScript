const status = 700;

switch (status) {
  case 200:
    console.log("OK!");
    break;
  case 400: //or
  case 500: //or
    console.log("Error!");
  default:
    console.log("Unknown status");
    break;
}
