import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { RoughNotation } from 'react-rough-notation'
import AnimatedAvatar from '@/components/AnimatedAvatar'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="flex min-h-[80vh] items-center justify-center">
        <img src="/static/images/laptop.png" height={300} width={300} />
        <div className="flex flex-col items-center text-center">
          <h1 className="whitespace-nowrap pb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm{' '}
            <span className="text-primary-color-500 dark:text-primary-color-dark-500">Sneha</span>.
          </h1>
          <h2 className="prose max-w-3xl pt-5 text-base text-gray-600 dark:text-gray-300 md:text-lg lg:text-xl">
            {`Welcome to ${siteMetadata.description}. I'm an AI/ML Engineer in Singapore, building intelligent systems that solve real problems.`}
          </h2>
          <p className="max-w-3xl pt-8 text-sm leading-6 text-slate-600 dark:text-slate-300 md:text-base">
            I work on agentic AI, ML platforms, and game dev. Check out my projects or{' '}
            <RoughNotation
              animate="true"
              type="underline"
              show={true}
              color="#a855f7"
              animationDelay={1000}
              animationDuration={2500}
              className="text-gray-600"
            >
              reach out to chat!&nbsp;
            </RoughNotation>
          </p>
        </div>
        <div>
          <AnimatedAvatar width={300} height={300} fps={8} />
        </div>
      </div>
    </>
  )
}
