import React, { Component } from 'react'
import { GoogleLink } from './search_links'
import Modal from './modal'
import FeelingsList from './feelings_list'
import { closeModal, handleModalClick } from './modal_functions'

function ImageArea(props){
	return(
		<div className="image-area card-image">
			<img src={props.large} target="_blank"
				alt={props.name} 
				onClick={ () => {
					handleModalClick.call(
						props.thisForModal, 'image', props.large, props.name
					)
				}} />
			<span className="card-title title">{props.name}</span>
		</div>
	)
}

function NoSummary(props){
	return(
		<p>
			No summary is currently available. In the meantime, try&nbsp;
			<GoogleLink term={props.term} />
			&nbsp;for information and images.
		</p>
	)
}

function Summary(props){
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
        <ImageArea name={this.props.name} large={this.props.large} thisForModal={this} />
				<div className="summary-area">
					<div className="summary-area-child">
						{this.props.summary ? <Summary summary={this.props.summary} /> : <NoSummary term={this.props.name} />}
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
