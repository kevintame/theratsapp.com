import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative grid mx-auto max-w-2xl p-10 sm:p-24">
      <div className='mx-auto'>
        <Image
          className=""
          src="/rats.svg"
          alt="Rats Logo Dark"
          width={80}
          height={80}
          priority
          />  
            </div> 
            <div className='text-center'>
          <h1 className="mt-10 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            Rats is no longer available.
          </h1>
          <p className="mt-6 text-lg sm:text-2xl text-black dark:text-white">
            Thanks for all your support!
          </p>
            </div>   
          <div className='w-full justify-left mt-20'>
          <p className="text-xl font-bold tracking-tight text-black dark:text-white sm:text-2xl">
            Why?
          </p>
          <p className="mt-6 text-black dark:text-white">
            We built some awesome stuff that was well-received by a substantial number of users. 
            Unfortunatly, we fell short of finding product-market fit and a viable business model. 😢
          </p>
        </div>   
    </main>
  )
}
