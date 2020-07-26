import { HostBinding, Component } from '@angular/core';

const ATTRIBUTE_NAME_FOR_TEXT = 'Text';

@Component({
  selector: 'app-sticky-note',
  template: '',
})
export abstract class StickyNotesComponent extends CanvasDefaultElementComponent {
  // add random rotation of sticky notes (-5 to 5 degree)
  @HostBinding('style.transform') transform = 'rotate(' + Math.floor((Math.random() * 10) - 5).toString() + 'deg)';

  domainElement: ModelElement;
  textAttribute: ModelAttribute;

  setElement(e: CanvasElement) {
    super.setElement(e);
    // validate domain element for the needed attributes
    this.validateDomainElement(e.representedDomainElement);
  }

  /**
   * Validates the domain element of the set canvas element.
   * If there are no 'Text' Attribute, they will be added
   */
  private validateDomainElement(domainElement: ModelElement) {
    // Check if there is a text attributet
    for (const attribute of domainElement.attributes) {
      if (attribute.name === ATTRIBUTE_NAME_FOR_TEXT) {
        this.textAttribute = attribute;
      }
    }

    // if there is no text attribute, create a new one
    if (!this.textAttribute) {
      this.textAttribute = AttributeFactory.create(EAttributeType.Text);
      this.textAttribute.name = 'Text';
      domainElement.addAttribute(this.textAttribute);
    }

    // set internal domain element
    this.domainElement = domainElement;
  }
}
