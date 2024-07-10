import { writable, derived } from 'svelte/store'

function createOrderList() {
  const { subscribe, update, set } = writable([])

  function attach (product) {
    update(orders => {
      const index = orders.findIndex(order => order.id === product.id);
      if (index !== -1) {
        orders[index].amount += 1;
      } else {
        orders.push({ ...product, amount: 1 });
      }
      return orders;
    });
  }

  function detach (product) {
    update(orders => {
      const index = orders.findIndex(order => order.id === product.id);
      if (index !== -1) {
        if (orders[index].amount > 1) {
          orders[index].amount -= 1;
        } else {
          orders.splice(index, 1);
        }
      }
      return orders;
    });
  }

  return { subscribe, attach, detach, set }
}
const listOfOrder = createOrderList()
const count =  derived(listOfOrder, $listOfOrder => 
  $listOfOrder.reduce((total, item) => total + item.price * item.amount, 0)
)
const jumlahItem = derived(listOfOrder, $listOfOrder => {
  const result = {};
  $listOfOrder.forEach(item => {
    result[item.id] = item.amount;
  });
  return result;
});

const money = writable()
const table = writable()
const orderId = writable()
const response = writable()

export { listOfOrder, count, jumlahItem, money, table, orderId, response }