import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    list: [
      {
      name: 'item1',
      imageUrl: 'https://fastly.picsum.photos/id/913/200/200.jpg?hmac=MQWqYyJuxoagkUNdhY5lwuKw7QwcqzMEm4otshKpUWQ',
      quantity: 10,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, inventore?',
      status: 'open',
      price: 100,
      },
      {
      name: 'item2',
      imageUrl: 'https://fastly.picsum.photos/id/1008/200/200.jpg?hmac=I0T_cpYR-61pUlB0jVB4I5B7tL0fvzN5MgslAOirM50',
      quantity: 10,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, inventore?',
      status: 'open',
      price: 100,
      },
      {
      name: 'item3',
      imageUrl: 'https://fastly.picsum.photos/id/586/200/200.jpg?hmac=qCQKBciYy8H3AxcVxnTZLYwXw02r33F5_3E4UmlB8H4',
      quantity: 10,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, inventore?',
      status: 'open',
      price: 100,
      },
      {
      name: 'item4',
      imageUrl: 'https://fastly.picsum.photos/id/184/200/200.jpg?hmac=MflhZikSXVt3rvwnx8_nAvoHdLOwJFA0B2_Mk8vQvms',
      quantity: 10,
      about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, inventore?',
      status: 'open',
      price: 100,
      }
    ]
  }),
  actions: {
    filterProduct (searchText) {
      return this.list.filter(product => {
        return product.name.includes(searchText)
      })
    }
  }

})
