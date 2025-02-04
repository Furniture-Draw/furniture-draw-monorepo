'use client';

import { Navigation } from '@furniture-draw/navigation';
import { X } from 'lucide-react';
import {
  SiFacebook,
  SiInstagram,
  SiYoutube,
} from '@icons-pack/react-simple-icons';
import { FaLinkedin } from 'react-icons/fa';

interface BlogPost {
  id: number;
  title: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Role of Technology in Modern Furniture Design',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
  },
  {
    id: 2,
    title: 'Sustainable Furniture Production and Environment',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013',
  },
  {
    id: 3,
    title: 'Smart Furniture Solutions for Small Spaces',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
  },
];

export const Blog = () => {
  return (
    <div>
      <Navigation />
      <div className="blog-container">
        <div className="profile-container mb-12">
          <div className="flex items-center max-w-3xl mx-auto space-x-6">
            <div className="profile-image w-32 h-32 flex-shrink-0">
              <img
                src="https://static.wixstatic.com/media/b16623_5728a8b8cdd4476c8ce15a7a93e9da76~mv2.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>

            <div className="profile-text">
              <h2 className="text-xl font-semibold text-gray-800">
                Rıfat Sargın
              </h2>
              <p className="text-gray-600 max-w-md mt-2">
                Middle East Technical University{' '}
              </p>
              <p className="text-gray-600 max-w-md mt-2">
                Master of Civil Engineering{' '}
              </p>
              <p className="text-gray-600 max-w-md mt-2">
                Furniture Design Specialist{' '}
              </p>
              <p className="text-gray-600 max-w-md mt-2">Mobilyaplan CEO </p>

              <div className="social-links flex space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/groups/1178306172343439"
                  className="social-link"
                >
                  <SiFacebook className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <X size={20} className="social-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rifat-sargin/"
                  className="social-link"
                >
                  <FaLinkedin size={20} className="social-icon" />
                </a>
                <a
                  href="https://www.instagram.com/mobilyaplan/?hl=tr"
                  className="social-link"
                >
                  <SiInstagram size={20} className="social-icon" />
                </a>
                <a
                  href="https://www.youtube.com/@mobilyaplan"
                  className="social-link"
                >
                  <SiYoutube size={20} className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-posts-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="blog-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-600">
                    {post.title}
                  </h3>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      March 12, 2024
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
