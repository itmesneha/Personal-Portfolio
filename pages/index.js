import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { RoughNotation } from 'react-rough-notation'
import SkillConstellation from '@/components/SkillConstellation'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
          <div className="max-w-xl pt-6 xl:max-w-lg">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I am{' '}
              <span className="text-primary-color-500 dark:text-primary-color-dark-500">Sneha</span>
            </h1>
            <h2 className="prose pt-5 text-base text-gray-600 dark:text-gray-300">
              {`Welcome to ${siteMetadata.description}. I'm an AI/ML Engineer in Singapore, building intelligent systems that solve real problems.`}
            </h2>
            <p className="pt-5 text-base leading-6 text-slate-600 dark:text-slate-300 sm:block md:hidden lg:hidden">
              {``}
              <RoughNotation
                animate="true"
                type="box"
                show={true}
                color="#CA8A04"
                animationDelay={1000}
                animationDuration={2500}
                className="text-slate-200"
              >
                reach out to chat!&nbsp;
              </RoughNotation>
            </p>
            <p className="hidden pt-8 text-base leading-6 text-slate-600 dark:text-slate-300 md:block">
              I work on agentic AI, ML platforms, and game dev. Check out my projects or{' '}
              <RoughNotation
                animate="true"
                type="highlight"
                show={true}
                color="#CA8A04"
                animationDelay={1000}
                animationDuration={2500}
                className="text-gray-600"
              >
                reach out to chat!&nbsp;
              </RoughNotation>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <SkillConstellation width={650} height={650} />
          </div>
        </div>
      </div>
    </>
  )
}
