import React from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import axios from 'axios'

const server_endpoint = 'https://travel-hackathon.herokuapp.com/api/restaurants'
const images = [
    {id: 'kosher', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Ou_kosher.svg/600px-Ou_kosher.svg.png', title: 'Kosher'},
		{id: 'vegetarian', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Vegetarian.svg/563px-Vegetarian.svg.png', title: 'Vegetarian'},
		{id: 'vegan', src: 'https://tse2.mm.bing.net/th?id=OIP.6QOTU-BorVIx5LSN5L_XPAHaGp&pid=Api', title: 'Vegan'},
    {id: 'halal', src: 'https://tse3.mm.bing.net/th?id=OIP.pEENlv1kxw_4tOjdWhXWXAAAAA&pid=Api', title: 'Halal'},
		{id: 'cornfree', src: '/cornfree.png', title: 'Cornfree'},
		{id: 'dairyfree', src: '/dairyfree.png', title: 'Dairyfree'},
		{id: 'eggfree', src: '/eggfree.png', title: 'Eggfree'},
		{id: 'glutenfree', src: '/glutenfree.png', title: 'Glutenfree'},
		{id: 'nutfree', src: '/nutfree.png', title: 'Nutfree'},
		{id: 'soyfree', src: '/soyfree.png', title: 'Soyfree'},
		{id: 'sugarfree', src: '/sugarfree.png', title: 'Sugarfree'},
]
class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            restaurants: [{name:'something', city:'london'}],
            lifestyle: {kosher:false, halal:false, vegetarian:false, vegan:false, dairyfree:false},
            images: images
        }
        this.onImageClick = this.onImageClick.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onImageClick(id) {
        this.setState(prevState => ({lifestyle: {...prevState.lifestyle, [id]: !prevState.lifestyle[id]}}))
    }

    // POST request to the server with all lifestyles
    onSubmit() {
        axios.post(server_endpoint, {
            lifestyle: this.state.lifestyle
        }).then(function (response) {

            console.log(response);
        }).catch(function (error) {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Main images={this.state.images}
                      lifestyle={this.state.lifestyle}
                      restaurants={this.state.restaurants}
                      onImageClick={this.onImageClick}
                      onSubmit={this.onSubmit}
                />
                <Footer />
            </div>
        )
    }
}

export default App;
