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
      attribute: 'first'
		},
	},
	edit: ( props ) => {
		const { attributes: { content }, setAttributes, className } = props;
		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};
		return (
      <RichText
        format="string"             // Default is 'element'. Wouldn't work for a tag attribute
        className={props.className} // Automatic class: gutenberg-blocks-sample-block-editable
        onChange={onChangeContent} // onChange event callback
        value={content} // Binding
        placeholder="Some Content"
      />
		);
	},
	save: ( props ) => {
		return <my-component content={ `${props.attributes.content}` }></my-component>
	},
} );
