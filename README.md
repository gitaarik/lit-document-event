# LitDocumentEvent

### Simple global event handling

Easily add listeners to the `document` object, and have them removed when the
component disconnects.


## Installation

```
npm install lit-document-event
```


## Usage

```javascript
<document-event eventname="keydown" @event=${this.handleKeyDown}></document-event>
```

It doesn't matter where in your template you put this component. It doesn't
have a UI, it just adds a listener for the desired event and emits an event on
the component, so you can easily bind to it with lit-html (with the
`@event=${this.myEventHandler}` syntax). When the component is disconnected,
the listener will be removed.


## Docs

For more info, [check the docs](https://gitaarik.github.io/lit-document-event/build/).


## Also see

- [LitStyle](https://github.com/gitaarik/lit-style) - Shared component styles for LitElement 
- [LitState](https://github.com/gitaarik/lit-state) - Simple shared app state management for LitElement
