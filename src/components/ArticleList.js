import Article from "./Article.js";

function ArticleList(props) {
    const posts = props.posts.map((post, index) => {
        return <Article key={index} title={post.title} date={post.date} preview={post.preview}/>
    })

    return (
        <main>
            {posts}
        </main>
    )
}

export default ArticleList;