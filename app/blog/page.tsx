import { posts } from '#site/content';
import { PostItem } from '@/components/post-item';
import { sortPosts } from '@/lib/utils';

export default function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = posts;

  return (
    <div>
      <div>
        <div>
          <h1>Blog</h1>
          <p>My ramblings on all things.</p>
        </div>
      </div>
      <hr />
      {displayPosts?.length > 0 ? (
        <ul>
          {displayPosts.map((post) => {
            const { slug, date, title, description } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see here</p>
      )}
    </div>
  );
}
