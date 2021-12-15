import { useState } from "react";
import styles from "./Home.module.scss";
import Post from "../../components/Post";

const posts = [
    {   
        photo: "https://i.ytimg.com/vi/H2VUVpwRsKk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8EopHejYuhIIXNQIUz9syz-Wb5g",
        title: "Frosted Windows - Relaxing & Snowy Nintendo Music",
        author: "Ezonater",
        views: "93.007 visualizzazioni",
        date: new Date(),  
    },
    {   
        photo: "https://i.ytimg.com/vi/gbu4r5sOCQs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcd2nvQzJwWEq5Xy5LUtR9xL35Ew",
        title: "FUN 'N' FANTASY VII Remake (Final Fantasy 7 Remake Parody)",
        author: "Matthew Shezmen",
        views: "1 Mln di visualizzazioni",
        date: new Date(),  
    },
    {   
        photo: "https://i.ytimg.com/vi/FlckzMKNZW0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBd_JztLkkZsDU6MeKdauaCBTs4Qw",
        title: "Halloween at Home ~ Lo-fi for Witches (Only) [lofi / calm / chill beats]",
        author: "Nancy P Ellis",
        views: "107.099 visualizzazioni",
        date: new Date(),  
    },
    {   
        photo: "https://i.ytimg.com/vi/7Ks82gn2BqU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSBHNaSfOaxJnz5Zsio8_pZACOvA",
        title: "Danny Baranowsky - Crypt Of The Necrodancer OST - full album (2015)",
        author: "Psychedelic Angel",
        views: "203.000 visualizzazioni",
        date: new Date(),  
    },
    {   
        photo: "https://i.ytimg.com/vi/acsLxmnjMho/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdanFqwS79rRHKdDV9vHrgHDv0uQ",
        title: "Magic Bookstore in the Woods - Vol.2 - Iroh's Bookstore",
        author: "The Vault of Ambience",
        views: "262.064 visualizzazioni",
        date: new Date(),  
    },
    {   
        photo: "https://i.ytimg.com/vi/aam9VvzFuI0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2c5R5a68NXbSOUNVcve3E4Z_pDQ",
        title: "DOOM Eternal OST Remix (Remastered Soundtrack)",
        author: "the_kovic",
        views: "5,5 Mln di visualizzazioni",
        date: new Date(),  
    },

];

const Home = () => {

    const [allPosts, setAllPosts] = useState(posts);

    return (
        <div className={styles.home}>
        <ul>
            <li><a href="#">tutti</a></li>
            <li><a href="#">musica</a></li>
            <li><a href="#">live</a></li>
            <li><a href="#">animazione</a></li>
            <li><a href="#">mix</a></li>
            <li><a href="#">videogiochi</a></li>
            <li><a href="#">sketch</a></li>
            <li><a href="#">recenti</a></li>
            <li><a href="#">guardati</a></li>
            <li><a href="#">novità</a></li>
        </ul>

        <section>
            {allPosts.map((post, index) => (
                <Post key={index} data={post} />
            ))}
        </section>
        </div>
    );
};

export default Home;