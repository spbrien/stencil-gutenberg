import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {
  /**
   * The content
   */
  @Prop() content: string;

  render() {
    return <div class="my-component">
      {this.content}
    </div>;
  }
}
