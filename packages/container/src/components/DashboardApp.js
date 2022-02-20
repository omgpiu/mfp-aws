import React, { useEffect, useRef } from 'react'
import { mount } from 'dashboard/DashboardApp'


//В МФЕ мы хотим иметь минимальную связанность кода, поэтмо мы не берем с мфе напрямую компоненты, а работаем с функциям
// Эта обертка позволяет превратить функцию маунт в Компонент

export default () => {
    const ref = useRef(null)


    useEffect(() => {
        mount(ref.current)
    }, [])


    return <div ref={ref}/>
}
