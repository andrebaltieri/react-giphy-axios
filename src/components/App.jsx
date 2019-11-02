import React from 'react';
import repository from '../repositories/giphy.repository';
import GifList from './GifList';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { gifs: [] };

  doSearch = async (query, limit) => {
    const result = await repository.get('/v1/gifs/search', {
      params: {
        api_key: 'g74xJI2ZSIfLWgBcMSa144sl2Ln3HMAH',
        q: query,
        limit: limit,
        offset: 0,
        rating: 'G',
        lang: 'en',
      }
    });
    this.setState({ gifs: result.data.data });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="column column-25">
            <SearchBar onSearch={this.doSearch}></SearchBar>
          </div>
          <div className="column">
            <GifList gifs={this.state.gifs}></GifList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
