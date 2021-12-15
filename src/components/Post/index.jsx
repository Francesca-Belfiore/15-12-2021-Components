import styles from "./Post.module.scss";

const Post = (props) => {
    const data = props.data || {
        photo: 
        "https://images.unsplash.com/photo-1620481679288-0c3894901bcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
        title: "text",
        author: "User",
        views: "100000",
        date: new Date(), 
    };

    return (
        <article className={styles.post}>

            {data.photo ? <img src={data.photo} alt={data.author} /> : <></> }
            <h3>{data.title}</h3>
            <p>{data.author}</p>
            <p><small>{data.views} - {data.date.toLocaleDateString()}</small></p>
            
        </article>
    );
};

export default Post;