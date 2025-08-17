export const BRAND_NAME = "luxury LRP cosmetics";

export const COLORS = {
    PRIMARY: "#FFA500", // Orange
    SECONDARY: "#FFFFFF", // White
};

export const CONFIG = {
    SITE_NAME: "luxury LRP cosmetics",
    TAGLINE: "Elevate Your Beauty with Elegance",
    DESCRIPTION: "Discover the exquisite range of luxury LRP cosmetics, where sophistication meets beauty.",
    FOUNDER: "Jane Doe",
    YEAR_ESTABLISHED: 2023,
    SOCIAL_MEDIA: {
        INSTAGRAM: "https://instagram.com/luxurylrpcosmetics",
        FACEBOOK: "https://facebook.com/luxurylrpcosmetics",
        TWITTER: "https://twitter.com/luxurylrpcosmetics",
    },
    CONTACT: {
        EMAIL: "info@luxurylrpcosmetics.com",
        PHONE: "+1-800-555-0199",
    },
};

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    isFeatured: boolean;
}

export interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
}

export interface Order {
    id: string;
    customerId: string;
    products: Product[];
    totalAmount: number;
    orderDate: Date;
    status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
}

export const LUXURY_MESSAGE = "Indulge in luxury with our curated selection of high-end cosmetics that redefine beauty standards.";