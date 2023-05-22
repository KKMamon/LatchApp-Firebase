import { Box, Button, Heading, HStack, Textarea } from "@chakra-ui/react";
import PostsLists from "components/post/PostsList";
import { useAuth } from "hooks/auth";
import { useAddPost, usePosts } from "hooks/posts";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import starter from "../images/Warnin.png";
import Question from "../images/Question.png";
import Questpop from "../images/Questpop.png"
import Doc from "../images/Doc.png";
import Commen from "../images/Commen.png";
import Game from "../images/Game.png";
import BGFirst from "../images/BGFirst.png";
import Video from "../images/Video.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";

function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();

  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
  }

  const navigate = useNavigate();
    const Vides = async (e) => {
        e.preventDefault();
        try {
          navigate("/Video");
        } catch (error) {
          console.log(error.message);
        }
      };

      const handlePopupClick = () => {
        window.open('https://drive.google.com/file/d/1Ug-u8Ne5T0IYZyewF3xTvC1e5sFuEtVU/view?usp=share_link', 'example', 'width=800,height=600');
      };

      const popupgame = async (e)  => {
        e.preventDefault();
        try {
          navigate("/Game");
        } catch (error) {
          console.log(error.message);
        }
      };

      const popupcomment = async (e)  => {
        e.preventDefault();
        try {
          navigate("/Commen1");
        } catch (error) {
          console.log(error.message);
        }
      };

  return (
    /*<Box maxW="600px" mx="auto" py="10">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
          <Heading size="lg">New Post</Heading>
          <Button
            colorScheme="teal"
            type="submit"
            isLoading={authLoading || addingPost}
            loadingText="Loading"
          >
            Post
          </Button>
        </HStack>
        <Textarea
          as={TextareaAutosize}
          resize="none"
          mt="5"
          placeholder="Create a new post..."
          minRows={3}
          {...register("text", { required: true })}
        />
      </form>
    </Box>*/
    <div>
      <div className="BGFirst"><img src={BGFirst} alt="BGFirst" onClick={togglePopup} /></div>
      <div className="Question"><img /*src={Question} alt="question" onClick={togglePopup}*//></div>
          <div className="Video"><img src={Video} alt="Video"onClick={Vides}/></div>
          <div className="Doc"><img src={Doc} alt="Doc" onClick={handlePopupClick} /></div>
          <div className="Game"><img src={Game} alt="Game" onClick={popupgame} /></div>
          <div className="Commen"><img src={Commen} alt="Commen" onClick={popupcomment}/></div>

      
      {showPopup && (
  <Box position="fixed" top="0" left="0" w="100%" h="100%" bg="rgba(0, 0, 0, 0.5)" zIndex="10">
    <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
      <img src={Questpop} alt="Popup image1" style={{ width: '80vw' }} />
      <Button mt="4" position="absolute" right="1rem" top="1rem" onClick={() => setShowPopup(false)}>Close</Button>
    </Box>
  </Box>
)}
    </div>
  );
}

export default function Dashboard() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const { posts, isLoading } = usePosts();

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  if (isLoading) return "Loading posts...";

  return (
    <>
      <NewPost />
      <PostsLists /*posts={posts}*/
      ////////////////////////////////////////////
      />

      {pageLoaded && (
        <Box position="fixed" top="0" left="0" w="100%" h="100%" bg="rgba(0, 0, 0, 0.5)" zIndex="10">
          <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
            <img src={starter} alt="Popup image1" />
            <Button mt="4" onClick={() => setPageLoaded(false)}>Close</Button>
          </Box>
        </Box>
      )}
    </>
  );
}
