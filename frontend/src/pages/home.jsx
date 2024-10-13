/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom"
import withAuth from "../utils/withAuth"
import { useContext, useState } from "react";
import "./home.css";
import { Button, IconButton } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore"
import { TextField } from "@mui/material";
import { AuthContext } from "../context/AuthContext";

function HomeComponent(){

    let navigate=useNavigate();
    const [meetingCode,setMeetingCode]=useState("");

    const {addToUserHistory} =useContext(AuthContext);
    let handleJoinVideoCall=async()=>{
        await addToUserHistory(meetingCode)
    navigate(`/${meetingCode}`)
}

    return(
        <>
        <div className="navBar">
            <div style={{display:"flex",alignItems:"center"}}>

                <h3>Apna Video Call</h3>
            </div>
            
            <div style={{display:"flex",alignItems:"center"}}>
                <IconButton onClick={()=>{
                    navigate("/history")
                }}>
                    <RestoreIcon />
                    <p>History</p>
                </IconButton>
                <Button onClick={()=>{
                    localStorage.removeItem("token")
                    navigate("/auth")
                }}>
                    LogOut
                </Button>
            </div>
        </div>

        <div className="meetContainer">
            <div className="leftPanel">
                <div>
                    <h2>Providing Quality Video Call Just Like Quality Education</h2>

                    <div style={{display:"flex",gap:"10px"}}>
                    <TextField  onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />

                        <Button onClick={handleJoinVideoCall} variant="contained">Join</Button>
                    </div>
                </div>
            </div>
            <div className="rightPanel">
                <img srcSet="/logo3.png" alt="" />
            </div>
        </div>
        </>
    )
}

export default withAuth(HomeComponent)