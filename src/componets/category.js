import React, { Component } from 'react'

 class Category extends Component {
    constructor() {
        super(); 
        this.state = {

        }
    }
    render() {

        const {match, location , history} = this.props
        return (
            <div className="listings">
                <div className="container">
                    category: BMW
                </div>
                
            </div>
        )
    }
}

export default  Category 