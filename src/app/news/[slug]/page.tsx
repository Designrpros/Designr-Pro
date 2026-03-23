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
  
  h3 {
    font-size: 1.2rem;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
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
  
  li {
    margin-bottom: 0.5rem;
  }
  
  strong {
    font-weight: 700;
    color: #1a1a1a;
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
  'uke-12-2026': {
    title: 'Uke 12, 2026 - Maskinene Tar Over, Men Hvem Eier Dem?',
    date: '23. mars 2026',
    tags: ['AI', 'Sikkerhet', 'Tech'],
    content: `
# Uke 12, 2026 - Maskinene Tar Over, Men Hvem Eier Dem?

**Publisert:** 23. mars 2026

---

## Hodetelefoner på, dette blir en travel uke.

Først ut: OpenAI kjøper Astral. Hvis du ikke vet hvem Astral er, kan jeg gi deg et hint: tenk på alle de Python-verktøyene du installerer uten å tenke over det - \`uv\` og Ruff kommer fra Astral. OpenAI vil nå eie verktøykassen som millioner av utviklere bruker hver dag.

Jepp. Det er en stor greie.

## Frontend-folket vil elske dette

Cursor slapp nylig Composer 2, og jeg må innrømme - navnet er kanskje kjedelig, men produktet er det ikke. Frontier-nivå koding til halvparten av prisen. Hvis du har fulgt med på AI-kodings-verdenen et år tilbake, da var dette science fiction. Nå er det en tirsdag.

## Den virkelige nyheten

Jeff Bezos planlegger et fond på $100 milliarder dollar. Jeg lar det synke inn et øyeblikk.

**$Hundre. Milliarder. Dollar.**

For å sette det i perspektiv: det er mer enn hele Norges BNP på et år. Bezos vil kjøpe produksjonsbedrifter og slå AI rett inn i dem.

## Sikkerhetsfolket får nitrist denne uken

Har du en iPhone? Oppdater den. Nå.

DarkSword er ikke én sårbarhet - det er en hel kjede av dem. Seks stykker som fungerer sammen for å gi angriperen full kontroll over telefonen din. Alt de trenger er at du åpner en nettside i Safari.

Oppdater til iOS 26.3. Jeg venter.

## Nord-Korea IT Army

...og ja, jeg sier "IT-arme" fordi det er det det er. Ikke bare noen gutter i en kjeller, men tusenvis av mennesker som opererer under falske identiteter i vestlige selskaper. De tjente $500 millioner dollar på dette.

## AI-eierskap er det nye eierskap

Hvis du eier en database, men en AI-agent kan utføre oppgaver basert på en annen databases informasjon - hvem har da den virkelige makta?

Agenter som fullfører oppgaver er verdimultiplikatorer. Databaser er... ja, de er nyttige, men kanskje ikke nok alene.

## Konklusjonen

Vi beveger oss mot en verden der færre aktører kontrollerer mer. Jeff Bezos med sine $100B. OpenAI som eier utviklerverktøyene. Apple som eier halvparten av vestlige smarttelefoner men likevel blir hacket.

Historien sier at ny teknologi alltid har ført til mer konsentrasjon. AI ser ikke ut til å være annerledes.

Men hvem tar skaden når makta blir for stor?

Ha en god helg. Oppdater iPhonen din først.

---

*Kilder: TLDR AI, TLDR InfoSec, TLDR Founders, TLDR IT, Horizon AI*
`
  },
  'uke-1': {
    title: 'Welcome to Designr.Pro News',
    date: 'March 18, 2026',
    tags: ['Intro', 'Our Sources'],
    content: `
# Welcome to Designr.Pro News!

We've gathered the best tech news from this week's newsletters and present them here for you.

---

## Why these sources?

### TLDR Newsletter
**What it is:** A daily tech newsletter that keeps you updated on the most important in programming, AI and tech.

**Why we like it:**
- Short and concise - you get the most important in under 5 minutes
- Broad coverage of the tech world
- No hype, just facts
- Perfect for developers and tech enthusiasts

---

### Horizon AI
**What it is:** A weekly newsletter (3x/week) from Gina Costa that acts as your personal AI researcher and translator.

**Why we like it:**
- Focuses only on what matters most in AI
- 3 minutes reading time per issue
- Practical tools and tutorials
- Personal voice - Gina digs through the news herself

---

### A Smart Bear
**What it is:** A weekly newsletter about startups, marketing and business from Jason Cohen.

**Why we like it:**
- Combined with TLDR + Horizon AI it gives a broader perspective
- Practical tips for building and growing a business
- Founder-retorikk som er både inspirerende og nyttig

---

## What do we cover?

| Kategori | TLDR | Horizon AI | A Smart Bear |
|----------|------|------------|--------------|
| AI & ML | ✅ | ✅✅ | ❌ |
| Web Dev | ✅ | ❌ | ❌ |
| Mobile | ✅ | ❌ | ❌ |
| DevOps | ✅ | ❌ | ❌ |
| Security | ✅ | ✅ | ❌ |
| Tools | ✅ | ✅ | ❌ |
| Business | ❌ | ❌ | ✅ |
| Marketing | ❌ | ❌ | ✅ |

---

## What to expect

Each week on **Designr.Pro News**:

1. **Top 3-5 stories** fra TLDR + Horizon AI + A Smart Bear
2. **Korte oppsummeringer** - ikke mer enn du trenger å vite
3. **Lenker til original** - hvis du vil dykke dypere
4. **Vår vurdering** - hva som faktisk er viktig

---

## Get started

Already subscribed? Great! We check the sources weekly and gather the best here.

**Next update: Monday, March 24, 2026**

---

*Designr.Pro News - Week's tech highlights in under 5 minutes*
`
  }
};

export default async function NewsPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
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
