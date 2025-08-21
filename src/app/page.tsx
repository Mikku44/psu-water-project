import Link from 'next/link'

export default function Home () {
  return (
    <main className='min-h-screen w-full flex flex-col gap-5 justify-center items-center'>
      <img src='/icon.png' className='max-w-[50vh] ' alt='project icon' />
      <div className='text-xl'>กำลังดำเนินการ</div>
      <div className='flex gap-5 absolute  bottom-0 m-5 justify-center w-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={24}
          height={24}
          viewBox='0 0 24 24'
        >
          <Link
            target='_blank'
            href={'https://www.facebook.com/profile.php?id=61578115720469'}
            rel='noreferrer'
            className='flex gap-2 items-center'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M12.683 22v-7.745h-2.607v-3.018h2.607V9.01a3.637 3.637 0 0 1 3.882-3.99a21 21 0 0 1 2.329.119v2.7h-1.599c-1.253 0-1.495.596-1.495 1.47v1.927h2.989l-.39 3.018h-2.6V22z'
                opacity={0.5}
              ></path>
              <path
                fill='currentColor'
                d='M20.999 2H2.998a1 1 0 0 0-1 1v18.001a1 1 0 0 0 1 1h18.001a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2.105 5.84h-1.599c-1.253 0-1.495.596-1.495 1.47v1.926h2.989l-.39 3.019h-2.6V22h-3.116v-7.745h-2.607v-3.019h2.607V9.01a3.637 3.637 0 0 1 3.882-3.99a21 21 0 0 1 2.329.12z'
              ></path>
            </svg>
            <div className="text-black/80">แผนน้ำภาคใต้ วช. </div>
          </Link>
        </svg>
      </div>
    </main>
  )
}
