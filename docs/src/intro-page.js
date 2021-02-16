import { customElement, LitElement, property, html, css } from 'lit-element';
import { LitDocsContent } from 'lit-docs';
import 'lit-docs';


@customElement('intro-page')
export class IntroPage extends LitDocsContent(LitElement) {

    render() {

        return html`

            <h1>LitDocumentEvent</h1>

            <p>
                This is a component that you can use to easily connect an event
                listener to the global <code>document</code> object.
            </p>

            <p>
                For example, you can add a <code>keydown</code> listener like
                this:
            </p>

            <p>
                <code-block .code=${'<document-event eventname="keydown" @event=${this.handleKeyDown}></document-event>'}></code-block>
            </p>

            <p>
                The component doesn't have any UI so it doesn't render
                anything. It's solely meant to create an event listener.
            </p>

            <p>
                The event listener automatically gets added when the component
                mounts. When it unmounts, the event listener is removed. So you
                don't have to worry about forgetting to remove an event
                listener.
            </p>

        `;

    }

}
