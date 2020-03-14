type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(
  n1: Combinable,
  n2: Combinable,
  resultConvert: ConversionDescriptor
) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number" || resultConvert === 'as-number') {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
//   if (resultConvert === "as-number") {
//       return +result
//   }else{
//       return result.toString()
//   }
  return result;
}
const combinedAges = combine(30, 25, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "25", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Alie", "as-text");
console.log(combinedNames);
