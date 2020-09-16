import React, { Component } from 'react';
import './SearchBox.css';
import { fetchMovieQuery } from '../../redux/actions';
import { connect } from 'react-redux';

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        this.props.dispatch(fetchMovieQuery(this.state.searchLine));
    }

    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            // value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                        onClick={this.searchBoxSubmitHandler}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}
// const mapDispatchToProps = dispatch => ({
//     fetchMovieQuery: (searchLine) => dispatch(fetchMovieQuery(searchLine))
//   });
export default connect(null)(SearchBox);

