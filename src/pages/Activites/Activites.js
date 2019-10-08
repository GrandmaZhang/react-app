import React, {Component} from 'react'
import { Route , Switch, Prompt} from 'react-router-dom'
import ActiveNav from '../../components/ActiveNav/ActiveNav'

class Activites extends Component {
    render () {
        return (
            <>
                <Prompt message="要离开吗？"></Prompt>
                <div>
                    <ActiveNav></ActiveNav>
                    <Switch>
                        <Route path="/activites/recommend"></Route>
                    </Switch>
                </div>
            </>
        )
    }
}
export default Activites;

