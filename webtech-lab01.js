
// 1) Add 
function addition(a, b) {
  return a + b;
}
console.log('Task1', addition(5, 3)); 


// 2) Bitwise 
function bitwiseAND(a, b) {
  return a & b;
}

function bitwiseOR(a, b) {
  return a | b;
}

function bitwiseXOR(a, b) {
  return a ^ b;
}
console.log('Task2 (Bitwise AND):', bitwiseAND(7, 5)); 
console.log('Task2 (Bitwise OR):', bitwiseOR(7, 5)); 
console.log('Task2 (Bitwise XOR):', bitwiseXOR(7, 5));


// 3) Add with loop
function addUp(a) {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i;
  }
  return sum;
}
console.log("Task 3 (addUp):", addUp(4)); 


// 4) progress bar 
function progressBar(a) {
  let filled = Math.floor(a / 10);
  let empty= 10 - filled;
  return "#".repeat(filled) + "-".repeat(empty);
}
console.log("Task 4 (progressBar):", progressBar(40)); 


// 5) Min and Max 
function minMax(arr) {

  if (arr.length === 0) return [];

  
  let min = arr[0];
  let max = arr[0];

  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]; 
    }
    if (arr[i] > max) {
      max = arr[i]; 
    }
  }

  return [min, max];
}

console.log("Task 5 (minMax):", minMax([1, 2, 3, 4, 5, 6])); // [1, 6]

// 6) Repository Stats 
function calculateRepoStats(repos) {
  const stars = repos.map(repo => repo.stars);
  const maxStars = Math.max(...stars);
  const minStars = Math.min(...stars);
  const totalStars = stars.reduce((sum, s) => sum + s, 0);
  const avgStars = Math.floor(totalStars / stars.length);
  const varianceScore = Math.abs(maxStars - minStars);

  return {
    maxStars,
    minStars,
    avgStars,
    varianceScore
  };
}
const repos = [
  { name: 'repo-a', stars: 12 },
  { name: 'repo-b', stars: 45 },
  { name: 'repo-c', stars: 3 }
];
console.log("Task 6 (calculateRepoStats):", calculateRepoStats(repos));


// 7) Final Price and Loyalty Points
function calculateFinalPrice(basePrice, taxRate, discountPercentage) {
  
  let discountedPrice = basePrice * (1 - discountPercentage / 100);
  let finalPriceWithTax = discountedPrice * (1 + taxRate / 100);
  

  let finalPrice = Number(finalPriceWithTax.toFixed(2));
  
  
  let loyaltyPointsEarned = Math.ceil(finalPrice);

  return {
    finalPrice,
    loyaltyPointsEarned
  };
}
console.log("Task 7 (calculateFinalPrice):", calculateFinalPrice(100, 5, 10));


// 8) Paginate Data
function paginateData(items, pageNumber, pageSize = 5) {
  const totalPages = Math.ceil(items.length / pageSize);
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const data = items.slice(startIndex, endIndex);

  return {
    data,
    currentPage: pageNumber,
    totalPages,
    hasNext: pageNumber < totalPages,
    hasPrev: pageNumber > 1
  };
}
const allProducts = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Desk', 'Chair', 'Webcam', 'Headphones'];
console.log("Task 8 (paginateData):", paginateData(allProducts, 2, 3));