# Counter Animation Directive

A powerful Angular directive that animates numbers from 0 to a target value with smooth transitions and customizable formatting options.

## Features

- 🎯 **Smooth Animation**: Animate from any starting value to target value
- ⚙️ **Customizable Duration**: Control animation speed (default: 2000ms)
- 🎨 **Multiple Easing**: Linear, ease-in, ease-out, ease-in-out
- 💰 **Number Formatting**: Thousand separators, decimal places, prefixes, suffixes
- 🔄 **Reactive**: Automatically re-animates when target value changes
- 📱 **Performance**: Uses requestAnimationFrame for smooth 60fps animation

## Basic Usage

```html
<!-- Simple counter from 0 to 1000 -->
<span appCounterAnimation="1000"></span>

<!-- With custom duration -->
<span appCounterAnimation="5000" [counterOptions]="{ duration: 5000 }"></span>
```

## Advanced Usage

```html
<!-- Currency format -->
<span 
  appCounterAnimation="1299.99" 
  [counterOptions]="{ 
    duration: 3000, 
    prefix: '$', 
    decimalPlaces: 2, 
    formatNumber: true 
  }">
</span>

<!-- Percentage with custom easing -->
<span 
  appCounterAnimation="87.5" 
  [counterOptions]="{ 
    duration: 2000, 
    suffix: '%', 
    decimalPlaces: 1,
    easing: 'ease-out'
  }">
</span>

<!-- Large number with separators -->
<span 
  appCounterAnimation="1234567" 
  [counterOptions]="{ 
    duration: 4000, 
    separator: ',', 
    formatNumber: true 
  }">
</span>
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `duration` | number | 2000 | Animation duration in milliseconds |
| `easing` | string | 'ease-out' | Animation easing function |
| `startValue` | number | 0 | Starting value for animation |
| `decimalPlaces` | number | 0 | Number of decimal places to show |
| `separator` | string | ',' | Thousand separator character |
| `prefix` | string | '' | Text to display before the number |
| `suffix` | string | '' | Text to display after the number |
| `formatNumber` | boolean | true | Whether to format with separators |

## Easing Options

- `'linear'` - Constant speed
- `'ease-in'` - Slow start, fast end
- `'ease-out'` - Fast start, slow end (default)
- `'ease-in-out'` - Slow start and end, fast middle

## Examples

### Statistics Dashboard
```html
<div class="stat-card">
  <h3>Total Users</h3>
  <div class="stat-number" appCounterAnimation="12500" [counterOptions]="{ separator: ',', formatNumber: true }"></div>
</div>
```

### Price Display
```html
<div class="price">
  <span appCounterAnimation="99.99" [counterOptions]="{ prefix: '$', decimalPlaces: 2 }"></span>
</div>
```

### Progress Percentage
```html
<div class="progress">
  <span appCounterAnimation="75" [counterOptions]="{ suffix: '%', easing: 'ease-out' }"></span>
</div>
```

## Performance Notes

- Uses `requestAnimationFrame` for smooth 60fps animation
- Automatically cancels previous animation when target value changes
- Memory efficient with proper cleanup on component destroy
- Works well with large numbers and long durations

## Browser Support

- Modern browsers with ES6+ support
- Angular 15+ (standalone components)
- No external dependencies
