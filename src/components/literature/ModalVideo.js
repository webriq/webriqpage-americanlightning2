import React from "react"
import ModalVideo from "react-modal-video"
import "react-modal-video/scss/modal-video.scss"

class Videos extends React.Component {
	constructor() {
		super()
		this.state = {
			isOpen: false,
		}
		this.openModal = this.openModal.bind(this)
	}

	openModal() {
		this.setState({ isOpen: true })
	}

	render() {
		const { videoID, thumbnailImage, videoTitle, videoDesc } = this.props
		return (
			<div className="col-lg-6 mb-4">
				<div className="row">
					<div className="col-5">
						<ModalVideo
							channel="vimeo"
							isOpen={this.state.isOpen}
							videoId={videoID}
							onClose={() => this.setState({ isOpen: false })}
						/>
						<div
							className="video-thumbnail"
							style={{
								backgroundImage: `url(${thumbnailImage})`,
							}}
							onClick={this.openModal}
						/>
					</div>
					<div className="col-7">
						<h5>{videoTitle}</h5>
						<p className="small text-muted">{videoDesc}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Videos
