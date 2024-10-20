import { useNavigate } from "react-router-dom";
import { apiConst } from "../../../constants/api.constants";





const Board = ({ proj }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        const url = apiConst.BoardPage.replace(':id', proj.id);
        navigate(url);
    };


    return (


        <div
            className="relative flex items-center justify-center w-52 h-32 m-2 p-2 rounded-lg overflow-hidden cursor-pointer bg-gray-500"
            onClick={handleClick}
            style={{
                backgroundImage: 'url(https://cdn.pixabay.com/photo/2023/06/01/05/58/clouds-8032705_1280.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 hover:opacity-20"></div>
            <span className="relative z-10 text-xl font-bold text-white text-center">{proj.title}</span>
        </div>


    )


}

export default Board;




