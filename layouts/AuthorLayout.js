import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Experience from '@/components/Experience'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'
import { AiOutlineTwitter } from 'react-icons/ai'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`A little about me`} />

      {/* Profile photo - shows after heading on mobile, left on desktop */}
      <div className="mb-6 flex flex-col items-center px-6 lg:hidden">
        <Image
          src={avatar}
          alt="avatar"
          width="120px"
          height="120px"
          className="h-30 w-30 rounded-full object-cover"
          placeholder="blur"
          blurDataURL="/static/images/SVG-placeholder.png"
        />
        <h3 className="pb-2 pt-4 text-center text-xl font-bold leading-8 tracking-tight">{name}</h3>
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">{occupation}</div>
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">{company}</div>
      </div>

      <div className="flex items-center gap-8">
        {/* Profile photo on the left - desktop only */}
        <div className="hidden flex-col items-center lg:flex">
          <Image
            src={avatar}
            alt="avatar"
            width="192px"
            height="192px"
            className="h-48 w-48 rounded-full object-cover"
            placeholder="blur"
            blurDataURL="/static/images/SVG-placeholder.png"
          />
          <h3 className="pb-2 pt-4 text-center text-2xl font-bold leading-8 tracking-tight">
            {name}
          </h3>
          <div className="text-center text-gray-500 dark:text-gray-400">{occupation}</div>
          <div className="text-center text-gray-500 dark:text-gray-400">{company}</div>
        </div>

        {/* Main text content in the middle */}
        <div className="flex-1">
          {/* About heading - desktop only */}
          <div className="hidden space-y-2 pb-8 pt-6 md:space-y-5 lg:block">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              About
            </h1>
          </div>
          {/* Text content with more padding on mobile */}
          <div className="prose max-w-none px-6 pb-8 pt-4 dark:prose-dark lg:px-0 lg:pt-8">
            <p>
              <RoughNotation
                type="bracket"
                brackets={['left', 'right']}
                show={true}
                color="#a855f7"
                animationDelay={300}
                animationDuration={3000}
              >
                <p>{text1}</p>
                <p>{text2}</p>
              </RoughNotation>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
