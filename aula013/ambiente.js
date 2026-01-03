var cont = 0;
var cont2 = 0;
do {
  console.log(`loop do while ${cont + 1}`);
  cont++;
} while (cont < 5);

while (cont2 < 5) {
  console.log(`loop while ${cont2 + 1}`);
  cont2++;
}

for (var i = 0; i < 5; i++) {
  console.log(`loop for ${i + 1}`);
}
