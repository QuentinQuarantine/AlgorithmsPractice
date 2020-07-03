// Share the bill

/*
Context: 
You are responsible generating the Bill for a restaurant service.
Each table generates a list of ordered items.

The main feature of this service is share the bill by the number of clients on each table.
But there is a catch, not all itens should be shared.

Example:
Given a table with 4 clients (C=4), the following items were ordered (with it's respective values):

drinks: 150
appetizers: 100
main: 400
dessert: 300
booking: 40

The items "drinks" and "booking" will not be shared among the clients, so:

The total value of the bill is 990
The total value of shared items is 800 (excluding drinks and booking), so each client should pay 200.
At last, the total value of not shared items is 190 (drinks and booking)

Your task:

Based on: 
- ordered items list
- number of clients
- list of not shared items

You should provide:
- Total value of the bill
- The value each client owns based on the shared items
- The total value of not shared items

Input format:
- The first line is the number of clients (C)
- The second line is the total number of ordered items (N)
- The following N lines are, an item and it's value separated by space.
- The last line contains the list of not shared items, separated by space.

Output format:
- The first line should contain the total value of the bill
- The second line should contain the value each client owns based on the shared items
- The third line should contain the total value of not shared items

Example:
Given the input:

4
5
drinks 150
appetizers 100
main 400
dessert 300
booking 40
drinks booking

Expected output:

990
200
190
*/

const processTable = ({ clients, orders, notSharedCats }) => {
  let total = 0
  let shared = 0
  let notShared = 0
  for (let { name, value } of orders) {
    if (notSharedCats.has(name)) {
      notShared += value
    } else {
      shared += value
    }
    total += value
  }
  return `${total}\n${shared / clients}\n${notShared}`
}

const groupTableInformation = lines => {
  const clients = +lines[0]
  const numberOrders = +lines[1]
  const orders = lines.slice(2, 2 + numberOrders).map(order => {
    const [name, value] = order.split(' ')
    return { name, value: +value }
  })
  const notSharedCats = new Set(lines[2 + numberOrders].split(' '))
  return { clients, notSharedCats, orders }
}

export default input => processTable(groupTableInformation(input.trim().split('\n')))

export const testParams = [
  [
    [`4\n5\ndrinks 150\nappetizers 100\nmain 400\ndessert 300\nbooking 40\ndrinks booking`],
    `990\n200\n190`,
    'test1',
  ],
]
