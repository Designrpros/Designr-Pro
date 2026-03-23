'use client';

import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const BlogContainer = styled.div`
  padding: 50px 20px;
  background-color: #cad9e4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  width: calc(100% - 40px);
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 30px 10px;
    width: calc(100% - 20px);
  }
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #292a2d;
  background-color: #fddeb4;
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-bottom: 2rem;
`;

const PostCard = styled(Link)`
  display: block;
  background-color: #e1e9f0;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const PostImage = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  background-color: #cbd5e1;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 1.5rem;
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #292a2d;
  margin-bottom: 0.25rem;
  margin-top: 0;
`;

const PostDate = styled.span`
  font-size: 0.85rem;
  color: #666;
  display: block;
  margin-bottom: 0.75rem;
`;

const ExcerptText = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.5;
  margin: 0;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  background-color: #fddeb4;
  color: #292a2d;
  border-radius: 9999px;
`;

export default function Blog() {
  const posts = [
    {
      slug: 'uke-12-2026',
      title: 'Uke 12, 2026 - Maskinene Tar Over, Men Hvem Eier Dem?',
      date: '23. mars 2026',
      image: '/assets/blog/uke-12-2026.jpg',
      excerpt: 'OpenAI kjøper Astral, Cursor Composer 2, Jeff Bezos $100B fond, DarkSword iPhone-exploit, Nord-Korea IT Army, og AI-eierskap.',
      tags: ['AI', 'Sikkerhet', 'Tech']
    }
  ]

  return (
    <BlogContainer>
      <BlogTitle>Blog</BlogTitle>
      
      {posts.map((post) => (
        <PostCard key={post.slug} href={`/blog/${post.slug}`}>
          <PostImage>
            <StyledImage 
              src={post.image} 
              alt={post.title}
              fill
            />
          </PostImage>
          <PostContent>
            <TagContainer>
              {post.tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagContainer>
            
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.date}</PostDate>
            <ExcerptText>{post.excerpt}</ExcerptText>
          </PostContent>
        </PostCard>
      ))}
    </BlogContainer>
  )
}
