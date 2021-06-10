import React from 'react'
import {connect} from 'react-redux'
import FavoriteCard from './FavoriteCard.js'
// import FavoriteCard from './FavoriteCard.js'

const Favorites = props => {
    const favoriteCards = props.favorites.map(f => <FavoriteCard favorite={f} key={f.id}/>)
    return(
        favoriteCards.length > 0 ? favoriteCards : null
    )
}

const mapStateToProps = ({favorites}) => {
    return {
        favorites
    }
}

export default connect(mapStateToProps)(Favorites)