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

function ExpandPlantShow(props){
	return(
		<span
			className="link"
			onClick={()=>{
				props.handleExpansion()
			}}
		>
			Click to Expand this Card
		</span>
	)
}

class PlantShow extends Component {
	constructor(props){
		super(props)
		var long = false
		if (props.summary){
			long = props.summary.length > 150
		}

		this.state = {
			modalIsOpen: false,
			currentModal: null,
			long: long,
			summaryAreaClassName: 'summary-area contracted'
		}
	}

	handleExpansion(){
		this.setState({
			summaryAreaClassName: 'summary-area expanded',
			long: false
		})
	}

  render(){
		return(
			<div className="card plant-show">
				<Modal modalIsOpen={this.state.modalIsOpen}
          closeModal={closeModal.bind(this)}
          modalData={this.state.modalData}
          imageName={this.state.imageName}
          currentModal={this.state.currentModal}
        />
        <PlantImageArea
        	name={this.props.name}
        	large={this.props.large}
        	handleModalClick={handleModalClick.bind(this)}
      	/>
				<div className={this.state.summaryAreaClassName}>
					<div className="summary-area-child">
						{this.props.summary ? <PlantSummary summary={this.props.summary} /> : <PlantNoSummary term={this.props.name} />}
						{this.state.long ? <ExpandPlantShow handleExpansion={this.handleExpansion.bind(this)} /> : null }
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
