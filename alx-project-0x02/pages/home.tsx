import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { PostData } from '@/interfaces';

const Home = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: PostData) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Next.js Application
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our features and create amazing content with our intuitive interface.
          </p>
        </div>

        {/* Card Components Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Featured Cards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="Getting Started"
              content="Learn the basics of our platform and discover how to make the most of all available features."
            />
            <Card
              title="Advanced Features"
              content="Dive deeper into advanced functionalities that will help you create professional-grade content."
            />
            <Card
              title="Community"
              content="Join our thriving community of creators and share your experiences with like-minded individuals."
            />
          </div>
        </section>

        {/* User Posts Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Your Posts
            </h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create New Post
            </button>
          </div>

          {posts.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-500 text-lg">
                No posts yet. Click the button above to create your first post!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  title={post.title}
                  content={post.content}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Post Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default Home;