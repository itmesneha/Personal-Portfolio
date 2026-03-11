import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Image from 'next/image'
import AnimatedAvatar from '@/components/AnimatedAvatarHandsOpen'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <div className="mt-8">
      <div className="flex min-h-[70vh] items-center gap-8">
        {/* Main content in the middle with profile photo on the left (handled by AuthorLayout) */}
        <div className="flex-1">
          <MDXLayoutRenderer
            layout={frontMatter.layout || DEFAULT_LAYOUT}
            mdxSource={mdxSource}
            frontMatter={frontMatter}
          />
        </div>

        {/* Animated Avatar on the right - desktop only */}
        <div className="hidden lg:block">
          {/* <AnimatedAvatar  width={200}
          height={250}/> */}

          <Image
            src="static/images/static_bending_sneha.png"
            alt="Animated avatar"
            width={200}
            height={300}
            unoptimized
          />
        </div>
      </div>

      {/* Animated Avatar at the bottom - mobile only, smaller */}
      <div className="mt-6 flex justify-center px-6 lg:hidden">
        <Image
          src="static/images/static_bending_sneha.png"
          alt="Animated avatar"
          width={140}
          height={210}
          unoptimized
        />
      </div>
    </div>
  )
}
