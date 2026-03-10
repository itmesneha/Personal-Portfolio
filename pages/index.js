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
          height="50"
          width="50"
          className="absolute right-48 top-32 hidden opacity-80 lg:block"
        ></img>
        <img
          src="/static/images/mail.png"
          height="50"
          width="50"
          className="absolute bottom-24 left-64 hidden opacity-80 lg:block"
        ></img>
        <img
          src="/static/images/mouse.png"
          height="60"
          width="60"
          className="absolute bottom-20 right-0 hidden opacity-80 lg:block"
        ></img>
        <img
          src="/static/images/neural_network.png"
          height="50"
          width="50"
          className="right-62 absolute top-10 hidden rotate-[240deg] opacity-80 lg:block"
        ></img>

        {/* Main content - stays centered */}
        <div className="flex min-h-[80vh] flex-col items-center justify-center lg:flex-row">
          <div className="mb-8 lg:mb-0">
            {/* Mobile version - smaller */}
            <div className="block lg:hidden">
              <AnimatedAvatar width={200} height={200} fps={8} />
            </div>
            {/* Desktop version - larger */}
            <div className="hidden lg:block">
              <AnimatedAvatar width={300} height={300} fps={8} />
            </div>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="whitespace-nowrap pb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm{' '}
              <span className="text-primary-color-500 dark:text-primary-color-dark-500">Sneha</span>
              .
            </h1>
            <h2 className="max-w-3xl pr-0 text-base text-gray-600 dark:text-gray-300 md:text-lg lg:text-xl">
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
        </div>
      </div>
    </>
  )
}
