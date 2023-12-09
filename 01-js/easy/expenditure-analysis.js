/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let category = new Set(transactions.map((elem) => elem.category))
  let ans = [...category].map((category) => ({
    category,
    totalSpent: 0,
  }))
  transactions.forEach((element) =>
    ans.forEach((cat) =>
      cat.category === element.category
        ? (cat.totalSpent += element.price)
        : null
    )
  )
  return ans
}

module.exports = calculateTotalSpentByCategory
