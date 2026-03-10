import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import ThemeSwitch from './ThemeSwitch'
import SocialIcon from './social-icons'
import MobileNav from './MobileNav'
import Typewriter from 'typewriter-effect'
import { useRouter } from 'next/router'
import useSound from 'use-sound'
// import Logo from '@/data/logo.svg'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  const [playPageSound] = useSound('/static/sounds/page-change.mp3')

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="py-10">
          {/* Navbar - left aligned links, right aligned icons */}
          <div className="flex items-center justify-between text-base leading-5">
            {/* Left: Mobile hamburger menu (mobile only) / Nav links (desktop) */}
            <div className="flex items-center">
              <MobileNav />
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
                    onClick={playPageSound}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right: Social icons + theme switch (always visible) */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
                <SocialIcon kind="github" href={siteMetadata.github} size={5} />
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
              </div>
              <ThemeSwitch />
            </div>
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
