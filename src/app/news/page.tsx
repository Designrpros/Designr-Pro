'use client';

import styled from 'styled-components';

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

const NewsContent = styled.div`
  background-color: #e1e9f0;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const NewsText = styled.p`
  font-size: 1.2rem;
  color: #292a2d;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export default function News() {
  return (
    <NewsContainer>
      <NewsTitle>News</NewsTitle>
      <NewsContent>
        <NewsText>
          Coming Soon! Every week, we'll curate the most important tech news from TLDR 
          and summarize the key takeaways for you.
        </NewsText>
        <NewsText>
          Stay tuned for weekly tech updates covering:
        </NewsText>
        <ul>
          <li>AI & Machine Learning developments</li>
          <li>Web development trends</li>
          <li>Mobile app news</li>
          <li>Developer tools</li>
        </ul>
      </NewsContent>
    </NewsContainer>
  );
}
