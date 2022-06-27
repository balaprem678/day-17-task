let x = 9987654321;
sum = 0;
while(x > 0){
  reminder = x % 10;
  x = x - reminder;
  x = x / 10;
  sum = sum * 10 + reminder;
  console.log(+sum);
}