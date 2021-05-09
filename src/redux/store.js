import {createStore} from 'redux'

function getChartData(state={},action){
  
    switch(action){
        case "GET_DATA":
            return { ...state,data :action.chartInfo }
        default:
            return {data:""}
    }
}


const store = createStore(getChartData)
store.subscribe(()=>{
    console.log(store.getState())
})

export default store;