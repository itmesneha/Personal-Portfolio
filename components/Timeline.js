import {
  FaBaby,
  FaGraduationCap,
  FaBlackTie,
  FaUniversity,
  FaBriefcase,
  FaDesktop,
  FaLaptop,
  FaCodepen,
  FaCodeBranch,
  FaTerminal,
  FaCode,
} from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
import { Disclosure, Transition } from '@headlessui/react'
import { HiChevronDown, HiOutlineDatabase } from 'react-icons/hi'
import { BsBuilding } from 'react-icons/bs'
import { RiDoorClosedLine } from 'react-icons/ri'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'

export default function Timeline() {
  return (
    <div>
      <ol className="relative ml-6 mt-6 border-l border-zinc-400 dark:border-gray-800 ">
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 ring-8 ring-white dark:bg-purple-900 dark:ring-gray-900">
            <FaBlackTie />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Research Assistant for Agentic AI @ NUS TSS Group
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Jan 2026
          </time>
          {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            4.5 GPA
          </p> */}
        </li>

        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-200 ring-8 ring-white dark:bg-green-900 dark:ring-gray-900">
            <FaGraduationCap />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Graduated Masters @ National University of Singapore (NUS)
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Jan 2026
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">4.5 GPA</p>
        </li>

        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-200 ring-8 ring-white dark:bg-indigo-900 dark:ring-gray-900">
            <FaCode className="animate-none" />
          </span>
          <h3 className="flex items-center text-base  font-semibold text-gray-900 dark:text-white">
            Teaching Assistant - CS3244 Machine Learning | NUS School of Computing
            {/* <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              Present
            </span> */}
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2025 - Dec 2025
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Machine Learning | Python (NumPy, pandas, scikit-learn, Matplotlib) | Teaching &
            Mentorship | Data Visualization | Curriculum Development
          </p>
        </li>

        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-violet-200 ring-8 ring-white dark:bg-violet-900 dark:ring-gray-900">
            <FaTerminal className="animate-none" />
          </span>
          <h3 className="flex items-center text-base  font-semibold text-gray-900 dark:text-white">
            Teaching Assistant – Machine Learning (CeNCE AI Pathway)
            {/* <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              Present
            </span> */}
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2025 - Aug 2025
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Machine Learning | Python (NumPy, pandas, scikit-learn) | Google Colab | Curriculum
            Design | Data Visualization | Teaching & Mentorship | Kaggle Competition Design
          </p>
        </li>

        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900">
            <FaCodeBranch className="animate-none" />
          </span>
          <h3 className="flex items-center text-base  font-semibold text-gray-900 dark:text-white">
            Teaching Assistant – “Hacking the Heck” CI / CD | NUS School of Computing
            {/* <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              Present
            </span> */}
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2025 - Aug 2025
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            CI/CD | Git & GitHub | GitHub Actions | Python Automation | Jenkins | DevOps Education |
            Curriculum Design | Software Build & Deployment
          </p>
        </li>

        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-pink-200 ring-8 ring-white dark:bg-pink-900 dark:ring-gray-900">
            <FaCodepen className="animate-none" />
          </span>
          <h3 className="flex items-center text-base  font-semibold text-gray-900 dark:text-white">
            Research Assistant | Dean's Office (Yale - NUS College)
            {/* <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              Present
            </span> */}
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2025 - Nov 2025
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            OCR | Computer Vision | Data Cleaning | Python | OpenCV | Tesseract | PaddleOCR |
            Machine Learning Data Preparation
          </p>
        </li>

        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-amber-200 ring-8 ring-white dark:bg-amber-900 dark:ring-gray-900">
            <FaLaptop className="animate-none" />
          </span>
          <h3 className="flex items-center text-base  font-semibold text-gray-900 dark:text-white">
            Digital Content Assistant | Office of Risk Management and Compliance NUS
            {/* <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              Present
            </span> */}
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2025 - Dec 2025
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            WordPress | HTML/CSS | JavaScript | Web Content Management | UX/UI | SEO | Digital
            Design | Web Analytics
          </p>
        </li>

        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-teal-200 ring-8 ring-white dark:bg-teal-900 dark:ring-gray-900">
            <FaDesktop className="animate-none" />
          </span>
          <h3 className="flex items-center text-base  font-semibold text-gray-900 dark:text-white">
            Technical Assistant | Department of Analytics and Operations - NUS Business School
            {/* <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              Present
            </span> */}
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Sep 2024 - Jan 2026
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Power Automate | Power BI | Power Apps | Python | Workflow Automation | Data
            Visualization | Process Optimization | Administration
          </p>
        </li>

        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 ring-8 ring-white dark:bg-emerald-900 dark:ring-gray-900">
            <FaBriefcase className="animate-none" />
          </span>
          <h3 className="flex items-center text-base  font-semibold text-gray-900 dark:text-white">
            Automation Developer @ NUS IT
            {/* <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              Present
            </span> */}
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Aug 2024 - Oct 2024
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Python | Web Development | REST APIs | Databases | Systems Integration
          </p>
        </li>

        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-lime-200 ring-8 ring-white dark:bg-lime-900 dark:ring-gray-900">
            <FaUniversity />
          </span>
          <h3 className="flex items-center text-base  font-semibold text-gray-900 dark:text-white">
            Started Graduate Studies @ National University of Singapore (NUS)
            {/* <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              Present
            </span> */}
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Aug 2024
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Masters in Artificial Intelligence
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-rose-200 ring-8 ring-white dark:bg-rose-900 dark:ring-gray-900">
            <FaBlackTie className="animate-none" />
          </span>
          <h3 className="flex items-center text-base  font-semibold text-gray-900 dark:text-white">
            Adobe
            {/* <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              Present
            </span> */}
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Aug 2020 - Aug 2024
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Software Development Engineer II
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-200 ring-8 ring-white dark:bg-green-900 dark:ring-gray-900">
            <FaGraduationCap />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Graduated College
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Aug 2020
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            8.37 CGPA / 4.18 GPA
          </p>
        </li>

        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-200 ring-8 ring-white dark:bg-orange-900 dark:ring-gray-900">
            <HiOutlineDatabase />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Unisys</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Jan 2020 - Mar 2020
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Cloud Intern</p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 ring-8 ring-white dark:bg-purple-900 dark:ring-gray-900">
            <TbDeviceDesktopAnalytics />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Hasura</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Dec 2017 - Feb 2018
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Product Development Fellow
          </p>
        </li>
        <li className="mb-2 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-200 ring-8 ring-white dark:bg-red-900 dark:ring-gray-900">
            <BsBuilding />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Started College</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2016
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Bachelor of Technology in Computer Science Engineering
          </p>
        </li>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button>
                <div className="text-small ml-1.5 flex">
                  <HiChevronDown
                    className={`h-6 w-6 text-gray-600  ${open ? 'rotate-180 transform ' : ''}`}
                  />
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-400 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel>
                  {' '}
                  <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 ring-8 ring-white dark:bg-purple-900 dark:ring-gray-900">
                      <RiDoorClosedLine />
                    </span>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      Finished Senior Year
                    </h3>
                    <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      2016
                    </time>
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                      With 10/10 GPA in 10<sup>th</sup> & 96% in 12<sup>th</sup>
                    </p>
                  </li>
                  {/* <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-200 ring-8 ring-white dark:bg-yellow-900 dark:ring-gray-900">
                      <AiOutlineCode />
                    </span>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      First Code
                    </h3>
                    <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      July 6th, 2015
                    </time>
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                      Wrote my first program in C
                    </p>
                  </li> */}
                  <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                      <FaBaby />
                    </span>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">Born</h3>
                    <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      September 3rd, 1998
                    </time>
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                      Connected to the internet
                    </p>
                  </li>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </ol>
    </div>
  )
}
