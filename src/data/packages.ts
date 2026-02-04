export interface Package {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    photos: number;
    outfits: number;
    deliveryTime: string;
    features: string[];
    popular: boolean;
    color: string;
}

export const packagesByType: Record<string, Package[]> = {
    profile: [
        {
            id: 'basic-profile',
            name: 'Basic Profile',
            price: 30,
            originalPrice: 50,
            photos: 2,
            outfits: 1,
            deliveryTime: '1-3 hours',
            features: ['Clean professional shots', 'Basic editing', '1 outfit', 'Digital delivery'],
            popular: false,
            color: 'from-gray-400 to-gray-600'
        },
        {
            id: 'profile-headshots',
            name: 'Profile Headshots',
            price: 30,
            photos: 2,
            outfits: 1,
            deliveryTime: "1-3 hours",
            features: ["Professional quality", "LinkedIn ready", "2 edited photos"],
            popular: false,
            color: 'from-gray-400 to-gray-600'
        },
        {
            id: 'professional-headshots',
            name: 'Professional Headshots',
            price: 50,
            originalPrice: 80,
            photos: 3,
            outfits: 2,
            deliveryTime: '1-3 hours',
            features: ['3 professional poses', '2 outfits', 'Enhanced styling', 'Digital delivery'],
            popular: true,
            color: 'from-[#D4AF37] to-[#B91C1C]'
        },
        {
            id: 'premium-portfolio',
            name: 'Premium Portfolio',
            price: 70,
            originalPrice: 120,
            photos: 5,
            outfits: 3,
            deliveryTime: '1-2 hours',
            features: ['5 versatile shots', '3 outfits', 'Premium backgrounds', 'Priority editing'],
            popular: false,
            color: 'from-purple-500 to-pink-500'
        },
        // Mapped from Marketing Page
        {
            id: 'profile-headshots',
            name: 'Profile Headshots',
            price: 30,
            photos: 2,
            outfits: 1,
            deliveryTime: "1-3 hours",
            features: ["Professional quality", "LinkedIn ready", "2 edited photos"],
            popular: false,
            color: 'from-gray-400 to-gray-600'
        }
    ],
    social: [
        {
            id: 'social-essential',
            name: 'Social Essential',
            price: 40,
            originalPrice: 60,
            photos: 5,
            outfits: 2,
            deliveryTime: '1-3 hours',
            features: ['5 social-ready photos', '2 trendy outfits', 'Platform optimization', 'Digital delivery'],
            popular: true,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 'social-pro',
            name: 'Social Pro',
            price: 80,
            originalPrice: 120,
            photos: 10,
            outfits: 3,
            deliveryTime: '1-2 hours',
            features: ['10 curated photos', '3 outfits', 'Multiple styles', 'Priority delivery'],
            popular: false,
            color: 'from-[#D4AF37] to-[#B91C1C]'
        },
        // Mapped from Marketing Page
        {
            id: "solo-standard",
            name: "Solo Standard",
            price: 50,
            photos: 4,
            outfits: 1,
            deliveryTime: "1-3 hours",
            features: ["4 professional photos", "1 outfit", "Basic editing"],
            popular: true,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: "birthday-basic",
            name: "Birthday Basic",
            price: 40,
            photos: 4,
            outfits: 1,
            deliveryTime: "1-3 hours",
            features: ["Birthday theme", "4 photos", "1 outfit"],
            popular: false,
            color: 'from-pink-500 to-rose-500'
        },
        {
            id: "graduation-shots",
            name: "Graduation Shots",
            price: 70,
            photos: 3,
            outfits: 1,
            deliveryTime: "1-3 hours",
            features: ["Graduation theme", "Gown enhancement", "3 photos"],
            popular: true,
            color: 'from-indigo-600 to-blue-600'
        },
        {
            id: "solo-medium",
            name: "Solo Medium",
            price: 90,
            photos: 8,
            outfits: 2,
            deliveryTime: "1-3 hours",
            features: ["8 photos", "2 outfits", "Premium editing"],
            popular: false,
            color: 'from-purple-500 to-indigo-500'
        },

    ],
    // Special Occasions maps to social broadly or its own category if needed, 
    // but based on current Step2Package logic it might fallback to default if not matched.
    // Let's add 'special' and 'group' if they are used categories, or map them to existing keys.
    group: [
        {
            id: 'group-standard',
            name: 'Group Standard',
            price: 80,
            originalPrice: 120,
            photos: 4,
            outfits: 2,
            deliveryTime: '1-3 hours',
            features: ['Group shots', '2 outfits', '4 photos', 'Directed posing'],
            popular: false,
            color: 'from-green-500 to-teal-600'
        },
        {
            id: 'family-package',
            name: 'Family Package',
            price: 150,
            originalPrice: 200,
            photos: 8,
            outfits: 3,
            deliveryTime: '2-4 hours',
            features: ['Family shots', '3 outfits', '8 photos', 'Kids friendly'],
            popular: false,
            color: 'from-orange-500 to-red-500'
        }
    ],
    // Default fallback
    default: [
        {
            id: 'standard',
            name: 'Standard Package',
            price: 50,
            originalPrice: 80,
            photos: 5,
            outfits: 2,
            deliveryTime: '1-3 hours',
            features: ['Professional photos', '2 outfits', 'Standard editing', 'Digital delivery'],
            popular: true,
            color: 'from-[#D4AF37] to-[#B91C1C]'
        }
    ],
    // Add direct mapping for specific IDs if they don't fit categories perfectly, 
    // or ensure the categories used in PackageShowcase map to these keys.
};

// Helper to find package by ID across all categories
export const findPackageById = (id: string): Package | undefined => {
    for (const category in packagesByType) {
        const found = packagesByType[category].find(p => p.id === id);
        if (found) return found;
    }
    return undefined;
};
