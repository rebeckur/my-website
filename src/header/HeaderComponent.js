import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);

	 this.imageSliderProps = {
	    height: props.height,
	    width: props.width,
	    images: props.images,
	};
    }
    
    render() {
	return (
	    <div className="header">
		<h1> Rebecca Leung </h1>
		<SimpleImageSlider 
		    width={this.imageSliderProps.width}
		    height={this.imageSliderProps.height}
		    images={this.imageSliderProps.images} />
	    </div>
	);
    }
}

export default HeaderComponent;
