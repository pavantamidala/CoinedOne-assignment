import React from 'react';
import AllScreenTime from '../components/AllScreenTime'
import LoadData from '../components/LoadData'
import{Route,BrowserRouter,Switch} from "react-router-dom"
function Dummy(props){
    return(
        <h1> {props.name} </h1>
    )
}
export default function AppRouter() {
    return (
        <div>
            <LoadData/>
            <BrowserRouter>
                <Route path="/" exact >
                    <AllScreenTime name={"pavan"} />
                </Route>
            </BrowserRouter>
        </div>
    )
}
