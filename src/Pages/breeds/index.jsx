import { useEffect, useState } from "react";
import placeholderImg from "/placeholder.png"

const BreedPage = () => {
    const [breeds, setBreeds] = useState("")
    const[err,setErr] = useState(null)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random ")
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBreeds(data.message);
            })
            .catch(err => {
                setErr(err.message);
                console.error(err);
            })
    }, []);

    return (
        <div>
            {/* {
                breeds === "" ? <div className="skeleton" style={{backgroundColor:"black"}}>loading....</div> : <img src={breeds} alt="" width="200px" height={400} style={{objectFit: "Contain"}} />
            } */}
            {err ? (
                <p>{err}</p>
            ) : (
                <img 
                src ={breeds || placeholderImg} 
                alt="" 
                width="200px" 
                height={400}
                style={{objectFit: "Contain"}}/>
            )}
        </div>
    );
}

export default BreedPage;