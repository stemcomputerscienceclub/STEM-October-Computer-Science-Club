import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Eye, Heart, MessageCircle, Share2, Bookmark, ArrowLeft, ThumbsUp, Send } from 'lucide-react';
import SEO from '../components/SEO';

const ArticleDetail: React.FC = () => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<any[]>([]);

  // Mock article data - in a real app, this would come from an API
  const article = {
    id: 1,
    title: 'Building Modern React Applications with TypeScript',
    content: `
# Introduction

TypeScript has become an essential tool for React developers who want to build robust, maintainable applications. In this comprehensive guide, we'll explore how to leverage TypeScript's powerful type system to create better React applications.

## Why TypeScript with React?

TypeScript brings several advantages to React development:

- **Type Safety**: Catch errors at compile time rather than runtime
- **Better IDE Support**: Enhanced autocomplete, refactoring, and navigation
- **Self-Documenting Code**: Types serve as inline documentation
- **Easier Refactoring**: Confident code changes with type checking

## Setting Up a TypeScript React Project

The easiest way to start a new TypeScript React project is using Create React App:

\`\`\`bash
npx create-react-app my-app --template typescript
cd my-app
npm start
\`\`\`

This creates a new React project with TypeScript configuration already set up.

## Basic Component Types

### Functional Components

Here's how to type a basic functional component:

\`\`\`typescript
import React from 'react';

interface Props {
  name: string;
  age?: number;
  onUpdate: (name: string) => void;
}

const UserProfile: React.FC<Props> = ({ name, age, onUpdate }) => {
  return (
    <div>
      <h2>{name}</h2>
      {age && <p>Age: {age}</p>}
      <button onClick={() => onUpdate(name)}>
        Update
      </button>
    </div>
  );
};

export default UserProfile;
\`\`\`

### Component with State

For components with state, you can type the state interface:

\`\`\`typescript
import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const addUser = (user: User) => {
    setUsers(prev => [...prev, user]);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
\`\`\`

## Advanced Patterns

### Generic Components

You can create reusable components with generics:

\`\`\`typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage
const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];

<List
  items={users}
  renderItem={(user) => <span>{user.name}</span>}
/>
\`\`\`

### Custom Hooks

Type your custom hooks for better reusability:

\`\`\`typescript
import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error.message });
      }
    };

    fetchData();
  }, [url]);

  return state;
}
\`\`\`

## Best Practices

1. **Use Interfaces Over Types**: Prefer interfaces for object shapes as they're more extensible
2. **Strict Mode**: Enable strict mode in tsconfig.json for better type checking
3. **Avoid Any**: Use specific types instead of 'any' whenever possible
4. **Union Types**: Use union types for props that can accept multiple types
5. **Optional Properties**: Use optional properties (?) for non-required props

## Common Pitfalls

### Event Handlers

Be specific about event types:

\`\`\`typescript
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Handle form submission
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};
\`\`\`

### Ref Types

Type your refs correctly:

\`\`\`typescript
const inputRef = useRef<HTMLInputElement>(null);

const focusInput = () => {
  inputRef.current?.focus();
};
\`\`\`

## Conclusion

TypeScript significantly improves the React development experience by providing type safety, better tooling, and more maintainable code. Start with basic typing and gradually adopt more advanced patterns as you become comfortable with the type system.

The investment in learning TypeScript pays off quickly in terms of reduced bugs, improved developer experience, and easier code maintenance. Whether you're building a small project or a large-scale application, TypeScript with React is a powerful combination that will make you a more productive developer.

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
    `,
    author: 'Ahmed Mohamed',
    authorAvatar: '/imgs/members/ahmed.jpg',
    authorBio: 'Full-stack developer with 5+ years of experience in React and TypeScript. Passionate about building scalable web applications.',
    publishDate: '2024-01-15',
    readTime: 8,
    category: 'web-dev',
    tags: ['React', 'TypeScript', 'Frontend', 'JavaScript'],
    image: '/imgs/Articles/react-typescript.jpg',
    views: 1250,
    likes: 89,
    commentsCount: 23,
    featured: true,
    trending: true
  };

  const relatedArticles = [
    {
      id: 2,
      title: 'Advanced React Hooks Patterns',
      author: 'Sara Ahmed',
      publishDate: '2024-01-10',
      readTime: 6,
      image: '/imgs/Articles/react-hooks.jpg'
    },
    {
      id: 3,
      title: 'State Management with Redux Toolkit',
      author: 'Omar Hassan',
      publishDate: '2024-01-08',
      readTime: 10,
      image: '/imgs/Articles/redux-toolkit.jpg'
    },
    {
      id: 4,
      title: 'Testing React Components',
      author: 'Fatima Ali',
      publishDate: '2024-01-05',
      readTime: 7,
      image: '/imgs/Articles/react-testing.jpg'
    }
  ];

  const mockComments = [
    {
      id: 1,
      author: 'Youssef Mahmoud',
      avatar: '/imgs/members/youssef.jpg',
      content: 'Great article! The TypeScript examples are really helpful. I\'ve been struggling with typing custom hooks, and your example cleared things up.',
      date: '2024-01-16',
      likes: 12,
      replies: [
        {
          id: 11,
          author: 'Ahmed Mohamed',
          avatar: '/imgs/members/ahmed.jpg',
          content: 'Thanks! I\'m glad it helped. Custom hooks can be tricky at first, but once you get the hang of it, they become very powerful.',
          date: '2024-01-16',
          likes: 5
        }
      ]
    },
    {
      id: 2,
      author: 'Nour Ibrahim',
      avatar: '/imgs/members/nour.jpg',
      content: 'This is exactly what I needed! I\'m transitioning from JavaScript to TypeScript and this guide is perfect. The generic components section is particularly useful.',
      date: '2024-01-16',
      likes: 8,
      replies: []
    },
    {
      id: 3,
      author: 'Karim Mostafa',
      avatar: '/imgs/members/karim.jpg',
      content: 'Could you do a follow-up article on TypeScript with React Router? I\'m having trouble typing the route parameters correctly.',
      date: '2024-01-17',
      likes: 6,
      replies: []
    }
  ];

  useEffect(() => {
    setComments(mockComments);
  }, [mockComments]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could show a toast notification here
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        author: 'Current User',
        avatar: '/imgs/members/default.jpg',
        content: comment,
        date: new Date().toISOString().split('T')[0],
        likes: 0,
        replies: []
      };
      setComments([...comments, newComment]);
      setComment('');
    }
  };

  const renderContent = (content: string) => {
    // Simple markdown-like rendering
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold mb-6 text-secondary-900 dark:text-white">{line.slice(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mb-4 mt-8 text-secondary-900 dark:text-white">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold mb-3 mt-6 text-secondary-900 dark:text-white">{line.slice(4)}</h3>;
      }
      if (line.startsWith('```')) {
        return null; // Handle code blocks separately
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-6 mb-2 text-secondary-700 dark:text-secondary-300">{line.slice(2)}</li>;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="mb-4 text-secondary-700 dark:text-secondary-300 leading-relaxed">{line}</p>;
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title={article.title}
        description={article.excerpt || "Learn programming concepts and best practices from our educational articles and tutorials."}
        url={`/articles/${article.id}`}
        image={article.image || "/imgs/articles-hero.png"}
      />
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/articles"
          className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="mb-6">
            <div className="flex flex-wrap items-center space-x-2 mb-4">
              {article.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full">
                  {tag}
                </span>
              ))}
              {article.trending && (
                <span className="px-3 py-1 text-sm bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-full">
                  Trending
                </span>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <img
                  src={article.authorAvatar}
                  alt={article.author}
                  className="w-12 h-12 rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(article.author)}&background=3b82f6&color=fff&size=48`;
                  }}
                />
                <div>
                  <div className="font-semibold text-secondary-900 dark:text-white">{article.author}</div>
                  <div className="flex items-center space-x-4 text-sm text-secondary-600 dark:text-secondary-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.publishDate)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-secondary-600 dark:text-secondary-400">
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{article.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{article.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{article.commentsCount}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="relative h-64 md:h-96 overflow-hidden rounded-2xl mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/imgs/undraw_code_thinking_re_gka2.svg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.header>

        {/* Article Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-between p-4 bg-secondary-50 dark:bg-secondary-800 rounded-xl mb-8"
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                liked
                  ? 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                  : 'bg-white dark:bg-secondary-700 text-secondary-600 dark:text-secondary-400 hover:bg-red-50 dark:hover:bg-red-900/10'
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
              <span>{liked ? 'Liked' : 'Like'}</span>
            </button>
            
            <button
              onClick={handleBookmark}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                bookmarked
                  ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'bg-white dark:bg-secondary-700 text-secondary-600 dark:text-secondary-400 hover:bg-blue-50 dark:hover:bg-blue-900/10'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
              <span>{bookmarked ? 'Saved' : 'Save'}</span>
            </button>
          </div>
          
          <button
            onClick={handleShare}
            className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-secondary-700 text-secondary-600 dark:text-secondary-400 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-600 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg max-w-none mb-12"
        >
          <div className="text-lg leading-relaxed">
            {renderContent(article.content)}
          </div>
        </motion.div>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="card p-6 mb-12"
        >
          <div className="flex items-start space-x-4">
            <img
              src={article.authorAvatar}
              alt={article.author}
              className="w-16 h-16 rounded-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(article.author)}&background=3b82f6&color=fff&size=64`;
              }}
            />
            <div>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                About {article.author}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                {article.authorBio}
              </p>
              <Link
                to={`/members/${article.author.toLowerCase().replace(' ', '-')}`}
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              >
                View Profile →
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Comments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
            Comments ({comments.length})
          </h3>
          
          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="card p-6 mb-8">
            <div className="flex space-x-4">
              <img
                src="/imgs/members/default.jpg"
                alt="Your avatar"
                className="w-10 h-10 rounded-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=User&background=3b82f6&color=fff&size=40`;
                }}
              />
              <div className="flex-grow">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="w-full p-3 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-white dark:bg-secondary-700 text-secondary-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  rows={3}
                />
                <div className="flex justify-end mt-3">
                  <button
                    type="submit"
                    disabled={!comment.trim()}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Post Comment</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
          
          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="card p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={comment.avatar}
                    alt={comment.author}
                    className="w-10 h-10 rounded-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.author)}&background=3b82f6&color=fff&size=40`;
                    }}
                  />
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-secondary-900 dark:text-white">
                        {comment.author}
                      </span>
                      <span className="text-sm text-secondary-500 dark:text-secondary-400">
                        {formatDate(comment.date)}
                      </span>
                    </div>
                    <p className="text-secondary-700 dark:text-secondary-300 mb-3">
                      {comment.content}
                    </p>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-sm text-secondary-500 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{comment.likes}</span>
                      </button>
                      <button className="text-sm text-secondary-500 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400">
                        Reply
                      </button>
                    </div>
                    
                    {/* Replies */}
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="mt-4 ml-6 space-y-4">
                        {comment.replies.map((reply: any) => (
                          <div key={reply.id} className="flex items-start space-x-3">
                            <img
                              src={reply.avatar}
                              alt={reply.author}
                              className="w-8 h-8 rounded-full"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(reply.author)}&background=3b82f6&color=fff&size=32`;
                              }}
                            />
                            <div className="flex-grow">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-medium text-secondary-900 dark:text-white text-sm">
                                  {reply.author}
                                </span>
                                <span className="text-xs text-secondary-500 dark:text-secondary-400">
                                  {formatDate(reply.date)}
                                </span>
                              </div>
                              <p className="text-sm text-secondary-700 dark:text-secondary-300 mb-2">
                                {reply.content}
                              </p>
                              <button className="flex items-center space-x-1 text-xs text-secondary-500 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400">
                                <ThumbsUp className="w-3 h-3" />
                                <span>{reply.likes}</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.id}
                to={`/articles/${relatedArticle.id}`}
                className="card overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="h-32 overflow-hidden">
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/imgs/undraw_code_thinking_re_gka2.svg';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {relatedArticle.title}
                  </h4>
                  <div className="flex items-center justify-between text-sm text-secondary-500 dark:text-secondary-400">
                    <span>{relatedArticle.author}</span>
                    <span>{relatedArticle.readTime}m read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default ArticleDetail;