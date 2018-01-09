# How to install?

```python
import urllib.request,os,hashlib; h = 'df21e130d211cfc94d9b0905775a7c0f' + '1e3d39e33b79698005270310898eea76'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

## Applications

```json
{
    "bootstrapped": true,
    "in_process_packages": [],
    "installed_packages": [
        "A File Icon",
        "Anaconda",
        "AutoFileName",
        "Babel",
        "Babel Snippets",
        "Boxy Theme",
        "BracketHighlighter",
        "cdnjs",
        "Chain of Command",
        "Color Highlighter",
        "ColorPicker",
        "CSS3",
        "Diffy",
        "Djaneiro",
        "Django-Rest-Snippets",
        "DocBlockr",
        "Emmet",
        "Emmet Css Snippets",
        "EmmetOneLine",
        "FakeImg Image Placeholder Snippet",
        "Floobits",
        "Gist",
        "Git",
        "GitGutter",
        "HTML-CSS-JS Prettify",
        "HTML5",
        "Inc-Dec-Value",
        "Indent Respectful Sort",
        "isort",
        "JavaScript Snippets",
        "jQuery",
        "JsPrettier",
        "Minify",
        "nginx",
        "Package Control",
        "Random Everything",
        "RegReplace",
        "Sass",
        "SASS Build",
        "SassBeautify",
        "SideBarEnhancements",
        "Stylus",
        "TabsExtra",
        "Text Pastry",
        "Theme - Brogrammer"
    ]
}
```

### Additional apps

```bash
sudo npm install -g clean-css uglifycss js-beautify html-minifier uglify-js minjson svgo stylus prettier
sudo apt-get install ruby ruby-dev -y
sudo gem install sass
```
