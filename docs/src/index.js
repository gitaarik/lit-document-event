import { customElement, LitElement, property, html, css } from 'lit-element';
import 'lit-docs';
import './intro-page';
import './basic-usage/index';


@customElement('lit-document-event-docs')
export class LitDocumentEventDocs extends LitElement {

    render() {
        return html`<lit-docs-ui docsTitle="LitDocumentEvent" .pages=${this.pages}></lit-docs-ui>`;
    }

	get pages() {
		return [
			{
				title: 'Introduction',
				path: 'intro-page',
				template: html`<intro-page></intro-page>`
			},
			{
				title: 'Basic usage',
				path: 'basic-usage',
				template: html`<basic-usage></basic-usage>`
			}
		];
	}

}
