import React,{ useState,useEffect} from "react";
import Grid from "@mui/material/Grid";
import "../assets/fiche.css";
import Header from './Header';
import Footer from './Footer';
import api from './api';
import {useNavigate,useParams} from 'react-router';

function Fiche() {

    const navigate = useNavigate();
    const [isNotFinished,setIsNotFinished] = useState(true);
    const [signalement, setSignalement] = useState(null);

    const toCarteBtn = () => {
      navigate("/home");
    };

    let {id} = useParams();

    useEffect(() => {
      getSignalementById();
    },[]);

    const getSignalementById = () =>{
      api.get("/signalementdetails/"+id,{
        headers:{
          "Content-Type": "application/json",
          Authorization: "Bearer "+localStorage.getItem('token')
        }
      }).then((res)=>{
        setSignalement(res.data);
      });
    }

    const traiter = () => {
      console.log(signalement);
      api.put("/signalements/"+id,null,{
        headers:{
        "Content-Type": "application/json",
          Authorization: "Bearer "+localStorage.getItem('token')
        }
      }).then((res)=>{
        console.log(res);
        setSignalement(res.data);
      });
    }

  return (
    <Grid>
      <Header />
      <Grid
        item
        md={10}
        style={{
          paddingLeft: "4%",
          fontSize: "95%",
          paddingTop: "1%",
          fontWeight: "bold",
        }}
      >
        Signalement : Fiche
      </Grid>
      <Grid container className="content">
        <Grid item md={12}>
          <Grid style={{ paddingLeft: "30%" }}>
            <img
              src={
                "https://m1.quebecormedia.com/emp/jdx-prod-images/cb689d99-be7d-4bba-b138-b358e6560f22_ORIGINAL.jpg?impolicy=resize&quality=80&width=968"
              }
              style={{ width: "50%", height: "35vh" }}
            />
          </Grid>

          <Grid style={{ paddingLeft: "43%" }}>
            <h3>Signalement</h3>
          </Grid>
          <Grid
            style={{ paddingLeft: "35%", fontSize: "75%", fontWeight: "bold" }}
          >
            <p>Type : {signalement?.type || "Test"}</p>
            <p>Status : {signalement?.status || "tsisy"}</p>
            <p>Date : {signalement?.dateSignalement || "tsisy"}</p>
            <p>Description : {signalement?.description || "tsisy"}</p>
          </Grid>
          <Grid container style={{ paddingTop: "2%" }}>
            <Grid item md={6} style={{ paddingLeft: "30%" }}>
              <input
                type="submit"
                onClick={toCarteBtn}
                value="Carte"
                style={{
                  backgroundColor: "#D7D7D7",
                  color: "#FFF",
                  border: "none",
                  borderRadius: "7px",
                  fontWeight: "bold",
                  height: "6vh",
                  width: "20vh",
                }}
              />
            </Grid>
            { isNotFinished &&
            <Grid item md={6} style={{ paddingLeft: "5%" }}>
              <input
                type="submit"
                value="Traiter"
                onClick={traiter}
                style={{
                  backgroundColor: "#88D4FF",
                  color: "#FFF",
                  border: "none",
                  borderRadius: "7px",
                  fontWeight: "bold",
                  height: "6vh",
                  width: "20vh",
                }}
              />
            </Grid>
            }
          </Grid>
        </Grid>
      </Grid>
      <Footer/>
    </Grid>
  );
}

export default Fiche;
