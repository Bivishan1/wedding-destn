export interface HeartProps {
    initialState?: boolean[]; // Optional array of initial states for the hearts
    onClick?: (index: number, state: boolean) => void; // Callback when a heart is toggled
    className?: string; // Optional className for customization or styles
  }