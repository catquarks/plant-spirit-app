import React, { Component } from 'react'
import { google } from './search_links'
import Modal from './modal'
import FeelingsList from './feelings_list'
import { closeModal, handleModalClick } from './modal_functions'

class PlantShow extends Component {
	constructor(props){
		super(props)
		this.state = {
			modalIsOpen: false,
			currentModal: null
		}
	}

	noSummary(term){
		return(
			<span>
				No summary is currently available. In the meantime, try
				{ google(term) }
				for information and images.
			</span>
		)
	}

	summary(){
		return(
			<span>
				{this.props.summary}
			</span>
		)
	}

  render(){
		return(
			<div className="card plant-show">
				<Modal modalIsOpen={this.state.modalIsOpen}
          closeModal={closeModal.bind(this)}
          imageSrc={this.state.imageSrc}
          imageName={this.state.imageName}
          currentModal={this.state.currentModal} />
				<div className="image-area card-image">
					<img src={this.props.large} target="_blank"
						alt={this.props.name} 
						onClick={ () => {
							handleModalClick.call(this, 'image', this.props.large, this.props.name)
						}} />
					<span className="card-title title">{this.props.name}</span>
				</div>
				<div className="summary-area">
					<div className="summary-area-child">
						<p>
							{this.props.summary ? this.summary() : this.noSummary(this.props.name)}
						</p>
						<div className="feeling-group">
							<FeelingsList title='Promotes:'
								feelings={this.props.futureFeelings}
							/>
							<FeelingsList title='Alleviates:'
								feelings={this.props.currentFeelings}
							/>
						</div>
					</div>
				</div>
			</div>
		)
 	
  }
}

export default PlantShow