import SectionHeader from '../Modular/SectionHeader';
import Comment from './Comment';
import CommentForm from './CommentForm';

const Blog = () => {
    return(
        <>
            <h1>Blog</h1>
            <SectionHeader />
            <Comment />
            <CommentForm />
        </>
    );
};

export default Blog;