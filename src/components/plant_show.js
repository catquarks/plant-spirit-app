import React, { Component } from 'react'
import { GoogleLink } from './search_links'
import Modal from './modal'
import FeelingsList from './feelings_list'
import { closeModal, handleModalClick } from './modal_functions'
import PlantImageArea from './plant_image_area'
import ImageCredit from './image_credit'

function PlantNoSummary(props){
	return(
		<p>
			No summary is currently available. In the meantime, try&nbsp;
			<GoogleLink term={props.term} />
			&nbsp;for information and images.
		</p>
	)
}

function PlantSummary(props){
	return(
		<p>
			{props.summary}
		</p>
	)
}

class PlantShow extends Component {
	constructor(props){
		super(props)
		this.state = {
			modalIsOpen: false,
			currentModal: null
		}
	}

  render(){
		return(
			<div className="card plant-show">
				<Modal modalIsOpen={this.state.modalIsOpen}
          closeModal={closeModal.bind(this)}
          imageSrc={this.state.imageSrc}
          imageName={this.state.imageName}
          currentModal={this.state.currentModal}
        />
        <PlantImageArea
        	name={this.props.name}
        	large={this.props.large}
        	handleModalClick={handleModalClick.bind(this)}
      	/>
				<div className="summary-area">
					<div className="summary-area-child">
						{this.props.summary ? <PlantSummary summary={this.props.summary} /> : <PlantNoSummary term={this.props.name} />}
						<div className="feeling-group">
							<FeelingsList title='Promotes:'
								feelings={this.props.futureFeelings}
							/>
							<FeelingsList title='Alleviates:'
								feelings={this.props.currentFeelings}
							/>
							<ImageCredit
								desc={this.props.imageCreditDesc}
								url={this.props.imageCreditUrl}
							/>
						</div>
					</div>
				</div>
			</div>
		)
  }
}

export default PlantShow
