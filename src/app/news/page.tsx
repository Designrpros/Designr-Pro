'use client';

import styled from 'styled-components';
import Link from 'next/link';

const NewsContainer = styled.div`
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

const NewsTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #292a2d;
  background-color: #fddeb4;
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #292a2d;
  background-color: #fddeb4;
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

const NewsCard = styled(Link)`
  background-color: #e1e9f0;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  display: block;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: #292a2d;
  margin-bottom: 0.5rem;
`;

const CardDate = styled.p`
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.75rem;
`;

const Tag = styled.span`
  background-color: #fddeb4;
  color: #292a2d;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-right: 0.25rem;
`;

const newsPosts = [
  {
    slug: 'uke-1',
    title: 'Welcome to Designr.Pro News',
    date: '18. mars 2026',
    tags: ['Intro'],
    excerpt: 'Weekly tech news digest.'
  }
];

export default function News() {
  return (
    <NewsContainer>
      <NewsTitle>News</NewsTitle>
      
      <SectionTitle>Weekly Tech Digest</SectionTitle>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#292a2d' }}>
        The week's most important tech news - in under 5 minutes.
      </p>
      
      <NewsGrid>
        {newsPosts.map(post => (
          <NewsCard key={post.slug} href={`/news/${post.slug}`}>
            <CardTitle>{post.title}</CardTitle>
            <CardDate>{post.date}</CardDate>
            <div style={{ marginBottom: '0.5rem' }}>
              {post.tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: '#555' }}>{post.excerpt}</p>
          </NewsCard>
        ))}
      </NewsGrid>
    </NewsContainer>
  );
}
