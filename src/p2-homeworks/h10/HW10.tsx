import React from 'react'
import styles from './HW10.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, loadingReducerStateType} from "./bll/loadingReducer";
import {Button} from "@mui/material";
import {Send} from "@mui/icons-material";

function HW10() {
    const loading = useSelector<AppStoreType, loadingReducerStateType>(state => state.loading)
    const dispatch = useDispatch()
    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div className={styles.wrapper}>
            <hr/>

            {loading.loading
                ? (
                    <Loading/>
                ) : (
                    <div>
                        <Button color="success"
                                variant="contained" startIcon={<Send/>}
                                onClick={setLoading}>SEND</Button>
                    </div>
                )
            }

        </div>
    )
}

const Loading = () => {
    return (
        <div className={styles.container}>
            <h3>Загрузка, пожалуйста подождите.</h3>
            <div className={styles.inner}>
                <div className={styles.mostInner}></div>
            </div>
        </div>
    )
}

export default HW10
