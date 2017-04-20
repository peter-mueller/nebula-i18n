# \<nebula-resources\>

`<nebula-resources>` is a custom element to load resource files for use with localization. It uses the browser [Fetch API](http://caniuse.com/#feat=fetch) to read a **JSON** file containing string resources.

Phrases should be grouped beneath the BCP47 language code. A resource file can contain one or more languages according to your localization design. A common use case is to have a separate resources file for each language the application supports, and load the appropriate language based on browser settings or user preference.

**Sample Resource File**
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

Localization strings can include variables, and support pluralization. <b><i>For additional information on using variables and supporting pluralization in resources, please see the [Polyglot API](http://airbnb.io/polyglot.js/) documentation.</i></b>

## API Reference

### Properties

#### file : String

The name of the JSON file (with or without extension) to retrieve from the specified path.

#### path : String *[default='.']*

The data to validate against the constraints.

#### resources : Object *[read only, notifies]*

An object containing string resources keyed by **BCP47** language.

### Events

#### resources-changed : CustomEvent

Event fired when the value of the `resources` property is changed.

### Mixins

#### [Nebula.ElementMixin](https://www.webcomponents.org/element/arsnebula/nebula-element-mixin)