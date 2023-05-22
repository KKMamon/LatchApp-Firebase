import img1 from '../images/Untitled-1_01.gif'
import imgs2 from '../images/Untitled-1_02.gif'
import imgs3 from '../images/Untitled-1_03.gif'
import imgs4 from '../images/Untitled-1_04.gif'
import imgs5 from '../images/Untitled-1_05.gif'
import imgs6 from '../images/Untitled-1_06.gif'
import imgs7 from '../images/Untitled-1_07.gif'
import imgs8 from '../images/Untitled-1_08.gif'
import imgs9 from '../images/Untitled-1_09.gif'
import imgs10 from '../images/Untitled-1_10.gif'
import imgs11 from '../images/Untitled-1_11.jpg'
import choose1 from '../images/choose_02.gif'
import choose2 from '../images/choose_03.gif'
import choose3 from '../images/choose_04.gif'
import choose4 from '../images/choose_05.gif'
import choose5 from '../images/choose_06.gif'
import choose6 from '../images/choose_07.gif'
import choose7 from '../images/choose_08.gif'
import choose8 from '../images/choose_09.gif'
import choose9 from '../images/choose_10.gif'
import choose10 from '../images/choose_11.gif'
import commen_02 from '../images/commen_02.jpg'
import './commen.css'
import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, HStack, Textarea } from "@chakra-ui/react";
import { Flex, Link } from "@chakra-ui/react";
import { Navigate } from 'react-router-dom'
import { Link as RouterLink } from "react-router-dom";
import { DASHBOARD } from "lib/routes";

