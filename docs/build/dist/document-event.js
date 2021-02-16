import { LitElement, html } from '../web_modules/lit-element.js';

class DocumentEvent extends LitElement {
  static get properties() {
    return {
      eventname: {
        type: String
      }
    };
  }

  render() {
    /*
     * NOTE: The <slot> element needs a container (the `slot-container`), other
     * than a custom element. Otherwise it won't render in webcomponent
     * polyfilled browsers (like IE).
     */
    return html`
      <div id="slot-container">
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addDocumentEventListener();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeDocumentEventListener();
  }

  addDocumentEventListener() {
    this.eventListener = event => {
      this.dispatchEvent(new CustomEvent('event', {
        detail: event
      }));
    }; // Use `setTimeout` to add the listener at the next event cycle. This
    // prevents the event from directly firing when the component was created
    // by an event with the same name.


    setTimeout(() => {
      document.addEventListener(this.eventname, this.eventListener);
    });
  }

  removeDocumentEventListener() {
    document.removeEventListener(this.eventname, this.eventListener);
  }

}

customElements.define('document-event', DocumentEvent);