import { defineConfig } from 'tailwindcss';

/
 * Tailwind CSS configuration for luxury LRP cosmetics.
 * This configuration uses a luxurious color scheme of orange and white,
 * custom animations, and a focus on high-end design principles suitable for 
 * the cosmetics industry.
 */
export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF6F20', // Custom luxurious orange
        },
        white: {
          DEFAULT: '#FFFFFF', // Pure white for elegance
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
});

/
 * Types and interfaces specific to luxury LRP cosmetics.
 */

// Interface for a cosmetic product
export interface CosmeticProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string; // URL to the product image
  category: string; // Category (e.g., skincare, makeup)
}

// Example of business logic for managing products
export class ProductManager {
  private products: CosmeticProduct[] = [];

  /
   * Adds a new product to the inventory.
   * @param product The product to add.
   */
  addProduct(product: CosmeticProduct): void {
    this.products.push(product);
  }

  /
   * Retrieves all products in the inventory.
   * @returns An array of CosmeticProduct.
   */
  getProducts(): CosmeticProduct[] {
    return this.products;
  }
}