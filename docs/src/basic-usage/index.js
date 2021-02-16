import { customElement, LitElement, property, html, css } from 'lit-element';
import { LitDocsContent } from 'lit-docs';
import 'lit-docs';
import './keyup-component.js';


@customElement('basic-usage')
export class BasicUsage extends LitDocsContent(LitElement) {

    render() {

        return html`

            <h1>Basic usage</h1>

            <p>
                Say you want to listen to the <code>keyup</code> event in your
                component. Then log the pressed key on the screen. You can do
                it like this:
            </p>

            <h2>Example</h2>

            <p>
                <code-block .code=${this.keyupComponentCode}></code-block>
            </p>

            <h2>Output</h2>

            <p>
                <keyup-component></keyup-component>
            </p>


        `;

    }

    get keyupComponentCode() {

        return `import { customElement, LitElement, property, html } from 'lit-element';
import 'lit-document-event';


@customElement('keyup-component')
class KeyupComponent extends LitElement {

    @property() lastKeyPressed = null;

    render() {

        return html\`
            <h3>Last key pressed: \${this.lastKeyPressed}</h3>
            <document-event eventname="keydown" @event=\${this.handleKeyDown}>
            </document-event>
        \`;

    }

    handleKeyDown(event) {
        this.lastKeyPressed = event.detail.key;
    }

}`;

    }

}
