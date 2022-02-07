import React, {useEffect, useRef} from 'react'
import {mount} from 'marketing/Marketing'

//В МФЕ мы хотим иметь минимальную связанность кода, поэтмо мы не берем с мфе напрямую компоненты, а работаем с функциям
// Эта обертка позволяет превратить функцию маунт в Компонент


const MarketingApp = () => {
    const ref = useRef(null)
    useEffect(() => {
        mount(ref.current)
    }, [])


    return <div ref={ref}/>
}
export default MarketingApp