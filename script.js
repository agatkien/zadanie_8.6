var a, b, value;
a = 5;
b = 6;
value = (a * a) + (2 * a * b) - (b * b);
console.log(value);

 

if ( value > 0 ) {
    console.log(value + 'wynik dodatni');
}
  else if (value < 0) {
      console.log(value + 'wynik ujemny');
  }
  else (value == 0) {
       console.log(value);
  }
       