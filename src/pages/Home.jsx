import { useSelector } from 'react-redux';
import appwriteSerive from '../appwrite/config'
import { Container,PostCard } from '../components'
import { useEffect, useState } from 'react'

export default function Home(){

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        appwriteSerive.getPosts([]).then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        }).catch((error) => {
            setPosts([]);
        })
    },[useSelector(state => state.auth.status)])

    if (posts.length === 0){ // When there is no Post to show --> Show this message
        return(
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                Login to read Posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return( // When there are Posts to show --> Show all the posts
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4 animate-mymove'>
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}