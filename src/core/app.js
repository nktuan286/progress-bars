import React from 'react';
import 'antd/dist/antd.css';
import AppRoute from './routes';
import Header from '../components/layouts/header/header';
import Footer from '../components/layouts/footer/footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id="wrapper">
                <Header />
                <div className="container">
                    <AppRoute />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;