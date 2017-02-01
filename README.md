[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://beta.webcomponents.org/element/arsnebula/nebula-i18n)
# \<nebula-i18n\>

A set of web components to support i18n localization using [Airbnb Polyglot](http://airbnb.io/polyglot.js/). Components are included to match browser and application supported languages, load localized string resources, and integrate reactive string translations in your application.

> Warning: This element utilizes the browser [Fetch API](https://fetch.spec.whatwg.org/) which may not be supported by all browsers. To ensure support by all browsers, consider using the [Fetch Polyfill](https://github.com/github/fetch).

> Warning: This element utilizes features of [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/) which may not be supported by all browsers. To ensure support by all browsers, consider using the [Core-js Polyfill](https://github.com/zloirock/core-js).

## Installation

```
$ bower install arsnebula/nebula-i18n
```

## Usage

Import the package elements:

```
<link rel="import" href="bower_components/nebula-i18n/nebula-i18n.html"> 
```

Add and configure a `<nebula-language>` element to compare the browsers supported languages to application supported languages, and select a preferred language. *This will commonly be done once in your top-level application element.*

```html
<nebula-language
  supported='["en-US", "en-CA", "en", "fr-CA", "fr"]'
  lang="{{lang}}">
</nebula-language>
```

Prepare your localized string resource files. Resources should be grouped by a BCP47 language code in **JSON** format. Each file can contain one or more language resources, although it is common to have a seperate file for each language. Localization strings can include variables, and support pluralization. <b><i>For additional information on using variables and supporting pluralization in resources, please see the [Polyglot API](http://airbnb.io/polyglot.js/) documentation.</i></b>

```json
{
  "en": {
    "greeting": "Hello"
  },
  "fr": {
    "greeting": "Bonjour"
  },
  "de": {
    "greeting": "Hallo"
  }
}
```

Use the `<nebula-resources>` element to easily load resource files containing string translations. It is recommended you create a folder in your web root folder to contain your resource files. It is common to separate resources by language, and name the file with the language code. By binding the `file` property to the application language, it will load the appropriate application resources whenever the browser language is updated.

```html
<nebula-resources
  path="../resources"
  file="[[lang]]">
</nebula-language>
```

Add the `Nebula.PolyglotBehavior` to your elements to support localization. This will automatically add `lang` and `resources` properties to your element. 

```js
Polymer({
  is: 'my-element',
  behaviors: [
    Nebula.PolyglotBehavior
  ]
})
```

Update your element template to localize strings using the special `$t` computed function property, passing in a **key**, and additional options for variables or pluralization if necessary.

```html
<div>[[$t('greeting')]]</div>
```

*For more information on element properties and methods see the element API documentation.*

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Change Log

See [CHANGELOG](/CHANGELOG.md)

## License

See [LICENSE](/LICENSE.md)