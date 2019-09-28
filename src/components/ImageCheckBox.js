import React, {Component} from 'react'
import PhotoButton from './PhotoButton'
import Button from "@kiwicom/orbit-components/lib/Button";
import './ImageCheckBox.css'

class ImageCheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: []}
				this.onSelect = this.onSelect.bind(this)
        this.selected = this.selected.bind(this)
    }

    onSelect(id) {
			const selected = this.state.selected
			  if (selected.indexOf(id) > -1) {
					 selected.splice(selected.indexOf(id), 1)
				} else {
					selected.push(id)
				}
				this.setState({selected: selected})
        this.props.onImageClick(id)
    }

		selected(id) {
			return this.state.selected.indexOf(id) > -1
		}

    render() {
        const {images} = this.props
        return (
            <React.Fragment>
                {
                    images.map(({id, src, title}) => (
                        <PhotoButton selected={this.selected(id)} key={id} id={id} action={() => this.onSelect(id)} src={src} alt={title} />
                    ))
                }
                <div className="submit-button">
                    <Button onClick={this.props.onSubmit()} title="Submit" />
                </div>
            </React.Fragment>
        )
    }
}

export default ImageCheckBox
