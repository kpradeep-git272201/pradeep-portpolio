export interface ThemeColors {
  background: string;
  surface: string;
  surfaceCard: string;
  surfaceHover: string;
  primary: string;
  primaryHover: string;
  accent: string;
  accentHover: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  borderFocus: string;
}

export const THEME_CONFIG: {
  dark: ThemeColors;
  light: ThemeColors;
} = {
  dark: {
    background: '#0B1220', // Midnight Navy
    surface: '#0F1A2E',
    surfaceCard: '#111C32', // Card background
    surfaceHover: '#182744',
    primary: '#3B82F6', // Primary Blue
    primaryHover: '#2563EB',
    accent: '#22D3EE', // Cyan Accent
    accentHover: '#06B6D4',
    textPrimary: '#F8FAFC',
    textSecondary: '#CBD5E1',
    textMuted: '#94A3B8',
    border: '#1E2D4A',
    borderFocus: '#3B82F6'
  },
  light: {
    background: '#F8FAFC',
    surface: '#FFFFFF',
    surfaceCard: '#FFFFFF',
    surfaceHover: '#F1F5F9',
    primary: '#2563EB',
    primaryHover: '#1D4ED8',
    accent: '#0891B2',
    accentHover: '#0E7490',
    textPrimary: '#0F172A',
    textSecondary: '#334155',
    textMuted: '#64748B',
    border: '#E2E8F0',
    borderFocus: '#2563EB'
  }
};
