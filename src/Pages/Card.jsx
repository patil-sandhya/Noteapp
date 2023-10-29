import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Card = ({ _id,title,body }) => {
  //const [curqty, setQty]= useState(1)
  const params = useParams()
  let {id} = params.id

const navigate = useNavigate();
 
  const handleUpdate = (val)=>{
    console.log("ad")
    navigate(`/updateblog/${_id}`)
    let payload = {
      title,body
    }
    localStorage.setItem("updateItem", JSON.stringify(payload))
  }
  const handleDlt = ()=>{
    fetch(`https://aggressive-cyan-crown.cyclic.app/note/notes/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <CardContainer>
      <ProductInfo>
        <ProductDetails>
        <h3>{title}</h3>
          <p>{body}</p>
          <QtyBtn>
          <QuantityButton onClick={handleUpdate}>Update</QuantityButton>
          </QtyBtn>
        </ProductDetails>
      </ProductInfo>
        <DeleteButton onClick={handleDlt}>Delete</DeleteButton>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: auto;
  border-radius: 5px;
  background-color: #f2f2f2;

`;

const ProductInfo = styled.div`
  display: flex;
`;

const ProductImage = styled.img`
  width: 170px;
  height: 170px;
  margin-right: 10px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* border: 1px solid red; */
  h3{
      margin-bottom: 6px;
    }
    p{
    margin-bottom: 2px;
      margin-top: 2px;
    }
`;

const QuantityButton = styled.button`
  background-color: black;
  color: #fff;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: black;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  position: absolute;
  top: 10px; 
  right: 10px; 
`;

const QtyBtn =  styled.div`
    display:flex;
    justify-content:center;
    margin-left: 0px;
    padding-left: 0px;
    margin-top: 10px;
`;