# jQuery Lazy loading

## How to use?

```javascript
jQuery('.lazyImage[data-lazy-src]').lazyImageLoading()
```

### Using with background image
```html
<div
    class="lazyImage"
    data-lazy-type="backgroundImage"
    data-lazy-src="<path_to_image>"
    data-lazy-error="<path_to_error_image>">
</div>
```

### Using with `<img>` tag
```html
<img
    class="lazyImage"
    data-lazy-type="src"
    data-lazy-src="<path_to_image>"
    data-lazy-error="<path_to_error_image>"
/>
```
