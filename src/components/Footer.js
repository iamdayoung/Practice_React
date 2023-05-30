import {useRecoilState} from "recoil";
import {globalIndex} from "../store/store";
import '../Footer.css'

const Footer = ({index}) => {
    const [index3, setIndex3] = useRecoilState(globalIndex);

    return (
        <div className="index">
            <div>
                Hi, {index}
            </div>
            <div>
                Are you {index3} ?
            </div>
        </div>
    )
}
export default Footer