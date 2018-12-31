import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Home from '../../src/components/home';
// import PageNotFound from '../../src/components/pageNotfound';
import EnhancedTable from '../../src/components/tabel';
import GridExample from '../../src/components/grid';
import API from '../../src/components/api';
import Parent from '../../src/components/parentComponent';
import D3Charts from './D3Chart';
import VictoryChartComponent from './charts/VictoryChart';


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 0.1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 22,
    },
    NavMenu: {
        color: 'white',
        textDecoration: 'none'
    }
};

class Header extends React.Component {
    render() {
        return (
            <HashRouter>
                <div className={styles.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" color="inherit" style={styles.grow}><NavLink to="/Home" style={styles.NavMenu}>Home</NavLink></Typography>
                            <Typography variant="h6" color="inherit" style={styles.grow}><NavLink to="/Tabel" style={styles.NavMenu}>Tabel</NavLink></Typography>
                            <Typography variant="h6" color="inherit" style={styles.grow}><NavLink to="/Grid" style={styles.NavMenu}>Grid</NavLink></Typography>
                            <Typography variant="h6" color="inherit" style={styles.grow}><NavLink to="/api" style={styles.NavMenu}>API</NavLink></Typography>
                            <Typography variant="h6" color="inherit" style={styles.grow}><NavLink to="/parentComponent" style={styles.NavMenu}>CompoCommu</NavLink></Typography>
                            <Typography variant="h6" color="inherit" style={styles.grow}><NavLink to="/d3chartComponent" style={styles.NavMenu}>D3Chart</NavLink></Typography>
                            <Typography variant="h6" color="inherit" style={styles.grow}><NavLink to="/victoryChartComponent" style={styles.NavMenu}>VictoryChart</NavLink></Typography>
                        </Toolbar>
                    </AppBar>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/tabel" component={EnhancedTable} />
                        <Route path="/grid" component={GridExample} />
                        <Route path="/api" component={API} />
                        <Route path="/parentComponent" component={Parent} />
                        <Route path="/d3chartComponent" component={D3Charts} />
                        <Route path="/victoryChartComponent" component={VictoryChartComponent} />
                        {/* <Route exact path="*" component={PageNotFound}></Route> */}
                    </div>
                </div>
            </HashRouter >
        );
    }
}

export default Header;
