export interface StatValue {
  value: string | number;
  animated?: boolean;
  animationOptions?: {
    duration?: number;
    easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
    decimalPlaces?: number;
    separator?: string;
    prefix?: string;
    suffix?: string;
    formatNumber?: boolean;
  };
}

export interface CardConfig {
  title: string;
  icon?: string;
  background?: string;
  stats?: { label: string; value: StatValue; }[];
  links?: { text: string; url: string; }[];
  footerButton?: { text: string; action: () => void };
  enableAnimation?: boolean; // Global animation toggle for the card
}
