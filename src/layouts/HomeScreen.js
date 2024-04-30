
import React, {useEffect, useState} from 'react';
import './homeScreen.css';
import { Stack } from "../components/stack"
import styled from "@emotion/styled"
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBSwitch,
  MDBTypography,
} from "mdb-react-ui-kit";
import {parse, stringify, toJSON, fromJSON} from 'flatted';
import Swal from 'sweetalert2';



export default function HomeScreen() {
  const Wrapper = styled(Stack)`
    background: #1f2937;
  `


  const Item = styled.div`
    background: #f9fafb;
    width: 325px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    text-shadow: 0 10px 10px #d1d5db;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    transform: ${() => {
      let rotation = Math.random() * (5 - -5) + -5
      return `rotate(${rotation}deg)`
    }};
  `


  
  let cards2 = JSON.parse(localStorage.getItem('cards2'));
  let cards = [{id:1, name:'🧇', pic:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"},
               {id:2, name:'🥞', pic:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"},
               {id:3, name:'🍩', pic:"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"}];
  let matches = [];
  return (
    <div className="HomeScreen" style={{height: '70vh'}}>
      <Wrapper onVote={(item, vote) => {

          cards.splice(cards.length-1,1);
          console.log(cards);
          localStorage.removeItem("cards2");
          localStorage.setItem('cards2', JSON.stringify(cards));

          if(vote) {
            // console.log(item.props, vote);
            // console.log(item.props.children, vote);
            // console.log(item.props.data, vote);
            matches.push({id:item.props.data,name:item.props.name,pic:item.props.pic});
            // console.log(matches);
            localStorage.setItem('gwtWaffles', JSON.stringify(matches));
            // console.log(item);
            Swal.fire('You Have A New Match!!');

          }
        }}>
        {cards2 ? cards2.map((card,i) => {
          return (
            
             <Item data-value={card.id} name={card.name} pic={card.pic} key={i} whileTap={{ scale: 1.15 }}>
                  <MDBCardImage
                    style={{display: 'flex', justifyContent: 'center'}}
                    className="m-3 shadow-1-strong me-3"
                    src={card.pic}
                    alt="avatar"
                    width="300"
                    height="350"
                  />             
             </Item>
          );
         })
        
         : cards.map((card,i) => {
          return (
            <Item data-value={card.id} name={card.name} pic={card.pic} key={i} whileTap={{ scale: 1.15 }}>
                  <MDBCardImage
                    style={{display: 'flex', justifyContent: 'center'}}
                    className="m-3 shadow-1-strong me-3"
                    src={card.pic}
                    alt="avatar"
                    width="300"
                    height="350"
                  />             
            </Item>
          );
         })
        }
      </Wrapper>
    </div>
  )
}
