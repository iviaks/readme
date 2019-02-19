# How to install?

```python
import urllib.request,os,hashlib; h = 'df21e130d211cfc94d9b0905775a7c0f' + '1e3d39e33b79698005270310898eea76'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

## Applications

```json
{
	"bootstrapped": true,
	"in_process_packages":
	[
	],
	"installed_packages":
	[
		"A File Icon",
		"AutoFileName",
		"Babel",
		"Babel Snippets",
		"BracketHighlighter",
		"cdnjs",
		"Color Highlighter",
		"CSS3",
		"Djaneiro",
		"Django-Rest-Snippets",
		"Emmet",
		"ESLint",
		"GitGutter",
		"HTML5",
		"Inc-Dec-Value",
		"isort",
		"JavaScript Snippets",
		"jQuery",
		"JsPrettier",
		"Package Control",
		"Random Everything",
		"Sass",
		"SASS Build",
		"SideBarEnhancements",
		"TabsExtra",
		"Text Pastry"
	]
}
```

### Additional apps

```bash
sudo npm install -g prettier
sudo apt-get install ruby ruby-dev -y
sudo gem install sass
```

### Prettier config
```json
{
    "auto_format_on_save": true,
    "prettier_options": {
        "printWidth": 80,
        "singleQuote": true,
        "trailingComma": "es5"
    }
}
```
