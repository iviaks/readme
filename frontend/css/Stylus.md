# Stylus code
```css
body
    $green = #0F0
    $red = #F00
    backgound-color: $green
    a
        color: darken($green, 20%)
        &:hover
            color: $red
```

# CSS code
```css
body { backgound-color: #0f0; }
body a { color: #0c0; }
body a:hover { color: #f00; }
```