function Comment() {

  const [img2, setImageSrcA] = useState(imgs2);
  const [img3, setImageSrcB] = useState(imgs3);
  const [img4, setImageSrcC] = useState(imgs4);
  const [img5, setImageSrcD] = useState(imgs5);
  const [img6, setImageSrcE] = useState(imgs6);
  const [img7, setImageSrcF] = useState(imgs7);
  const [img8, setImageSrcG] = useState(imgs8);
  const [img9, setImageSrcH] = useState(imgs9);
  const [img10, setImageSrcI] = useState(imgs10);
  const [img11, setImageSrcJ] = useState(imgs11);
  const [answer, setAnswer] = useState('');

  const [popupVisible, setPopupVisible] = useState(false);
  const [fieldValue, setFieldValue] = useState('');

  useEffect(() => {

  },);

  const handleClickComm = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', fieldValue);
    alert('ขอบคุณที่แสดงความคิดเห็นให้กับเรา!!')
    closePopup();
  };


  function handleClickA() {
    setImageSrcA(choose1);
    setImageSrcB(imgs3);
    setImageSrcC(imgs4);
    setImageSrcD(imgs5);
    setImageSrcE(imgs6);
    setImageSrcF(imgs7);
    setImageSrcG(imgs8);
    setImageSrcH(imgs9);
    setImageSrcI(imgs10);
    setImageSrcJ(imgs11);
    setAnswer('1');
  }

  function handleClickB() {
    setImageSrcA(imgs2);
    setImageSrcB(choose2);
    setImageSrcC(imgs4);
    setImageSrcD(imgs5);
    setImageSrcE(imgs6);
    setImageSrcF(imgs7);
    setImageSrcG(imgs8);
    setImageSrcH(imgs9);
    setImageSrcI(imgs10);
    setImageSrcJ(imgs11);
    setAnswer('2');
  }

  function handleClickC() {
    setImageSrcA(imgs2);
    setImageSrcB(imgs3);
    setImageSrcC(choose3);
    setImageSrcD(imgs5);
    setImageSrcE(imgs6);
    setImageSrcF(imgs7);
    setImageSrcG(imgs8);
    setImageSrcH(imgs9);
    setImageSrcI(imgs10);
    setImageSrcJ(imgs11);
    setAnswer('3');
  }

  function handleClickD() {
    setImageSrcA(imgs2);
    setImageSrcB(imgs3);
    setImageSrcC(imgs4);
    setImageSrcD(choose4);
    setImageSrcE(imgs6);
    setImageSrcF(imgs7);
    setImageSrcG(imgs8);
    setImageSrcH(imgs9);
    setImageSrcI(imgs10);
    setImageSrcJ(imgs11);
    setAnswer('4');
  }

  function handleClickE() {
    setImageSrcA(imgs2);
    setImageSrcB(imgs3);
    setImageSrcC(imgs4);
    setImageSrcD(imgs5);
    setImageSrcE(choose5);
    setImageSrcF(imgs7);
    setImageSrcG(imgs8);
    setImageSrcH(imgs9);
    setImageSrcI(imgs10);
    setImageSrcJ(imgs11);
    setAnswer('5');
  }

  function handleClickF() {
    setImageSrcA(imgs2);
    setImageSrcB(imgs3);
    setImageSrcC(imgs4);
    setImageSrcD(imgs5);
    setImageSrcE(imgs6);
    setImageSrcF(choose6);
    setImageSrcG(imgs8);
    setImageSrcH(imgs9);
    setImageSrcI(imgs10);
    setImageSrcJ(imgs11);
    setAnswer('6');
  }

  function handleClickG() {
    setImageSrcA(imgs2);
    setImageSrcB(imgs3);
    setImageSrcC(imgs4);
    setImageSrcD(imgs5);
    setImageSrcE(imgs6);
    setImageSrcF(imgs7);
    setImageSrcG(choose7);
    setImageSrcH(imgs9);
    setImageSrcI(imgs10);
    setImageSrcJ(imgs11);
    setAnswer('7');
  }

  function handleClickH() {
    setImageSrcA(imgs2);
    setImageSrcB(imgs3);
    setImageSrcC(imgs4);
    setImageSrcD(imgs5);
    setImageSrcE(imgs6);
    setImageSrcF(imgs7);
    setImageSrcG(imgs8);
    setImageSrcH(choose8);
    setImageSrcI(imgs10);
    setImageSrcJ(imgs11);
    setAnswer('8');
  }

  function handleClickI() {
    setImageSrcA(imgs2);
    setImageSrcB(imgs3);
    setImageSrcC(imgs4);
    setImageSrcD(imgs5);
    setImageSrcE(imgs6);
    setImageSrcF(imgs7);
    setImageSrcG(imgs8);
    setImageSrcH(imgs9);
    setImageSrcI(choose9);
    setImageSrcJ(imgs11);
    setAnswer('9');
  }

  function handleClickJ() {
    setImageSrcA(imgs2);
    setImageSrcB(imgs3);
    setImageSrcC(imgs4);
    setImageSrcD(imgs5);
    setImageSrcE(imgs6);
    setImageSrcF(imgs7);
    setImageSrcG(imgs8);
    setImageSrcH(imgs9);
    setImageSrcI(imgs10);
    setImageSrcJ(choose10);
    setAnswer('10');
  }

  return (
    <div onSubmit={handleSubmit}>
      <img src={img1} alt='img1'></img>
      <div class="image-row">
      <img src={img2} alt='img2' onClick={handleClickA} onChange={event => setAnswer(event.target.value)}/>
      <img src={img3} alt='img3' onClick={handleClickB} onChange={event => setAnswer(event.target.value)}/>
      <img src={img4} alt='img4' onClick={handleClickC} onChange={event => setAnswer(event.target.value)}/>
      <img src={img5} alt='img5' onClick={handleClickD} onChange={event => setAnswer(event.target.value)}/>
      <img src={img6} alt='img6' onClick={handleClickE} onChange={event => setAnswer(event.target.value)}/>
      <img src={img7} alt='img7' onClick={handleClickF} onChange={event => setAnswer(event.target.value)}/>
      <img src={img8} alt='img8' onClick={handleClickG} onChange={event => setAnswer(event.target.value)}/>
      <img src={img9} alt='img9' onClick={handleClickH} onChange={event => setAnswer(event.target.value)}/>
      <img src={img10} alt='img10' onClick={handleClickI} onChange={event => setAnswer(event.target.value)}/>
      <img src={img11} alt='img11' onClick={handleClickJ} onChange={event => setAnswer(event.target.value)}/>
      </div>
      <img src={commen_02} alt='img12' onClick={handleClickComm} />

      {popupVisible && (
      <Box position="fixed" top="0" left="0" w="100%" h="100%" bg="rgba(0, 0, 0, 0.5)" zIndex="10">
      <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="แสดงความคิดเห็นของคุณที่นี่"
                value={fieldValue}
                onChange={(e) => setFieldValue(e.target.value)}
                style={{ width: '500px', height: '200px', fontSize: '16px' }}
              />
              <Button ml="4" type="submit" >Submit</Button>
          /</form>
    </Box>
  </Box>
)}

<Link color="teal" as={RouterLink} to={DASHBOARD} fontWeight="bold">
    กลับสู่หน้าหลัก
  </Link>
    </div>

  );
}

export default Comment;
