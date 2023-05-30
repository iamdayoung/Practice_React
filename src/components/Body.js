import {useEffect, useState} from "react";
import Footer from "./Footer";
import {useRecoilState} from "recoil";
import {globalIndex} from "../store/store";
import '../Body.css'
const Body = () => {

    const [name, setName] = useState("Dorothy");
    const [age, setAge] = useState(25);
    const [aaa, setAaa] = useRecoilState(globalIndex);

    useEffect(() => {
        setAaa(26)
    }, [])

    return (
        <div className="info">
            {age} 살
            <Footer index = {name} />
        </div>
    )
}
export default Body