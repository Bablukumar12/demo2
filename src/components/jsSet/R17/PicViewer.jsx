import React from 'react';

class PicViewer extends React.Component {
  state = {
    isFavorited: false
  };

  handleAddToFavorites = () => {
    this.props.onAddToFavorites(this.props.pic);
    this.setState({
      isFavorited: true
    });
  };

  render() {
    const { pic, favoritePics } = this.props;
    const isFavorited = favoritePics.includes(pic);

    return (
      <div className="pic-viewer text-center">
      
        <img src={pic} alt="pic" /> <br />
        {!isFavorited && (
          <button className='btn btn-primary' onClick={this.handleAddToFavorites}>Add to Favorites</button>
        )}
        {isFavorited && (
          <button className='btn btn-primary' disabled>Added to Favorites</button>
        )}
      </div>
    );
  }
}

export default PicViewer;
