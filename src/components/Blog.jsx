// src/components/Blog.js
import React, { useState } from 'react';
import '../styles/Blogs.css'; // Import your CSS file for styling

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Benefits of Ayurveda for Stress Relief',
      date: 'October 5, 2024',
      description: 'Explore how Ayurvedic practices can help alleviate stress and promote relaxation.',
      image: 'https://th.bing.com/th/id/OIP.lbFLRg0GgtXWzKeqYz9UdwHaD3?w=302&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
      content: (
        <div>
          <p>
            Ayurveda offers holistic solutions for managing stress. By balancing mind, body, and spirit, you can alleviate stress naturally. Learn how herbs like Ashwagandha, mindfulness techniques, and a structured daily routine can help you de-stress.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Ayurvedic Diet: Foods to Nourish Your Body',
      date: 'September 28, 2024',
      image: 'https://th.bing.com/th/id/OIP.aEsGnU96daU_GwA_PjIgowHaEK?w=299&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
      content: (
        <div>
          <p>
            Ayurveda promotes a diet based on your dosha type. Learn how to choose foods that balance your body, such as fresh fruits, whole grains, and warm herbal teas, while avoiding processed foods that can upset your natural harmony.
          </p>
        </div>
      ),
    },
    // Add more blog posts here
  ];

  const [expandedBlog, setExpandedBlog] = useState(blogPosts[0].id);

  const handleToggle = (id) => {
    if (expandedBlog === id) {
      setExpandedBlog(null);
    } else {
      setExpandedBlog(id);
    }
  };

  return (
    <div className="blog-wrapper">
      
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h4>{post.title}</h4>
              <p>{post.date}</p>
              {expandedBlog === post.id ? (
                <div>
                  {post.content}
                  <button className="read-more" onClick={() => handleToggle(post.id)}>
                    Read Less
                  </button>
                </div>
              ) : (
                <div>
                  <p>{post.description}</p>
                  <button className="read-more" onClick={() => handleToggle(post.id)}>
                    Read More
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
