import React, { Component } from 'react';
import './ListPage.css';
import { connect } from 'react-redux';
import { getList, getMovieInfoByImdbID } from '../../redux/actions';

class ListPage extends Component {
   
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        
        // TODO: запрос к сервер на получение списка
        this.props.getList(id);
        // TODO: запросы к серверу по всем imdbID
        this.props.getMovieInfoByImdbID(this.props.listMovies);
        console.log(this.props);
        console.log(this.props.title);
        console.log(this.props.listMovies);
    }
    render() { 
        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.props.title}</h1>
                <ul>
                    {this.props.listMovieDetails.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getList: (id) => dispatch(getList(id)),
    getMovieInfoByImdbID: (listMovies) => dispatch(getMovieInfoByImdbID(listMovies))
  });
const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
        title: state.title,
        listMovies: state.listMovies,
        listMovieDetails: state.listMovieDetails
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(ListPage);