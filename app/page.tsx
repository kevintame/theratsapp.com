import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative grid mx-auto max-w-2xl p-10 sm:p-24">
      <div className=''>
        <Image
          className=""
          src="/rats.svg"
          alt="Rats Logo Dark"
          width={180}
          height={180}
          priority
          />  
            </div>    
          <h1 className="mt-10 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            Rats is no longer available.
          </h1>
          <p className="mt-6 text-lg sm:text-2xl text-black dark:text-white">
            Thanks for all your support!
          </p>
          <div className='w-full justify-left mt-20'>
          <p className="text-xl font-bold tracking-tight text-black dark:text-white sm:text-2xl">
            Why?
          </p>
          <p className="mt-6 text-black dark:text-white">
            We built some awesome stuff and many users loved what we did but unfortunatly 
            we weren’t able to achieve product-market fit and get the the user base we needed to make it a viable business. 😢 
          </p>
        </div>   
    </main>
  )
}
