import Container from '@components/Container'
import PostList from '@components/PostList'
import Footer from '@components/Footer'
import { getAllPosts } from '@lib/blog'
import metadata from '@data/metadata'
import { PostListContainer } from '@components/custom-tw-components'

export default function Blog({ posts }) {
    const customMeta = {
        title: `${metadata.title} - ブログ`
    }
    return (
        <Container page={"blog"} customMeta={customMeta}>
            <PostListContainer>
                <PostList posts={posts}/>
            </PostListContainer>
            <Footer />
        </Container>
    )
}

export async function getStaticProps() {
    const posts = getAllPosts().filter(post => post.lang === "ja")
    return {
        props: {
            posts
        }
    }
}