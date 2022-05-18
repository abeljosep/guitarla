import { useRouter } from "next/router";
import Layout from "../components/Layout";

const BlogEntrie = ({ post }) => {
  const navigation = useRouter();
  const { query } = navigation;
  console.log(post);
  return <Layout>[id]</Layout>;
};

export async function getStaticPaths() {
  const url = `http://localhost:1337/blogs/`;
  const res = await fetch(url);
  const posts = await res.json();
  const paths = posts.map((post) => ({ params: { id: post.id } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:1337/blogs/${params.id}`);
  const post = await res.json();

  return {
    props: { post },

    revalidate: 1,
  };
}

export default BlogEntrie;
