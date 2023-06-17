import Image from 'next/image'

export default function About() {
  return (
    <main className="relative grid mx-auto max-w-2xl p-10 sm:p-24">
      <div className=''>
        <Image
          className=""
          src="/rats.svg"
          alt="Rats Logo Dark"
          width={80}
          height={80}
          priority
          />  
            </div> 
            <div className=''>
          <h1 className="mt-10 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            About Rats
          </h1>
            </div>   
          <div className='w-full justify-left'>
          <p className="mt-6 text-black dark:text-white">
          The Rats App had been conceived with the goal of supporting a thriving mentoring program to expand its reach and impact. Through this initiative, we had discerned the importance of social capital in propelling anyone towards their aspirations. This was in line with the common saying, “it’s not just about what you know, but who you know.“ Clearly, it was evident that nobody could achieve anything substantial without the support of others.</p>
          <p className="mt-6 text-black dark:text-white">
          However, the process of building and leveraging social capital - encompassing the creation of a suitable network and mutual support - had often been opaque and inefficient, characterized by bias, exclusivity, and favoritism.</p>
          <p className="mt-6 text-black dark:text-white">
          Regrettably, the unhindered circulation of social capital is further impeded by the rapid expansion of social media. The current generation of social networks, while proving the feasibility of connecting billions, has paradoxically contributed to stark social isolation and division. Today’s social networks are under the control of a limited number of entities, operating primarily in favor of their interests and not necessarily those of individual users or society at large.
          </p>
          <p className="mt-6 text-black dark:text-white">
          The Rats App had been committed to helping individuals in methodically crafting a vision, setting goals, and formulating a plan to achieve those goals. A crucial aspect of this process was identifying, nurturing, and leveraging necessary relationships to accomplish these objectives while actively contributing to the community and assisting others in reaching their goals.</p>
          <p className="mt-6 text-black dark:text-white">
          In The Rats App, every action had signified an exchange of social capital. We had deemed it essential to begin quantifying the social capital we collectively accumulated. The saying, “You can’t improve what you don’t measure“ held true. Accordingly, we had introduced Cheese within the app. Cheese served as a metric for your accumulated social capital. Every action you undertook earned you Cheese, which could be used to unlock resources that assisted you or those you supported on your individual journeys. These resources ranged from expert access and opportunities to tangible financial assistance.
          </p>
          <p className="mt-6 text-black dark:text-white">
          We firmly believe that everyone yearns for a life of purpose and significance. In our experience, a fulfilling life is found through fostering a sense of belonging and becoming significant to others. The Rats App was designed to help you discover how to establish a sense of belonging and importance while facilitating your journey towards a more fulfilling life.
          </p>
        </div>   
    </main>
  )
}
