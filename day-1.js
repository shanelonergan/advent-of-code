// PART 1

const input = [
  138428,
  129315,
  85143,
  119378,
  106438,
  136138,
  126273,
  61726,
  117121,
  107510,
  116139,
  137089,
  62862,
  89101,
  91623,
  121912,
  113802,
  68527,
  106791,
  71526,
  80210,
  140968,
  116768,
  114069,
  74451,
  72109,
  89284,
  65098,
  76986,
  52739,
  106469,
  112964,
  133216,
  110269,
  70285,
  52893,
  134567,
  70332,
  51686,
  116308,
  132269,
  101578,
  69560,
  137966,
  108829,
  94394,
  64614,
  77959,
  86005,
  112014,
  54597,
  108355,
  82805,
  54025,
  50093,
  139350,
  89057,
  108119,
  149167,
  90273,
  83649,
  58058,
  59560,
  63756,
  78767,
  112689,
  59109,
  103073,
  97051,
  122663,
  59326,
  63315,
  105423,
  134811,
  89578,
  105967,
  112749,
  77245,
  146275,
  97078,
  146862,
  75927,
  124553,
  103857,
  125861,
  131980,
  60928,
  109846,
  128001,
  71441,
  101655,
  110244,
  100550,
  149770,
  80374,
  76230,
  70359,
  113471,
  143101,
  148859
]

// make sure I have full data
console.log(input.length)

const calculateFuel = mass => Math.floor(mass / 3 - 2)

//test against example
console.log(calculateFuel(100756))

const fuelArr = input.map(inputValue => calculateFuel(inputValue))

const totalFuel = fuelArr.reduce((sum, currentValue) => sum + currentValue, 0)

// Solution is working
console.log(totalFuel, 'total fuel')

// PART 2
const totalMass = input.reduce((sum, currentValue) => sum + currentValue, 0)

const fuelForFuel = (totalMass) => {
  let fuelIncludingFuel = totalMass
  let remainingFuel = totalMass

   set = false
   while (set !== true) {
     if (calculateFuel(remainingFuel) <= 0) {
       set = true
       console.log(fuelIncludingFuel, 'solution')
       return fuelIncludingFuel
     } else {
       fuel = calculateFuel(remainingFuel)
       remainingFuel = fuel
       fuelIncludingFuel += fuel
     }
   }
}

const correctedFuelArr = input.map(inputValue => calculateFuel(inputValue))
const totalFuelTest = correctedFuelArr.reduce((sum, currentValue) => sum + currentValue, 0)
console.log(totalFuelTest, 'total fuel')
const fuelPlusFuelArr = correctedFuelArr.map(inputValue => fuelForFuel(inputValue))
console.table(fuelPlusFuelArr)
const correctedTotalFuel = fuelPlusFuelArr.reduce((sum, currentValue) => sum + currentValue, 0)

// Solution is working
console.log(correctedTotalFuel, 'correctedFuelTotal') // 4928567

// incorrect answers:
//
// 3287620
// 1643767 too low
// 4931387 too high

