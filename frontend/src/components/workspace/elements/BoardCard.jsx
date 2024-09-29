import { useNavigate } from "react-router-dom";
import { apiConst } from "../../../constants/api.constants";





const Board = ({ proj }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        const url = apiConst.BoardPage.replace(':id', proj.id);
        navigate(url);
    };


    return (

        <div className="bg-pink-600 text-white p-4 rounded-lg w-40 h-20"
            onClick={handleClick}
        >
            {proj.title}
            {proj.id}
        </div>

    )


}

export default Board;