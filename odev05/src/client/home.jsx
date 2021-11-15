import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Kedi Oyunu</h2>
                <p className= "welcome-text">
                    Bu Oyunda 3 Kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi Kartı bulamaz isen 2.Seçim hakkı tanınacaktır
                </p>
                <div className="action"> 
                    <Link className="play" to={'/game'}>
                        Oyna
                    </Link>
                </div>
            </div>

            
        )
    }
}

export default Home;