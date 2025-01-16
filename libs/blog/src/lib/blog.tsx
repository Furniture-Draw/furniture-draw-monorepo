'use client';
import { Navigation } from "@furniture-draw/navigation";
import { Pinterest } from "@mui/icons-material";
import { Twitter, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

type SocialIconType = "facebook" | "twitter" | "linkedin" | "instagram" | "youtube";

interface SocialLinkProps {
  icon: SocialIconType;
  href: string;
}

interface BlogPost {
  id: number;
  title: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    image: "https://w7.pngwing.com/pngs/69/553/png-transparent-3d-floor-plan-house-plan-cottage-mattresse-angle-furniture-plan.png",
  },
  {
    id: 2,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    image: "/path-to-venice-image.jpg",
  },
  {
    id: 3,
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    image: "/path-to-car-image.jpg",
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
              <h2 className="text-xl font-semibold text-gray-800">Rıfat Sargın</h2>
              <p className="text-gray-600 max-w-md mt-2">Orta Doğu Teknik Üniversitesi </p>
              <p className="text-gray-600 max-w-md mt-2">Yüksek İnşaat Mühendisi </p>
              <p className="text-gray-600 max-w-md mt-2">Mobilya Tasarım Uzmanı </p>
              <p className="text-gray-600 max-w-md mt-2">Mobilyaplan CEO </p>

              
              <div className="social-links flex space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/groups/1178306172343439"
                  className="social-link"
                >
                  <Facebook size={20} className="social-icon" />
                </a>
                <a href="#" className="social-link">
                  <Twitter size={20} className="social-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rifat-sargin/"
                  className="social-link"
                >
                  <Linkedin size={20} className="social-icon" />
                </a>
                <a
                  href="https://www.instagram.com/mobilyaplan/?hl=tr"
                  className="social-link"
                >
                  <Instagram size={20} className="social-icon" />
                </a>
                <a
                  href="https://www.youtube.com/@mobilyaplan"
                  className="social-link"
                >
                  <Youtube size={20} className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

       
        <div className="blog-posts-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="blog-card bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                </div>
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
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