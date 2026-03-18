'use client';

import styled from 'styled-components';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const PostContainer = styled.div`
  padding: 50px 20px;
  background-color: #cad9e4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 800px;
  margin: 0 auto;
  width: calc(100% - 40px);
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 30px 10px;
    width: calc(100% - 20px);
  }
`;

const PostCard = styled.article`
  background-color: #e1e9f0;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const PostTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #292a2d;
  background-color: #fddeb4;
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const PostDate = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: #fddeb4;
  color: #292a2d;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.85rem;
  margin-right: 0.5rem;
`;

const MarkdownContent = styled.div`
  font-size: 1.1rem;
  color: #292a2d;
  line-height: 1.8;
  
  p {
    margin-bottom: 1rem;
  }
  
  h2 {
    font-size: 1.4rem;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    color: #292a2d;
  }
  
  a {
    color: #0d9488;
    text-decoration: underline;
  }
  
  ul, ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
  }
  
  th, td {
    padding: 0.75rem;
    border: 1px solid #ccc;
    text-align: left;
  }
  
  th {
    background-color: #fddeb4;
    font-weight: 600;
  }
  
  tr:nth-child(even) {
    background-color: #f5f5f5;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  strong {
    font-weight: 700;
    color: #1a1a1a;
  }
  
  hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 2rem 0;
  }
`;

const BackLink = styled(Link)`
  color: #292a2d;
  font-size: 1rem;
  text-decoration: none;
  margin-top: 2rem;
  display: inline-block;
  
  &:hover {
    text-decoration: underline;
  }
`;

const newsPosts: Record<string, { 
  title: string; 
  date: string; 
  tags: string[];
  content: string 
}> = {
  'uke-1': {
    title: 'Welcome to Designr.Pro News',
    date: '18. mars 2026',
    tags: ['Intro', 'Our Sources'],
    content: `
# Velkommen til Designr.Pro News!

Vi har samlet de beste tech-nyhetene fra ukens nyhetsbrev og presenterer dem her for deg.

---

## Hvorfor akkurat disse kildene?

### TLDR Newsletter
**Hva det er:** Et daglig tech-nyhetsbrev som holder deg oppdatert på det viktigste innen programmering, AI og tech.

**Hvorfor vi liker det:**
- Kort og konsist - du får viktigste på under 5 minutter
- Bred dekning av tech-verden
- Ingen hype, bare fakta
- Perfekt for utviklere og tech-entusiaster

**Abonnement:** \`dan@tldrnewsletter.com\` - Sendt daglig

---

### Horizon AI
**Hva det er:** Et uke-brev (3x/uke) fra Gina Costa som fungerer som din personlige AI-forsker og oversetter.

**Hvorfor vi liker det:**
- Fokuserer kun på det viktigste i AI-verden
- 3 minutter lesetid per utgave
- Praktiske verktøy og tutorials
- Personlig stemme - Gina graver selv gjennom nyhetene

**Abonnement:** \`mail@joinhorizon.ai\` - Kom i gang 18. mars 2026

---

## Hva du kan forvente

Hver uke på **Designr.Pro News**:

1. **Topp 3-5 stories** fra TLDR + Horizon AI
2. **Korte oppsummeringer** - ikke mer enn du trenger å vite
3. **Lenker til original** - hvis du vil dykke dypere
4. **Vår vurdering** - hva som faktisk er viktig

---

## Hva dekker vi?

| Kategori | TLDR | Horizon AI |
|----------|------|------------|
| AI & ML | ✅ | ✅✅ (hovedfokus) |
| Web Dev | ✅ | ❌ |
| Mobile | ✅ | ❌ |
| DevOps | ✅ | ❌ |
| Security | ✅ | ✅ |
| Tools | ✅ | ✅ |

---

## Kom i gang

Allerede abonnert? Bra! Vi sjekker begge kildene ukentlig og samler det beste her.

** Neste oppdatering: mandag 24. mars 2026**

---

*Designr.Pro News - Ukens tech-høydepunkter på under 5 minutter*
`
  }
};

export default function NewsPost({ params }: { params: Promise<{ slug: string }> }) {
  const slug = 'uke-1';
  const post = newsPosts[slug] || { 
    title: 'Post not found', 
    date: '', 
    tags: [],
    content: 'Post not found' 
  };

  return (
    <PostContainer>
      <PostCard>
        <PostTitle>{post.title}</PostTitle>
        <PostDate>{post.date}</PostDate>
        <div style={{ marginBottom: '1rem' }}>
          {post.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <MarkdownContent>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </MarkdownContent>
      </PostCard>
      
      <BackLink href="/news">← Tilbake til News</BackLink>
    </PostContainer>
  );
}
