import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title:"Free Cocktail",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, fugit."
            },
            {
                icon: <FaHiking/>,
                title:"Endless Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, fugit."
            },
            {
                icon: <FaShuttleVan/>,
                title:"Free Shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, fugit."
            },
            {
                icon: <FaBeer/>,
                title:"Strongest Beer",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, fugit."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((items, index) => {
                        return <article key={index} className="service">
                            <span>{items.icon}</span>
                            <h6>{items.title}</h6>
                            <p>{items.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
