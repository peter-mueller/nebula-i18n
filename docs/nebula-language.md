# \<nebula-language\>

`<nebula-language>` is a custom element that compares the languages supported by the browser, to the languages supported by the application, and matches the preferred language.

When localizing your application, you will prepare translations for a specific list of languages. The `supported` property needs to be set by the application with the set of language codes that the application supports.

## Usage

```html
<nebula-language
  supported='["en", "en-CA", "fr", "fr-CA"]'
  lang="{{lang}}">
</nebula-language>
```

The supported languages will be matched against the languages supported by the browser, and the `lang` property will be set with the first preferred match. If the browser does not support [Internationalization](http://caniuse.com/#feat=internationalization), or no matching language is found, the first supported language will be used as the default.

The recommended use case is to have a single instance of `<nebula-language>` within the top-level application element, and then pass the ``lang`` value down the component hierarchy using property binding.

## API Reference

### Properties

#### lang : string *read only, notifies*

The preferred language supported by the application and the browser.

#### supported : Array

The set of languages supported by the application.

### Events

#### lang-changed : CustomEvent

Event fired when the `lang` property is changed.

#### Mixins

#### [Nebula.ElementMixin](https://www.webcomponents.org/element/arsnebula/nebula-element-mixin)