//lib
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// custom
import { setpreviousRoute } from '../../redux/reducer/appState';

const withLastRouteName = (Component) => (props) => {
    const dispatch = useDispatch();
    const {route} = props;
    useEffect(() => {
        if(route && route.name) {
            dispatch(setpreviousRoute(route.name))
        }
    },[])
    return <Component>{props}</Component>
}
export default withLastRouteName;