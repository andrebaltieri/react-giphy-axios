import React from 'react';

class SearchBar extends React.Component {
    state = { query: '', limit: 25 };

    onInputChange = event => {
        this.setState({ query: event.target.value });
    }

    onSelectChange = event => {
        this.setState({ limit: event.target.value });
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSearch(this.state.query, this.state.limit);
    }

    render() {
        return (
            <div>
                <br />
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="search-input">Search Term</label>
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Search..."
                        onChange={this.onInputChange} />
                    <label htmlFor="limit-input">How many GIFs?</label>
                    <select
                        id="limit-input"
                        defaultValue={this.state.limit}
                        onChange={this.onSelectChange}>
                        <option value="5">5</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                    <button className="button button-outline" onClick={this.onFormSubmit}>
                        Search
                    </button>
                </form>
            </div>
        );
    };
}

export default SearchBar;