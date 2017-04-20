# Nebula.PolyglotBehavior

`Nebula.PolyglotBehavior` extends an element to support localization using the [Airbnb Polyglot](http://airbnb.io/polyglot.js/) library.

```html
  <dom-module id="my-element">
    <template>
      <div>[[$t('greeting')]]</div>
    </template>
    <script>
    class MyElement extends Nebula.PolyglotBehavior(Polymer.Element) {
      static get is() { return 'my-element' }
      
      static get properties() {
        return {
          lang: {
            value: 'en'
          },
          resources: {
            value: function() {
              return {
                en: {
                  greeting: 'Hello'
                }
              }
            }
          }
        }
      }
    }
  </script>
</dom-module>
```

For re-usable elements, the recommended use case is to provide values for the `lang` and `resources` properties in a default language, and allow parent elements to pass down values for alternate languages and resource translations.

For application elements, an alternative is to initialize the language and resources in the top-level application element, and pass the `lang` and `resources` down the component hierarchy through property bindings.

<b><i>For additional information on using variables and supporting pluralization in resources, please see the [Polyglot API](http://airbnb.io/polyglot.js/) documentation.</i></b>

## API Reference

### Properties

#### lang : string *reflects to attribute, notifies*

The language code (BCP47) of the element.

#### resources : Object *notifies*

An object containing string resources keyed by **BCP47** language.

#### $t(key) : Function

Gets a localized string resource for the specified key.

### Events

#### lang-changed : CustomEvent

Event fired when the `lang` property is changed.

#### resources-changed : CustomEvent

Event fired when the `resources` property is changed.

#### Mixins

#### [Nebula.ElementMixin](https://www.webcomponents.org/element/arsnebula/nebula-element-mixin)