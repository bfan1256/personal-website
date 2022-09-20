import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import blanklyPreview from '@/images/photos/blankly-preview.png'
import migPreview from '@/images/photos/mig.png'
import shadePreview from '@/images/photos/shade.png'
import snippets from '@/images/photos/snippets.png'
import slate from '@/images/photos/slate.png'
import awaken from '@/images/photos/awaken.png'

const projects = [
  {
    name: 'Blankly',
    description:
      'Blankly makes it incredibly easy for you to go from a trading idea to a full trading algorithm in minutes instead of months. Our open source package has hit 1.1K stars and over 10K downloads / mo. And our platform has hit over 1K users / mo.',
    link: { href: 'http://blankly.finance', label: 'Go to Website' },
    logo: logoPlanetaria,
    preview: blanklyPreview,
  },
  {
    name: 'Shade Robotics',
    description:
      'Built out Shade Registry including 18 AI algorithms built for the ROS2 ecosystem. Shade Robotics seeked to provide easy to use robotic algorithms that could be run in the cloud. This allowed properly offloading. Worked closely with FogROS2 team at UC Berkeley.',
    link: { href: 'https://shaderobotics.com', label: 'Go to Website' },
    logo: logoAnimaginary,
    preview: shadePreview
  },
  {
    name: 'Michigan Investment Group Platform',
    description:
      'Platform that enables investment teams and members in the club to actively engage and find interesting coverage on stocks including confidence scores on earnings calls via NLP, sentiment analysis, and fundamentals. (pwd: MIG-Rocks)',
    link: { href: 'https://platform.michiganinvestmentgroup.com', label: 'Go to Website' },
    logo: logoHelioStream,
    preview: migPreview
  },
  {
    name: 'Snippets.io',
    description:
      'An easy place to curate and find easy to use snippets with strong semantic search. Built in 1 week.',
    link: { href: 'https://snippets.io', label: 'Go to Website' },
    logo: logoAnimaginary,
    preview: snippets
  },
  {
    name: 'Awaken Apps',
    description:
      'Built a prayer app for church goers for accountability (on iOS and Android). Also expanded into building bible study applications as well.',
    link: { href: 'https://awakenapps.com', label: 'Go to Website' },
    logo: logoOpenShuttle,
    preview: awaken,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Brandon Fan</title>
        <meta
          name="description"
          content="Ideas are cheap. Building is everything 🏗️."
        />
      </Head>
      <SimpleLayout
        title="Ideas are cheap. Building is everything 🏗️."
        intro="I’ve worked on many projects from little projects for myself to large-scale open source projects. Here are a few that I&apos;m most proud of building."
      >
        
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              {project.preview ?
              (
              <div className="rounded-md relative h-56 flex-1">
                <Image
                  src={project.preview}
                  alt=""
                  objectFit="cover"
                  width={500}
                  height={300}
                  className="rounded-md"
                />
              </div>
              ) : null}
              {/* <div className="relative z-10 mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div> */}
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>

        <p className="dark:text-zinc-200 text-zinc-800 mt-12">Want to see more projects? Check out my GitHub</p>
      </SimpleLayout>
    </>
  )
}
