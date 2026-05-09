import Link from "next/link";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Consistent Communication Strengthens Friendships",
      author: "Sarah Mitchell",
      date: "2026-04-10",
      category: "Friendship",
      thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
      read_time: "5 min read",
      tags: ["communication", "relationships", "friends"],
      excerpt:
        "Staying connected regularly helps friendships grow stronger over time and builds emotional trust.",
      content:
        "Consistent communication is one of the most important parts of maintaining healthy friendships.",
    },
    {
      id: 2,
      title: "5 Simple Ways to Reconnect With Old Friends",
      author: "Daniel Carter",
      date: "2026-03-28",
      category: "Lifestyle",
      thumbnail: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
      read_time: "4 min read",
      tags: ["reconnect", "social life", "friendship"],
      excerpt:
        "Lost touch with someone important? Here are five easy ways to reconnect naturally.",
      content: "Reconnecting with old friends does not need to feel awkward.",
    },
    {
      id: 3,
      title: "How Technology Helps Maintain Long-Distance Friendships",
      author: "Emily Johnson",
      date: "2026-04-01",
      category: "Technology",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      read_time: "6 min read",
      tags: ["technology", "video calls", "social apps"],
      excerpt:
        "Modern apps and video calls make staying connected easier than ever before.",
      content:
        "Long-distance friendships can still thrive with the help of technology.",
    },
    {
      id: 4,
      title: "The Importance of Emotional Support in Friendship",
      author: "Michael Lee",
      date: "2026-02-19",
      category: "Mental Health",
      thumbnail: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
      read_time: "7 min read",
      tags: ["support", "mental health", "care"],
      excerpt:
        "Good friends provide comfort, encouragement, and emotional stability during hard times.",
      content: "Emotional support is a major reason why friendships matter.",
    },
    {
      id: 5,
      title: "Building Better Social Habits in a Busy Life",
      author: "Olivia Brown",
      date: "2026-03-12",
      category: "Productivity",
      thumbnail: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a",
      read_time: "5 min read",
      tags: ["habits", "time management", "social"],
      excerpt:
        "Even with a busy schedule, small habits can help maintain meaningful friendships.",
      content: "Modern life often becomes busy with work and responsibilities.",
    },
    {
      id: 6,
      title: "Why Face-to-Face Conversations Still Matter",
      author: "James Walker",
      date: "2026-01-25",
      category: "Communication",
      thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      read_time: "4 min read",
      tags: ["conversation", "real life", "human connection"],
      excerpt:
        "Digital communication is useful, but in-person conversations build deeper emotional connections.",
      content: "Meeting friends in person creates stronger emotional memories.",
    },
  ];

  return (
    <div>
      <h2>Blogs Page</h2>
      {blogs.map((blog) => (
        <div className="w-10/12 mx-auto space-y-3" key={blog.id}>
          <h2 className="text-3xl ">{blog.title}</h2>
          <Link href={`/blogs/${blog.id}`}>Show Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
