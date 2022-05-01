import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import FirstPage from '../pages/FirstPage'
import SecondPage from '../pages/SecondPage'
import { PATH } from '../utils/constants'

const MainRouter = () => {
    return (
        <Routes>
            <Route path={PATH.HOME} element={<Home />} />
            <Route path={PATH.FIRST_PAGE} element={<FirstPage />} />
            <Route path={PATH.SECOND_PAGE} element={<SecondPage />} />
        </Routes>
    )
}

export default MainRouter
