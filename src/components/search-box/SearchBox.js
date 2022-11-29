import { Component } from 'react'
import './search-box.styles.css'
class SearchBox extends Component {
    render() {
        const { onSearchHandler, className1, placeholder1 } = this.props
        return (
            <div>
                <input
                    className={`search-box ${className1}`}
                    type="search"
                    placeholder={placeholder1}
                    onChange={onSearchHandler}
                />
            </div>
        )
    }
}

export default SearchBox
