import { useState, useEffect } from "react"
import Table from '../components/Table'
import Card from "../components/Card"
import { useDispatch } from "react-redux"
import { homeInfo } from "../redux/InfoSlice"
import { useSelector } from "react-redux"

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
        <div>
            <label className='mt-5 ml-5'>
                <input
                 className='cursor-pointer'
                 type="checkbox"
                 checked={isToggled}
                 onChange={handleToggle}
                />
            </label>
            <div>{isToggled ? <Table info={info} /> : <Card info={info} />}</div>
        </div>
        </>
    )
}