import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { RoughNotation } from 'react-rough-notation'
import AnimatedAvatar from '@/components/AnimatedAvatarHandsClosed'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="relative min-h-[80vh]">
        {/* Scattered images positioned around the page */}
        <img
          src="/static/images/laptop.png"
          height={120}
          width={120}
          className="absolute left-20 top-32 opacity-80"
        />
        <img
          src="/static/images/mail.png"
          height={100}
          width={100}
          className="absolute right-32 top-20 opacity-80"
        />
        <img
          src="/static/images/mouse.png"
          height={90}
          width={90}
          className="absolute left-32 bottom-24 opacity-80"
        />

        {/* Main content - stays centered */}
        <div className="flex min-h-[80vh] items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <h1 className="whitespace-nowrap pb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm{' '}
              <span className="text-primary-color-500 dark:text-primary-color-dark-500">Sneha</span>
              .
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
      </div>
    </>
  )
}
