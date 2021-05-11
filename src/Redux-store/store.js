import { applyMiddleware, createStore } from 'redux'
import thunk from "redux-thunk";
import axios from 'axios'


const REQUEST_CHART_DATA = "REQUEST_CHART_DATA"
const REQUEST_CHART_DATA_SUCCESS = "REQUEST_CHART_DATA_SUCCESS"
const REQUEST_CHART_DATA_FAIL = "REQUEST_CHART_DATA_FAIL"

function requestChartData() {
    return {
        type: REQUEST_CHART_DATA
    }
}
function requestChartDataSuccess(data) {
    return {
        type: REQUEST_CHART_DATA_SUCCESS,
        payload: data
    }
}

function requestChartDataFail(err) {
    return {
        type: REQUEST_CHART_DATA_FAIL,
        payload: err
    }
}
const initialState = {
    loading: true,
    data: {},
    error: ""
}
function getChartData() {
    return (dispatch) => {
        dispatch(requestChartData())
        axios.get("https://api.mocklets.com/mock68182/screentime").then((res) => {
            let charData = res.data[0]
            dispatch(requestChartDataSuccess(charData))
        }).catch((err) => {
            dispatch(requestChartDataFail(err))
        })
    }
}


function chartDataReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_CHART_DATA:
            return {
                ...state,
                loading: true
            }
    case REQUEST_CHART_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case REQUEST_CHART_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const store = createStore(chartDataReducer, applyMiddleware(thunk))
store.subscribe(() => {
    console.log(store.getState())
})
export { getChartData, store }