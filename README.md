[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-green.svg)](https://www.webcomponents.org/element/arsnebula/nebula-validate)
[![Polymer Version](https://img.shields.io/badge/polymer-v2-blue.svg)](https://www.polymer-project.org)
[![Sauce Labs Build Status](https://img.shields.io/badge/saucelabs-passing-red.svg)](https://saucelabs.com/beta/builds/593d747cb815410d9f1de289336de547)
[![Gitter Chat](https://badges.gitter.im/org.png)](https://gitter.im/arsnebula/webcomponents)
[![Become a Patreon](https://img.shields.io/badge/patreon-support_us-orange.svg)](https://www.patreon.com/arsnebula)

# \<nebula-i18n\>

A set of web components to support i18n localization using [Airbnb Polyglot](http://airbnb.io/polyglot.js/). Components are included to match browser and application supported languages, load localized string resources, and integrate reactive string translations in your application.

> Warning: This element utilizes the browser [Fetch API](https://fetch.spec.whatwg.org/) which may not be supported by all browsers. To ensure support by all browsers, consider using the [Fetch Polyfill](https://github.com/github/fetch).

## Installation

```sh
$ bower install arsnebula/nebula-i18n
```

## Getting Started

Import the package elements:

```html
<link rel="import" href="/bower_components/nebula-i18n/nebula-i18n.html"> 
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

*For more information, see the API documentation.*

## Contributing

We welcome and appreciate feedback from the community. Here are a few ways that you can show your appreciation for this package:

* Give us a **Star on GitHub** from either [webcomponents.org](https://www.webcomponents.org/element/arsnebula/nebula-element-mixin) or directly on [GitHub](https://github.com/arsnebula/nebula-element-mixin).

* Submit a feature request, or a defect report on the [Issues List](https://www.webcomponents.org/element/arsnebula/nebula-element-mixin/issues).

* Become a [Patreon](https://www.patreon.com/arsnebula). It takes a lot of time and effort to develop, document, test and support the elements in our [Nebula Essentials](https://www.webcomponents.org/collection/arsnebula/nebula-essentials) collection. Your financial contribution will help ensure that our entire collection continues to grow and improve.

If you are a developer, and are interested in making a code contribution, consider opening an issue first to describe the change, and discuss with the core repository maintainers. Once you are ready, prepare a pull request:

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Change Log

See [CHANGELOG](/CHANGELOG.md)

## License

See [LICENSE](/LICENSE.md)