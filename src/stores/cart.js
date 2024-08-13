import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        receipt: {}
    }),

    getters: {
        totalPrice(state) {
            return this.items.reduce((acc, item) => acc + (item.quantity * item.price), 0)
        },

        totalQuantity(state) {
            return this.items.reduce((acc, item) => acc + item.quantity, 0)
        }
    },

    actions: {
        addToCart(productData) {
            const itemIndex = this.items.findIndex(item => {
                return item.name === productData.name
            })

            if (itemIndex < 0) {
                this.items.push(productData)
                productData.quantity = 1
            } else {
                this.updateQuantity(itemIndex, this.items[itemIndex].quantity + 1)
            }
            localStorage.setItem('cart-data', JSON.stringify(this.items))
        },

        updateQuantity(index, quantity) {
            this.items[index].quantity = quantity
            localStorage.setItem('cart-data', JSON.stringify(this.items))
        },

        removeItemInCart(index) {
            this.items.splice(index, 1)
            localStorage.setItem('cart-data', JSON.stringify(this.items))
        },

        loadCart() {
            const previousCart = localStorage.getItem('cart-data')

            if (previousCart) {
                this.items = JSON.parse(previousCart)
            }
        },

        checkout(userFormData) {
            const orderData = {
                ...userFormData,
                totalPrice: this.summaryPrice,
                paymentMethod: 'Credit Card',
                createdDate: (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString(),
                orderNumber: `AA${Math.floor(Math.random() * 90000) + 1000}`
            }

            localStorage.setItem('order-data', JSON.stringify(orderData))
        },

        loadCheckout() {
            const checkoutData = localStorage.getItem('order-data')

            if (checkoutData) {
                this.receipt = JSON.parse(checkoutData)
            }
        }
    }
})