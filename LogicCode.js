let nums = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];
function digitDrop(array) {
  let rep;
  let multply = 1;
  for (i = 0; i < array.length; i++) {
    rep = array[i].repeat(multply);
    multply++;
    console.log(rep);
  }
}
// the function will only take array for now but it can be easily upgraded
digitDrop(nums);
