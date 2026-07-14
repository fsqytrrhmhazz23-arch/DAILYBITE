export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'indonesian' | 'western' | 'asian' | 'salad-bowl';
  calories: number;
  protein: number; // in grams
  carbs: number; // in grams
  fat: number; // in grams
  price: number;
  image: string;
  tags: string[];
  rating: number;
}

export interface MealPlan {
  id: string;
  name: string;
  description: string;
  pricePerDay: number;
  pricePerWeek: number;
  features: string[];
  idealFor: string;
  image: string;
  colorTheme: string; // Tailwind color class
  accentBg: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NutritionResult {
  bmr: number;
  tdee: number;
  targetCalories: number;
  proteinNeeded: number; // in g
  carbsNeeded: number; // in g
  fatNeeded: number; // in g
  recommendedPlanId: string;
}
