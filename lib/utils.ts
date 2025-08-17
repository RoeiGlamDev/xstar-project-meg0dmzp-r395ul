import { format } from 'date-fns';

/
 * Utility functions for luxury LRP cosmetics application
 * @module utils
 */

/
 * Interface representing a product in the luxury LRP cosmetics line
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

/
 * Interface representing the details of a customer order
 */
export interface Order {
    orderId: string;
    customerName: string;
    products: Product[];
    totalAmount: number;
    orderDate: Date;
}

/
 * Utility function to generate a unique ID for a product
 * @returns {string} A unique identifier for a product
 */
export function generateProductId(): string {
    return prod-${Math.random().toString(36).substr(2, 9)};
}

/
 * Utility function to format a price for display
 * @param {number} price - The price to format
 * @returns {string} The formatted price as a string
 */
export function formatPrice(price: number): string {
    return $${price.toFixed(2)};
}

/
 * Utility function to format the order date
 * @param {Date} date - The date to format
 * @returns {string} The formatted date as a string
 */
export function formatOrderDate(date: Date): string {
    return format(date, 'MMMM dd, yyyy');
}

/
 * Utility function to create a formatted product description
 * @param {Product} product - The product to format
 * @returns {string} The formatted product description
 */
export function formatProductDescription(product: Product): string {
    return ${product.name} - ${product.description}. Price: ${formatPrice(product.price)};
}

/
 * Function to calculate the total amount of an order
 * @param {Order} order - The order to calculate the total for
 * @returns {number} The total amount for the order
 */
export function calculateOrderTotal(order: Order): number {
    return order.products.reduce((total, product) => total + product.price, 0);
}

/
 * Function to create a new order
 * @param {string} customerName - The name of the customer placing the order
 * @param {Product[]} products - The products included in the order
 * @returns {Order} The newly created order
 */
export function createOrder(customerName: string, products: Product[]): Order {
    const orderId = order-${Math.random().toString(36).substr(2, 9)};
    const orderDate = new Date();
    const totalAmount = calculateOrderTotal({ orderId, customerName, products, totalAmount: 0, orderDate });
    
    return {
        orderId,
        customerName,
        products,
        totalAmount,
        orderDate,
    };
}