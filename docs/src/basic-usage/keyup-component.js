import { customElement, LitElement, property, html, css } from 'lit-element';
import 'lit-docs';
import '@app/document-event.js';


@customElement('keyup-component')
class KeyupComponent extends LitElement {

    @property() lastKeyPressed = null;

    render() {

        return html`
            <showcase-box>
                <h3>Last key pressed: ${this.lastKeyPressed}</h3>
                <document-event eventname="keydown" @event=${this.handleKeyDown}>
                </document-event>
            </showcase-box>
        `;

    }

    handleKeyDown(event) {
        this.lastKeyPressed = event.detail.key;
    }

    static get styles() {

        return css`

            h3, h4 {
                margin: 0;
                padding: 0;
            }


        `;

    }

}
