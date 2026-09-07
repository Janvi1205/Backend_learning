import React ,{useState}from 'react'

const createpost = () => {

    const [Title, setTitle] = useState("");
    const [caption, setcaption] = useState("");


    const handlePost = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", Title);
        formData.append("caption", caption)
        const response = await fetch("http://localhost:3000/create-post", { //This says:Send a request to my backend and wait for its response
            method: "POST",
            body: formData

        });
    };


    return (
        <div
            style={{
                backgroundColor: "pink",
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    height: "400px",
                    width: "400px",
                    borderRadius: "10px",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",


                }}
            >
                <div style={{ font: "caption", color: "black", marginTop: "50px", fontSize: "25px" }}>Create Post</div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "40px" }}>
                    <label style={{ color: "black", fontSize: "22px" }}>Title</label>
                    <input
                        value={Title} //Your displayed value comes from title.
                        onChange={(e) => { setTitle(e.target.value) }} //This listens for changes in the input....e.target.value MEANS Get the current text inside the input.
                        style={{ width: "300px", height: "30px" }}
                        type="text" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "30px" }}>
                    <label style={{ color: "black", fontSize: "22px" }}>Caption</label>
                    <input
                        value={caption}
                        onChange={(e) => { setcaption(e.target.value) }}
                        style={{ width: "300px", height: "30px" }}
                        type="text" />
                </div>
                <button
                    onClick={handlePost}
                    style={{ marginTop: "30px" }}
                >
                    Post
                </button>

            </div>
        </div>
    )
}

export default createpost