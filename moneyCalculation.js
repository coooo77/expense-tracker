// const list = [
//   {
//     _id: 5e6901e8d5de9b72786a2ad9,
//     home: true,
//     transport: false,
//     entertain: false,
//     food: false,
//     other: false,
//     name: '沙發椅',
//     category: 'home',
//     amount: 10000,
//     userId: 5e6901e8d5de9b72786a2ad6,
//     date: 2020 - 03 - 11T15: 21: 12.378Z,
//     __v: 0
//   },
//   {
//     _id: 5e6901e8d5de9b72786a2ada,
//     home: false,
//     transport: true,
//     entertain: false,
//     food: false,
//     other: false,
//     name: '機車檢修',
//     category: 'transport',
//     amount: 1000,
//     userId: 5e6901e8d5de9b72786a2ad6,
//     date: 2020 - 03 - 11T15: 21: 12.379Z,
//     __v: 0
//   },
//   {
//     _id: 5e6901e8d5de9b72786a2adb,
//     home: false,
//     transport: false,
//     entertain: true,
//     food: false,
//     other: false,
//     name: '惡靈古堡3重製板',
//     category: 'entertain',
//     amount: 1800,
//     userId: 5e6901e8d5de9b72786a2ad6,
//     date: 2020 - 03 - 11T15: 21: 12.379Z,
//     __v: 0
//   },
//   {
//     _id: 5e6901e8d5de9b72786a2adc,
//     home: false,
//     transport: false,
//     entertain: false,
//     food: true,
//     other: false,
//     name: '蟹堡王美味蟹堡',
//     category: 'food',
//     amount: 300,
//     userId: 5e6901e8d5de9b72786a2ad6,
//     date: 2020 - 03 - 11T15: 21: 12.379Z,
//     __v: 0
//   },
//   {
//     _id: 5e6901e8d5de9b72786a2add,
//     home: false,
//     transport: false,
//     entertain: false,
//     food: false,
//     other: true,
//     name: '牙科檢查',
//     category: 'other',
//     amount: 200,
//     userId: 5e6901e8d5de9b72786a2ad6,
//     date: 2020 - 03 - 11T15: 21: 12.379Z,
//     __v: 0
//   }
// ]
// const list = [
//   {
//     home: true,
//     transport: false,
//     entertain: false,
//     food: false,
//     other: false,
//     name: '沙發椅',
//     category: 'home',
//     amount: 10000,
//     __v: 0
//   },
//   {
//     home: false,
//     transport: true,
//     entertain: false,
//     food: false,
//     other: false,
//     name: '機車檢修',
//     category: 'transport',
//     amount: 1000,
//     __v: 0
//   },
//   {
//     home: false,
//     transport: false,
//     entertain: true,
//     food: false,
//     other: false,
//     name: '惡靈古堡3重製板',
//     category: 'entertain',
//     amount: 1800,
//     __v: 0
//   },
//   {
//     home: false,
//     transport: false,
//     entertain: false,
//     food: true,
//     other: false,
//     name: '蟹堡王美味蟹堡',
//     category: 'food',
//     amount: 300,
//     __v: 0
//   },
//   {
//     home: false,
//     transport: false,
//     entertain: false,
//     food: false,
//     other: true,
//     name: '牙科檢查',
//     category: 'other',
//     amount: 200,
//     __v: 0
//   }
// ]

function moneyCalculation(list) {
  let sum = 0
  list.forEach(record => {
    sum += record.amount
  })
  return sum
}

// console.log(moneyCalculation(list))
module.exports = moneyCalculation