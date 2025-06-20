import { Container,PostForm } from "../components";
import appwriteService from '../appwrite/config'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function EditPost(){
    const [post,setPost] = useState(null);
    const {slug} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (slug){
            appwriteService.getPost(slug).then((post) => {
                if (post){
                    setPost(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug,navigate])

    return post ? (
        <div className='w-full py-8'>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ) : null

}