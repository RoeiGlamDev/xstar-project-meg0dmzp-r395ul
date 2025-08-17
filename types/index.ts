import { Product, User, Order } from './models';

/
 * Represents the luxury LRP cosmetics brand.
 * @constant {string} brandName - The official brand name.
 */
export const brandName: string = "luxury LRP cosmetics";

/
 * Interface for a cosmetic product.
 * @interface Product
 * @property {string} id - Unique identifier for the product.
 * @property {string} name - Name of the product.
 * @property {string} description - Description of the product.
 * @property {number} price - Price of the product.
 * @property {string} category - Category of the cosmetic product (e.g., skincare, makeup).
 * @property {string} color - The primary color associated with the product.
 * @property {boolean} isLuxury - Indicates if the product is a luxury item.
 */
export interface CosmeticProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    color: string;
    isLuxury: boolean;
}

/
 * Interface for a user profile.
 * @interface User
 * @property {string} id - Unique identifier for the user.
 * @property {string} name - Full name of the user.
 * @property {string} email - Email address of the user.
 * @property {string} phone - Contact number of the user.
 * @property {string} address - Shipping address for the user.
 */
export interface UserProfile {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
}

/
 * Interface for an order placed by a user.
 * @interface Order
 * @property {string} orderId - Unique identifier for the order.
 * @property {User} user - The user who placed the order.
 * @property {CosmeticProduct[]} products - List of products in the order.
 * @property {number} totalAmount - Total amount for the order.
 * @property {Date} orderDate - Date when the order was placed.
 */
export interface UserOrder {
    orderId: string;
    user: UserProfile;
    products: CosmeticProduct[];
    totalAmount: number;
    orderDate: Date;
}

/
 * Function to create a new cosmetic product.
 * @param {string} id - Unique identifier for the product.
 * @param {string} name - Name of the product.
 * @param {string} description - Description of the product.
 * @param {number} price - Price of the product.
 * @param {string} category - Category of the cosmetic product.
 * @param {string} color - The primary color associated with the product.
 * @returns {CosmeticProduct} - The newly created cosmetic product.
 */
export function createCosmeticProduct(
    id: string,
    name: string,
    description: string,
    price: number,
    category: string,
    color: string
): CosmeticProduct {
    return {
        id,
        name,
        description,
        price,
        category,
        color,
        isLuxury: true,
    };
}

/
 * Function to create a new user profile.
 * @param {string} id - Unique identifier for the user.
 * @param {string} name - Full name of the user.
 * @param {string} email - Email address of the user.
 * @param {string} phone - Contact number of the user.
 * @param {string} address - Shipping address for the user.
 * @returns {UserProfile} - The newly created user profile.
 */
export function createUserProfile(
    id: string,
    name: string,
    email: string,
    phone: string,
    address: string
): UserProfile {
    return {
        id,
        name,
        email,
        phone,
        address,
    };
}

/
 * Function to create a new order.
 * @param {string} orderId - Unique identifier for the order.
 * @param {UserProfile} user - The user who placed the order.
 * @param {CosmeticProduct[]} products - List of products in the order.
 * @param {number} totalAmount - Total amount for the order.
 * @returns {UserOrder} - The newly created order.
 */
export function createOrder(
    orderId: string,
    user: UserProfile,
    products: CosmeticProduct[],
    totalAmount: number
): UserOrder {
    return {
        orderId,
        user,
        products,
        totalAmount,
        orderDate: new Date(),
    };
}