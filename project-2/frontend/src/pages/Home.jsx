import { useState, useEffect } from "react"
import Table from '../components/Table'
import Card from "../components/Card"
import { useDispatch } from "react-redux"
import { homeInfo } from "../redux/InfoSlice"
import { useSelector } from "react-redux"
import './Styles.css'

export default function Home() {
    const info = useSelector(state => state.value.info.data)
    const [isToggled, setToggled] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(homeInfo(info))
    }, [])

    const handleToggle = () => {
        setToggled(!isToggled);
    }    

    return(
        <>
        <div className="relative">
        <div className="absolute inset-0 bg-cover bg-center h-screen" style={{backgroundImage: `url('https://images.pexels.com/photos/14538627/pexels-photo-14538627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, opacity: 0.6}}></div>
            <span className="relative inline-block mt-2 ml-2 mb-4 border-2 border-black p-2 rounded-3xl">
            <span className="pr-2">Card</span>
            <label className='switch-toggle'>
                <input
                 className='cursor-pointer'
                 type="checkbox"
                 checked={isToggled}
                 onChange={handleToggle}
                />
                <span className="slider"></span>
            </label>
            <span className="pl-2">Table</span>
            </span>
            <div className="relative">{isToggled ? <Table info={info} /> : <Card info={info} />}</div>
        </div>
        </>
    )
}