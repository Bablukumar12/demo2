import React from "react";
import PicViewer from "./PicViewer";
import Favorites from "./Favorites";

class MainComponent extends React.Component {
	state = {
		pics: [
			"https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			"https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			"https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			"https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			"https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			"https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			"https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			"https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			"https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			"https://images.pexels.com/photos/545063/pexels-photo-545063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			"https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		],
		favorites: [],
		currentIndex: 0,
	};

	handleAddToFavorites = (pic) => {
		if (!this.state.favorites.includes(pic)) {
			this.setState((prevState) => ({
				favorites: [...prevState.favorites, pic],
			}));
		}
	};

	handlePrevious = () => {
		this.setState((prevState) => ({
			currentIndex:
				prevState.currentIndex === 0
					? prevState.pics.length - 1
					: prevState.currentIndex - 1,
		}));
	};

	handleNext = () => {
		this.setState((prevState) => ({
			currentIndex: (prevState.currentIndex + 1) % prevState.pics.length,
		}));
	};
handleRemove = (index)=>{
	console.log(index)
	let s1 = {...this.state};
	s1.favorites.splice(index,1);
	this.setState(s1);
}
	render() {
		const { pics, favorites, currentIndex } = this.state;
		const currentPic = pics[currentIndex];
        let disabled=  currentIndex === 0 ? " disabled  " : "  " ;
		let nDisabled = currentIndex === (pics.length-1) ? " disabled  " : "  " ;
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<PicViewer
              favoritePics = {favorites}
							pic={currentPic}
							onAddToFavorites={this.handleAddToFavorites}
						/>
					</div>
				</div>

				<div className="row text-center">
					<div className="col-6">
						<button  className={"btn btn-primary  " + disabled} onClick={this.handlePrevious}>
							Previous
						</button>
					</div>
					<div className="col-6">
						<button className={"btn btn-primary "+ nDisabled} onClick={this.handleNext}>
							Next
						</button>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<Favorites onRemove={this.handleRemove} favorites={favorites} />
					</div>
				</div>
			</div>
		);
	}
}

export default MainComponent;
