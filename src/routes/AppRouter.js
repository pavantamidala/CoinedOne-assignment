import React from 'react';
import AllScreenTime from '../components/AllScreenTime'
import LoadApp from '../components/LoadData'
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ClassTime from '../components/ClassTime'
import FreeTime from '../components/FreeTime'
import StudyTime from '../components/StudyTime'


export default function AppRouter() {

    return (
        <div>
            <BrowserRouter>
            <LoadApp></LoadApp>
                    <Route path="/" exact >
                        <AllScreenTime />
                    </Route>
                    <Route path="/classtime" exact>
                        <ClassTime exact />
                    </Route>
                    <Route path="/freetime" exact>
                    <FreeTime exact   />
                    </Route>
                    <Route path="/studytime" exact>
                    <StudyTime exact   />
                </Route>
            </BrowserRouter>
        </div>
    )
}
