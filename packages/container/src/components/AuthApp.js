import React, { useEffect, useRef } from 'react'
import { mount } from 'auth/AuthApp'
import { useHistory } from "react-router-dom";

//В МФЕ мы хотим иметь минимальную связанность кода, поэтмо мы не берем с мфе напрямую компоненты, а работаем с функциям
// Эта обертка позволяет превратить функцию маунт в Компонент

export default () => {
    const ref = useRef(null)
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPathName }) => {
                const { pathname } = history.location
                if (pathname !== nextPathName) {
                    history.push(nextPathName)
                }
            },
        });
        history.listen(onParentNavigate)
    },[])


    return <div ref={ref}/>
}
