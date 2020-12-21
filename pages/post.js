

const Post = ({data}) => {
  
    return <p>Post: {data.title}</p>
}

export async function getStaticProps(context) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    const data = await res.json();

    return {
        props: { data }
    }
}

export default Post;