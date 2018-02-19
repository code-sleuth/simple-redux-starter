import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) =>{
            return(
                <li key={book.title} className='list-group-item'
                onClick={() => this.props.selectBook(book)}>
                {book.title}</li>
            );
        });
    }
    
    render(){
        return(
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
       )
    }
}

function mapStateTpProps(state){
    //whatever is returned will show up as props
    //inside of BookList
    return{
        books: state.books
    };
}

// Anything returned from this function will end up as props 
// on the BookList container
function mapDispatchToProps(dispatch){
    // whenever selectBook is called, the result should be passed
    // to all of the reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote BookList from a component to a container - it needs to know 
// abut this new dispatch method, selectBook. Make it available as props
export default connect(mapStateTpProps, mapDispatchToProps)(BookList);