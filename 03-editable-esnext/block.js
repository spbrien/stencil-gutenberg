const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType( 'gutenberg-examples/example-03-editable-esnext', {
	title: __( 'Example: Editable (esnext)', 'gutenberg-examples' ),
	icon: 'universal-access-alt',
	category: 'layout',
	attributes: {
		content: {
			selector: 'my-component',
      source: 'attribute',
      attribute: 'content'
		},
	},
	edit: ( props ) => {
		const { attributes: { content }, setAttributes, className, isSelected } = props;
		const onChangeContent = ( newContent ) => {
      console.log(newContent)
			setAttributes( { content: newContent } );
		};
		return (
      <div>
        { isSelected &&
          <RichText
            format="string"             // Default is 'element'. Wouldn't work for a tag attribute
            className={props.className} // Automatic class: gutenberg-blocks-sample-block-editable
            onChange={onChangeContent} // onChange event callback
            value={content} // Binding
            placeholder="Some Content"
          />
        }
        {
          !isSelected &&
          <my-component content={content}></my-component>
        }
      </div>
		);
	},
	save: ( props ) => {
		return <my-component content={props.attributes.content}></my-component>
	},
} );
