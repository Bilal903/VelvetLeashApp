# Tailwind CSS Conversion Guide

This document outlines the conversion of the VelvetLeashApp from traditional React Native StyleSheet to Tailwind CSS using NativeWind.

## What Was Changed

### 1. Dependencies Added
- `nativewind` - Tailwind CSS for React Native
- `tailwindcss` - Core Tailwind CSS library
- `react-native-reanimated` - Required for NativeWind
- `react-native-safe-area-context` - Safe area handling

### 2. Configuration Files Added/Modified

#### New Files:
- `tailwind.config.js` - Tailwind configuration with custom colors and spacing
- `global.css` - Tailwind directives
- `babel.config.js` - Babel configuration with NativeWind plugin
- `nativewind-env.d.ts` - TypeScript declarations for NativeWind

#### Modified Files:
- `metro.config.js` - Added NativeWind metro configuration
- `App.tsx` - Imported global.css and removed StyleSheet import

### 3. Custom Theme Configuration

The original theme colors are now defined in `tailwind.config.js`:

```javascript
colors: {
  primary: '#8BC34A',    // Green from original design
  secondary: '#E0E0E0',  // Light grey
  text: '#333333',       // Dark text
  lightText: '#FFFFFF',  // White text
  background: '#F5F5F5', // Light background
}
```

Custom spacing values were added for specific design requirements:
- `15` (60px) - For top positioning
- `22` (88px) - For medium circle sizes
- `25` (100px) - For margin top values
- `96` (384px) - For large margin bottom

### 4. Screen Conversions

All screens were converted from StyleSheet to Tailwind classes:

#### Before (StyleSheet):
```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  }
});

<View style={styles.container}>
  <Text style={styles.title}>Title</Text>
</View>
```

#### After (Tailwind):
```javascript
<View className="flex-1 bg-white items-center">
  <Text className="text-2xl font-bold text-text">Title</Text>
</View>
```

### 5. Converted Screens

- ✅ `SignInScreen.tsx` - Main landing screen with logo and buttons
- ✅ `SkipScreen01.tsx` - Onboarding screen 1
- ✅ `SkipScreen02.tsx` - Onboarding screen 2  
- ✅ `SkipScreen03.tsx` - Onboarding screen 3
- ✅ `SkipScreen04.tsx` - Onboarding screen 4
- ✅ `LocationScreen.tsx` - Location input screen
- ✅ `SelectServiceScreen.tsx` - Service selection screen

### 6. Theme File Updates

The `src/theme/theme.js` file was updated to:
- Keep legacy colors for reference
- Add Tailwind class mappings
- Provide migration guidance

## Benefits of the Conversion

1. **Reduced Bundle Size**: No more StyleSheet objects in JavaScript bundle
2. **Better Performance**: Styles are processed at build time
3. **Consistency**: Standardized spacing, colors, and sizing
4. **Developer Experience**: Faster development with utility classes
5. **Maintainability**: Easier to maintain and update styles
6. **Design System**: Built-in design system with Tailwind's utilities

## Usage Examples

### Common Patterns

#### Flexbox Layouts:
```javascript
// Old
style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}

// New
className="flex-1 flex-row justify-center items-center"
```

#### Colors:
```javascript
// Old
style={{ backgroundColor: colors.primary, color: colors.lightText }}

// New
className="bg-primary text-lightText"
```

#### Spacing:
```javascript
// Old
style={{ marginTop: 20, paddingHorizontal: 15, marginBottom: 10 }}

// New
className="mt-5 px-4 mb-2.5"
```

#### Positioning:
```javascript
// Old
style={{ position: 'absolute', top: 60, right: 20 }}

// New
className="absolute top-15 right-5"
```

## Running the App

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Metro bundler:
   ```bash
   npm start
   ```

3. Run on your preferred platform:
   ```bash
   npm run android
   # or
   npm run ios
   ```

## Notes

- Some complex styles still use the `style` prop where Tailwind classes aren't sufficient (e.g., dynamic dimensions, complex shadows)
- The conversion maintains the exact same visual appearance as the original
- All functionality remains unchanged
- TypeScript support is maintained with proper type declarations

## Future Improvements

- Consider creating custom Tailwind components for repeated patterns
- Add responsive design utilities if needed
- Implement dark mode support using Tailwind's dark mode features
- Add animation utilities using Tailwind's animation classes