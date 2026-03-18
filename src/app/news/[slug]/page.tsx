'use client';

import styled from 'styled-components';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

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
  
  li {
    margin-bottom: 0.5rem;
  }
  
  strong {
    font-weight: 600;
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

const postContent: Record<string, { title: string; date: string; content: string }> = {
  'uke-12-2026': {
    title: 'Uke 12, 2026',
    date: '17. mars 2026',
    content: `
Jeg har tenkt en del denne uken. Ikke bare på prosjektene våre, men på hvordan vi bygger og lærer. Det startet egentlig med en samtale om nettsidene våre - costofliving.no og nå Berentsen Labs - og endte opp med at vi samlet innhold fra Entreflâneur for å bygge vårt eget ukentlige nyhetsbrev.

Det som slår meg er hvor lite som skal til for å komme i gang. For et år siden hadde jeg knapt tenkt på å bygge en "markedsplass for levekostnader i Europa". Nå er det 50+ land og 210+ byer. På samme måte startet alt med en prat om AI-assistenter, og nå har Berentsen Labs sin egen nettside.

Det er noe med å bare starte. Ikke vente til alt er perfekt.

En av postene jeg samlet denne uken var "AI Loops" fra Entreflâneur. Hovedpoenget var enkelt: AI som buzzword er ferdig. Alle skriker "AI" nå, så det å bare si at du bruker AI er ikke lenger nok. Folk vil vite HVORDAN du er unik. Det samme gjelder for alt vi bygger - vi må finne vår "unique mechanism".

Så jeg har tenkt på hva som er vårt. Kanskje det er evnen til å kombinere teknisk kompetanse med en viss personlig stemme? Kanskje det er at vi faktisk bygger ting selv, ikke bare snakker om det? Jeg vet ikke enda, men jeg liker at vi leter.

En annen post var "Business Autism" - et begrep venner og jeg bruker om folk som blir så oppslukt i business at de glemmer alt annet. Jeg kjenner meg igjen. De siste ukene har jeg jobbet mye, hatt lite sosial kontakt, og jeg merker at jeg blir litt rar. Ikke dårlig, bare... annerledes. Løsningen er enkel: komme seg ut. Jeg har satt en regel om å komme seg ut blant folk minst annenhver uke. Som en muskel - den atrofierer hvis du ikke bruker den.

Og apropos systemer - "Delicious Systems" var nok en påminnelse. Min bedrift, og egentlig alt jeg driver med, fungerer bedre når det er dokumentert. Å lage SOPs (Standard Operating Procedures) føles kjedelig i øyeblikket, men det er kjedelig som skaper frihet.

Vi har samlet 11 poster fra Entreflâneur nå, og det er kult å se mønsteret. Det handler egentlig om det samme gang på gang: vær unik, bygg systemer, unngå isolasjon, start nå.

Når jeg tenker på uken som har gått, er jeg faktisk ganske stolt. Vi har bygget ting, vi har samlet innhold, vi har laget en metodologi for hvordan dette skal fungere fremover. costofliving.no er der ute og hjelper folk med reisebudsjett. Berentsen Labs har sin egen nettside. Designr.Pro er oppdatert. Vi har til og med en cron-jobb som sender meg nettside-ideer hver morgen kl 09:00.

Det føles som vi er midt i et "obsession flywheel" - de første 20 minuttene suger, men så begynner det å bli gøy. Og jo mer vi gjør, jo mer gøy blir det.

---

## Ressurser denne uken

**Bøker:**
- Breakthrough Advertising av Eugene Schwartz - Forstå markedssykluser

**Verktøy:**
- Loom - Video-SOPer med AI
- Notion - Prosess-sjekklister  
- Lucidchart - Prosess-kart

**Nettsider:**
- [costofliving.no](https://costofliving.no) - Levekostnader i Europa
- [wikits.net](https://wikits.net) - AI-drevet læring
- [berentsenlabs.no](https://berentsenlabs.no) - Vår nye nettside
`
  }
};

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const slug = 'uke-12-2026';
  const post = postContent[slug] || { title: 'Post not found', date: '', content: 'Post not found' };

  return (
    <PostContainer>
      <PostCard>
        <PostTitle>{post.title}</PostTitle>
        <PostDate>{post.date}</PostDate>
        <MarkdownContent>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </MarkdownContent>
      </PostCard>
      
      <BackLink href="/blog">← Tilbake til blogg</BackLink>
    </PostContainer>
  );
}
