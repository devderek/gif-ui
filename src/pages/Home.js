import React from 'react';
import './Home.css';

/**
 * The default landing page for the application. Shows a text field input to search for GIFs using Giphy.
 */
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            images: []
        }
    }

    // Called whenever the user changes the text in the GIF search text element
    updateText(event) {
        this.setState({
            searchText: event.target.value
        })
    }

    // Called whenever the user presses a key on the bound component
    keyPress(key) {
        // Check if the enter key was pressed
        if (key.keyCode === 13) {
            this.setState({
                images: []
            });

            // Call the API to get Gifs from Giphy
            fetch("http://localhost:8080/api/v1/gifs?query=" + this.state.searchText)
                .then(res => res.json()) // Transform the data into JSON
                .then(res => { // Update the state with the images we retrieved to the page will rerender
                    this.setState({images: res});
                })
                .catch((error) => {
                    console.log(`Error fetching gifs: ${error}`)
                })
        }
    }

    render() {
        /**
         * Build a collection of found gifs if the user searched for gifs.
         */
        let images = this.state.images.map((image) => {
            return <img className="gifResult" src={image.images.fixed_height.url} alt={image.title} key={image.id}/>
        });

        return (
            <>
                Search for gifs: <input onKeyDown={this.keyPress.bind(this)} onChange={event => this.updateText(event)} />
                <div id="gifBlock">
                    {images}
                </div>
            </>
        )
    }
}