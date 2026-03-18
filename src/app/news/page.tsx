'use client';

import { useState } from 'react';
import { useForm } from '@formspree/react';
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

const SignupSection = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #e1e9f0;
  border-radius: 8px;
`;

const SignupLink = styled.span`
  color: #0d9488;
  color: #0d9488;
  color: #0d9488;
  text-decoration: underline;
  cursor: pointer;
  font-size: 1rem;
  &:hover { color: #e6c9a0; }
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  max-width: 280px;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
  &:focus { outline: none; border-color: #0d9488; }
`;

const SubmitButton = styled.button`
  background-color: #fddeb4;
  color: #000000;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover { background-color: #e6c9a0; }
`;

const SuccessMessage = styled.p`
  color: #0d9488;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

function NewsletterSignup() {
  const [showForm, setShowForm] = useState(false);
  const [state, handleSubmit] = useForm("mjgajapn");
  
  if (state.succeeded) {
    return <SuccessMessage>Thanks for subscribing! Check your inbox for confirmation.</SuccessMessage>;
  }
  
  if (!showForm) {
    return <SignupLink onClick={() => setShowForm(true)}>Sign up</SignupLink>;
  }
  
  return (
    <SignupForm onSubmit={handleSubmit}>
      <Input type="text" name="name" placeholder="Your name" required />
      <Input type="email" name="email" placeholder="Your email" required />
      <Input type="hidden" name="source" value="Designr.Pro Newsletter" />
      <SubmitButton type="submit" disabled={state.submitting}>Subscribe</SubmitButton>
    </SignupForm>
  );
}

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
        The week's most important tech news - in under 5 minutes. <NewsletterSignup />
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
