import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function BooksSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Book({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Books - Brandon Fan</title>
        <meta
          name="description"
          content="I love reading books 📖. Here are some reads that I recommend."
        />
      </Head>
      <SimpleLayout
        title="I love reading books 📖. Here are some reads that I recommend."
        intro="I get asked about what books that I like to read. I've read books around neuroscience, business, productivity, faith, and just living life. Here are a few."
      >
        <div className="space-y-20">
          <BooksSection title="Currently Reading">
            <Book title="Competition Demystified by Bruce Greenwald and Judd Kahn">
              Amazing read so far on how competition is broken down into various factors and how those play out in multiple case studies. 
              Critical for how to build out defensibility within modern products and where you can build sustainable competitive advantages.
            </Book>
            <Book title="Loonshots by Safi Bahcall">
              How do we cultivate incredibly ambitious ideas? What does that look like at scale or when you&apos;re just starting? When is it worth quitting and when is it worth not.
              Super awesome book so far.
            </Book>
          </BooksSection>
          <hr className='border-zinc-200 dark:border-zinc-600'/>
          <BooksSection title="Life">
            <Book title="Principles by Ray Dalio">
            </Book>
            <Book title="Steve Jobs by Walter Isaacson">
            </Book>
            <Book title="Lost & Founder by Rand Fishkin">
            </Book>
            <Book title="Called to Create by Jordan Raynor">
            </Book>
            <Book title="Outliers by Malcolm Gladwell">
            </Book>
          </BooksSection>
          <BooksSection title="Science & Markets">
            <Book title="Poor Economics by Esther Duflo and Abhijit Banerjee">
            </Book>
            <Book title="How the Mind Works by Stephen Pinker">
            </Book>
            <Book title="Thinking Fast & Slow by Daniel Kahneman">
            </Book>
            <Book title="Good to Great by Jim Collins">
            </Book>
            <Book title="The Lean Startup by Eric Ries">
            </Book>
          </BooksSection>
          <BooksSection title="Storytelling">
            <Book title="The Soulful Art of Persuasion by Jason Harris">
            </Book>
            <Book title="The 7 Habits of Highly Effective People by Stephen Covey">
            </Book>
            <Book title="The 5 Levels of of Leadership by John C. Maxwell">
            </Book>
          </BooksSection>
          <BooksSection title="Everything Else">
            <Book title="The Design of Everyday things by Don Norman">
            </Book>
            <Book title="I, Robot by Isaac Asimov">
            </Book>
            <Book title="Brave New World by Aldous Huxley">
            </Book>
          </BooksSection>
        </div>
      </SimpleLayout>
    </>
  )
}
