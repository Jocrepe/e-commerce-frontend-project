import { defineStore } from 'pinia'

export const useAdminProductStore = defineStore('admin-product', {
    state: () => ({
        list: [],
        loaded: false
    }),
    actions: {
        loadProduct() {
            const products = localStorage.getItem('admin-product-data')
            if (products) {
                this.list = JSON.parse(products)
                this.loaded = true
            }
        },
        getProduct(index) {
            if (this.loaded === false) {
                this.loadProduct()
            }
            return this.list[index]
        },
        addProduct(productData) {
            productData.remainQuantity = productData.quantity
            productData.updateAt = (new Date()).toISOString()
            this.list.push(productData)
            localStorage.setItem('admin-product-data', JSON.stringify(this.list))
        },
        updateProduct(index, productData) {
            this.list[index].name = productData.name
            this.list[index].image = productData.image
            this.list[index].price = productData.price
            this.list[index].quantity = productData.quantity
            this.list[index].remainQuantity = productData.quantity
            this.list[index].status = productData.status
            productData.updateAt = (new Date()).toISOString()
            localStorage.setItem('admin-product-data', JSON.stringify(this.list))
        },
        removeProduct(index) {
            this.list.splice(index, 1)
            localStorage.setItem('admin-product-data', JSON.stringify(this.list))
        }
    }
})
